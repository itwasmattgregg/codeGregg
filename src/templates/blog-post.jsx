import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import _ from 'lodash';
import BackgroundImage from 'gatsby-background-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Bio from '../components/Bio';
import Container from '../components/container';
import Layout from '../components/layout/layout';
import styles from '../scss/templates/blog-post.module.scss';

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.mdx');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const location = get(this.props, 'location.href');
    const excerpt = post.excerpt;
    const { previous, next } = this.props.pageContext;
    const featuredImage = get(
      this,
      'props.data.mdx.frontmatter.featuredImage.childImageSharp.fluid'
    );
    const featuredImagePublicURL = get(
      this,
      'props.data.mdx.frontmatter.featuredImage.publicURL'
    );

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        >
          <meta property='description' content='excerpt' />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://codegregg.com/' />
          <meta
            property='og:title'
            content={`${post.frontmatter.title} | ${siteTitle}`}
          />
          <meta property='og:description' content={excerpt} />
          <meta
            property='og:image'
            content={`https://codegregg.com${featuredImagePublicURL}`}
          />

          {/* <!-- Twitter --> */}
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://codegregg.com/' />
          <meta
            property='twitter:title'
            content={`${post.frontmatter.title} | ${siteTitle}`}
          />
          <meta property='twitter:description' content={excerpt} />
          <meta
            property='twitter:image'
            content={`https://codegregg.com${featuredImagePublicURL}`}
          />
        </Helmet>
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
          <div style={{ maxWidth: '740px', margin: '0 auto 100px' }}>
            <MDXRenderer>{post.body}</MDXRenderer>
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
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      timeToRead
      body
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          publicURL
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
