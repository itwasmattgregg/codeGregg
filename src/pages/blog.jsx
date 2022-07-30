import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import kebabCase from 'lodash/kebabCase';

import Layout from '../components/layout/layout';
import Container from '../components/container';

import * as styles from '../scss/pages/blog.module.scss';

class Blog extends Component {
  render() {
    const posts = this?.props?.data?.allFile?.edges;
    const siteTitle = this?.props?.data?.site.siteMetadata.title;
    const devBackground = getImage(this.props.data.devBackground);
    const foodBackground = getImage(this.props.data.foodBackground);

    return (
      <Layout>
        <Helmet title={`Blog | ${siteTitle}`} />
        <h1 className={`text_center ${styles.blog_title}`}>Blog</h1>
        <div className={styles.blog_featureSections}>
          <div className={styles.blog_featureSections_block}>
            <GatsbyImage
              image={devBackground}
              className={styles.blog_featureSection_image}
              style={{ position: 'absolute' }}
              alt='Computer with code on the screen'
            />
            <Link
              to={`/category/dev`}
              className={styles.blog_featureSections_overlayLink}
            >
              <div className={styles.blog_featureSections_overlay} />
            </Link>
            <h2 className={styles.blog_featureSections_devTitle}>
              <Link to={`/category/dev`} style={{ color: 'white' }}>
                Dev
              </Link>
            </h2>
          </div>
          <div className={styles.blog_featureSections_block}>
            <GatsbyImage
              image={foodBackground}
              className={styles.blog_featureSection_image}
              style={{ position: 'absolute' }}
              alt='Glass of cognac and cheesy baked pasta'
            />
            <Link
              to={`/category/food`}
              className={styles.blog_featureSections_overlayLink}
            >
              <div className={styles.blog_featureSections_overlay} />
            </Link>
            <h2 className={styles.blog_featureSections_foodTitle}>
              <Link to={`/category/food`} style={{ color: 'white' }}>
                Food
              </Link>
            </h2>
          </div>
        </div>
        <Container>
          <p className={styles.pageDescription}>
            This is a place for my thoughts on many of the things I love in
            life. From web development, to restaurant reveiws and recipes, to
            woodworking. These thoughts are my own for the world to hopefully
            learn a little more about me.
          </p>
          <h2 className={styles.latestPosts}>Latest Posts</h2>
          {posts.map(({ node }) => {
            const post = node?.childMdx.frontmatter;
            return (
              <div
                key={node.fields.slug}
                style={{ maxWidth: '750px', margin: '75px auto' }}
              >
                <h3 style={{ marginBottom: '0.5em' }}>
                  <Link
                    className='font_default'
                    style={{ boxShadow: 'none' }}
                    to={node.fields.slug}
                  >
                    {post.title}
                  </Link>
                </h3>
                <div>
                  <small className='font_monad'>{post.date}</small>
                </div>
                <div style={{ marginBottom: '0.5em' }}>
                  {post.tags &&
                    post.tags.map((category) => (
                      <Link
                        key={category}
                        style={{ marginRight: '10px' }}
                        to={`/category/${kebabCase(category)}`}
                      >
                        #{category}
                      </Link>
                    ))}
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: node.childMdx.excerpt }}
                />
              </div>
            );
          })}
        </Container>
      </Layout>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    devBackground: file(
      relativePath: { eq: "fatos-bytyqi-535528-unsplash.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 600
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    foodBackground: file(
      relativePath: { eq: "eaters-collective-109596-unsplash.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 600
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    allFile(
      sort: { fields: [childMdx___frontmatter___date], order: DESC }
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
            excerpt
            frontmatter {
              date(formatString: "DD MMMM, YYYY h:mm A")
              title
              tags
            }
          }
        }
      }
    }
  }
`;
