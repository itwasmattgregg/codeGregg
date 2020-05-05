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

export default function BlogPost({ pageContext, data, location, path }) {
  const post = get(data, 'file.childMdx');
  const { title, siteUrl } = data.site.siteMetadata;
  const ogImage = post.fields.socialImage.childImageSharp.original.src;
  const url = location.href;
  const excerpt = post.excerpt;
  const { previous, next } = pageContext;
  const featuredImage = get(
    post,
    'frontmatter.featuredImage.childImageSharp.fluid'
  );

  return (
    <Layout>
      <Helmet defer={false}>
        <html lang='en' />
        <title>{`${post.frontmatter.title} | ${title}`}</title>
        <meta property='description' content={excerpt} />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`${siteUrl}${path}`} />
        <meta
          property='og:title'
          content={`${post.frontmatter.title} | ${title}`}
        />
        <meta property='og:description' content={excerpt} />
        <meta property='og:image' content={`${siteUrl}${ogImage}`} />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={`${siteUrl}${path}`} />
        <meta
          property='twitter:title'
          content={`${post.frontmatter.title} | ${title}`}
        />
        <meta property='twitter:description' content={excerpt} />
        <meta property='twitter:image' content={`${siteUrl}${ogImage}`} />
      </Helmet>
      {featuredImage && (
        <div>
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
        <div style={{ maxWidth: '800px', margin: '0 auto 100px' }}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        <hr />
        <Bio location={url} />

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
                ← {previous.childMdx.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel='next'>
                {next.childMdx.frontmatter.title}→
              </Link>
            )}
          </li>
        </ul>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    file(fields: { slug: { eq: $slug } }) {
      childMdx {
        id
        excerpt
        timeToRead
        body
        fields {
          socialImage {
            childImageSharp {
              original {
                width
                height
                src
              }
            }
          }
        }
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
  }
`;
