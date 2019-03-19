import React from 'react';
import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import BackgroundImage from 'gatsby-background-image';

import Layout from '../components/layout/layout';
import Container from '../components/container';

import styles from '../scss/pages/blog.module.scss'

class Blog extends React.Component {
  render() {
    const posts = get(this,
      'props.data.allMarkdownRemark.edges'
    );
    const devBackground = get(this,
      'props.data.devBackground.childImageSharp.fluid'
    );
    const foodBackground = get(this,
      'props.data.foodBackground.childImageSharp.fluid'
    );

    return (
      <Layout>
        <h1 className={`text_center ${styles.blog_title}`}>Blog</h1>
        <div className={styles.blog_featureSections}>
          <BackgroundImage Tag="div" fluid={devBackground} className={styles.blog_featureSections_block} backgroundColor={`#040e18`}>
            <Link to={`/category/dev`} className={styles.blog_featureSections_overlayLink}>
              <div className={styles.blog_featureSections_overlay}></div>
            </Link>
            <h2 className={styles.blog_featureSections_devTitle}>
              <Link to={`/category/dev`} style={{ textDecoration: 'none', color: 'white' }}>Dev</Link>
            </h2>
          </BackgroundImage>
          <BackgroundImage Tag="div" fluid={foodBackground} className={styles.blog_featureSections_block} backgroundColor={`#040e18`}>
            <Link to={`/category/food`} className={styles.blog_featureSections_overlayLink}>
              <div className={styles.blog_featureSections_overlay}></div>
            </Link>
            <h2 className={styles.blog_featureSections_foodTitle}>
              <Link to={`/category/food`} style={{ textDecoration: 'none', color: 'white' }}>Food</Link>
            </h2>
          </BackgroundImage>
        </div>
        <Container>
          <p className={styles.pageDescription}>
            This is a place for my thoughts on many of the things I love in life. From web development, to restaurant reveiws and recipes, to woodworking. These thoughts are my own for the world to hopefully learn a little more about me.
          </p>
          <h2 className={styles.latestPosts}>Latest Posts</h2>
          {
            posts.map(({ node }) => {
              const post = get(node,
                'frontmatter'
              ) || node.fields.slug;
              return (
                <div key={node.fields.slug} style={{ maxWidth: '750px', margin: '75px auto' }}>
                  <h3>
                    <Link className="font_default" style={{ boxShadow: 'none' }} to={node.fields.slug}>
                      {post.title}
                    </Link>
                  </h3>
                  <div>
                    <small>{post.date}</small>
                  </div>
                  <Link to={`/category/${post.category}`}>
                    <small>#{post.category}</small>
                  </Link>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>
              );
            })
          }
        </Container>
      </Layout>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    devBackground: file(relativePath: {eq: "markus-spiske-148030-unsplash.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    foodBackground: file(relativePath: {eq: "eaters-collective-109596-unsplash.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY h:mm A")
            title
            category
          }
        }
      }
    }
  }
`;
