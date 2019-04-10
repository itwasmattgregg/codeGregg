import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import _ from 'lodash';
import BackgroundImage from 'gatsby-background-image';

import Bio from '../components/Bio';
import Layout from '../components/layout/layout';
import Container from '../components/container';
import styles from '../scss/templates/blog-post.module.scss';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const location = get(this.props, 'location.href');
    const siteDescription = post.excerpt;
    const { previous, next } = this.props.pageContext;
    const featuredImage = get(
      this,
      'props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid'
    );

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        {featuredImage && (
          <div style={{}}>
            <BackgroundImage
              Tag='div'
              fluid={featuredImage}
              className={styles.featuredImage}
              backgroundColor={`#040e18`}
            />
          </div>
        )}
        <Container>
          <div className='text_center'>
            <h1 className={`${styles.blogTitle} text_center`}>
              {post.frontmatter.title}
            </h1>
            <div>
              {post.frontmatter.tags &&
                post.frontmatter.tags.map(category => (
                  <Link
                    key={category}
                    className={styles.tagItem}
                    style={{ marginRight: '10px' }}
                    to={`/category/${_.kebabCase(category)}`}
                  >
                    #{category}
                  </Link>
                ))}
            </div>
            <p className={styles.date}>{post.frontmatter.date}</p>
          </div>
          <div style={{ maxWidth: '740px', margin: '0 auto' }}>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <hr />
          <Bio location={location} />

          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel='prev'>
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel='next'>
                  {next.frontmatter.title}→
                </Link>
              )}
            </li>
          </ul>
        </Container>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      timeToRead
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
