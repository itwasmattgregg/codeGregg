import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import Bio from '../components/Bio';
import Layout from '../components/layout/layout';
import Container from '../components/container';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props,
      'data.site.siteMetadata.title'
    );
    const location = get(this.props,
      'location.href');
    const siteDescription = post.excerpt;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Container>
          <div style={{}}>
            <h1>{post.frontmatter.title}</h1>
          </div>
          <div style={{ maxWidth: '740px', margin: '0 auto' }}>
            <Link to={`/category/${post.frontmatter.category}`}>
              #{post.frontmatter.category}
            </Link>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.frontmatter.date}
            </p>
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
              {
                previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )
              }
            </li>
            <li>
              {
                next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title}
                    →
                  </Link>
                )
              }
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
      frontmatter {
        title
        category
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
