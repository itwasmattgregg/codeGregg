const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const screenshot = require('./generate-image');
const {
  createFileNode: baseCreateFileNode,
} = require(`gatsby-source-filesystem/create-file-node`);

let browser = null;

async function createFileNode(path, createNode, createNodeId, parentNodeId) {
  const fileNode = await baseCreateFileNode(path, createNodeId);
  fileNode.parent = parentNodeId;
  createNode(fileNode, {
    name: `gatsby-source-filesystem`,
  });
  return fileNode;
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const mdx = new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allFile(
            filter: {
              sourceInstanceName: { eq: "posts" }
              childMdx: { frontmatter: { visible: { eq: true } } }
            }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                childMdx {
                  id
                  frontmatter {
                    tags
                  }
                }
              }
            }
          }
        }
      `).then((result) => {
        // this is some boilerlate to handle errors
        if (result.errors) {
          console.error(result.errors);
          reject(result.errors);
        }
        const posts = result.data.allFile.edges;

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.jsx`),
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          });
        });

        const tagSet = new Set();
        result.data.allFile.edges.forEach((edge) => {
          if (edge.node.childMdx.frontmatter.tags) {
            edge.node.childMdx.frontmatter.tags.forEach((tag) => {
              tagSet.add(tag);
            });
          }
        });

        const tagPage = path.resolve('src/templates/category.jsx');

        const tagList = Array.from(tagSet);
        tagList.forEach((tag) => {
          createPage({
            path: `/category/${_.kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag,
            },
          });
        });
      })
    );
  });

  const tinywins = new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allFile(filter: { sourceInstanceName: { eq: "tinywins" } }) {
            edges {
              node {
                fields {
                  slug
                }
                childMdx {
                  id
                  body
                  excerpt
                  fields {
                    socialImage {
                      childImageSharp {
                        original {
                          src
                          height
                          width
                        }
                      }
                    }
                  }
                  frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                  }
                }
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          console.error(result.errors);
          reject(result.errors);
        }
        const wins = result.data.allFile.edges;

        _.each(wins, (win, index) => {
          const mdx = win.node.childMdx;
          let ogImage = null;
          if (mdx.fields && mdx.fields.socialImage) {
            ogImage = mdx.fields.socialImage.childImageSharp.original;
          }

          createPage({
            path: win.node.fields.slug,
            component: path.resolve(`./src/templates/tiny-win.jsx`),
            context: {
              body: mdx.body,
              date: mdx.frontmatter.date,
              title: mdx.frontmatter.title,
              excerpt: mdx.excerpt,
              ogImage,
            },
          });
        });
      })
    );
  });
  return Promise.all([tinywins, mdx]);
};

exports.onPreInit = async () => {
  // Launch a Puppeteer browser at the start of the build
  browser = await puppeteer.launch({ headless: true });
};

exports.onPostBuild = async () => {
  // Close the browser at the end
  await browser.close();
};

exports.onCreateNode = async ({
  node,
  actions,
  getNode,
  createNodeId,
  store,
}) => {
  const { createNodeField, createNode } = actions;

  const program = store.getState().program;
  const CACHE_DIR = path.resolve(`${program.directory}/.cache/social/`);
  await fs.ensureDir(CACHE_DIR);

  if (node.internal.type === `Mdx`) {
    try {
      // Generate our image from the node
      const parentNode = getNode(node.parent);
      const postType = parentNode.sourceInstanceName;
      const ogImage = await screenshot(CACHE_DIR, browser, node, postType);
      // Create the file node for the image
      const ogImageNode = await createFileNode(
        ogImage,
        createNode,
        createNodeId,
        node.id
      );
      // Attach the image to our Mdx node
      createNodeField({
        name: 'socialImage___NODE',
        node,
        value: ogImageNode.id,
      });
    } catch (e) {
      console.log(e);
    }
  }

  if (node.sourceInstanceName === 'tinywins') {
    const value = createFilePath({ node, getNode });
    createNodeField({ name: 'slug', node, value: `/tinywins${value}` });
  }

  if (node.sourceInstanceName === 'posts') {
    const value = createFilePath({ node, getNode });
    createNodeField({ name: 'slug', node, value: `/blog${value}` });
  }
};
