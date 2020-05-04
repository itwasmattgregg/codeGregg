const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
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
      `).then(result => {
        // this is some boilerlate to handle errors
        if (result.errors) {
          console.error(result.errors);
          reject(result.errors);
        }
        const posts = result.data.allFile.edges;
        const tagPage = path.resolve('src/templates/category.jsx');

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
        result.data.allFile.edges.forEach(edge => {
          if (edge.node.childMdx.frontmatter.tags) {
            edge.node.childMdx.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);
            });
          }
        });

        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
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
                  frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                  }
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.error(result.errors);
          reject(result.errors);
        }
        const wins = result.data.allFile.edges;

        _.each(wins, (win, index) => {
          const mdx = win.node.childMdx;

          createPage({
            path: win.node.fields.slug,
            component: path.resolve(`./src/templates/tiny-win.jsx`),
            context: {
              body: mdx.body,
              date: mdx.frontmatter.date,
              title: mdx.frontmatter.title,
            },
          });
        });
      })
    );
  });

  return Promise.all([tinywins]);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.sourceInstanceName === 'tinywins') {
    const value = createFilePath({ node, getNode });
    createNodeField({ name: 'slug', node, value: `/tinywins${value}` });
  }

  if (node.sourceInstanceName === 'posts') {
    const value = createFilePath({ node, getNode });
    createNodeField({ name: 'slug', node, value: `/blog${value}` });
  }
};
