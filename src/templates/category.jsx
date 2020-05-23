import React from 'react';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/layout';
import Container from '../components/container';

class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.pathContext.tag;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const posts = get(this.props, 'data.allFile.edges');
    const postCount = get(this.props, 'data.allFile.totalCount');
    return (
      <Layout>
        <Helmet title={`${category} | ${siteTitle}`} />
        <Container>
          <div style={{ maxWidth: '740px', margin: '0 auto' }}>
            <h1
              className='text_center'
              style={{ textTransform: 'capitalize', marginTop: '40px' }}
            >
              {category}
            </h1>
            <h5>Total Posts: {postCount}</h5>
            {posts.map(({ node }) => {
              const title =
                get(node, 'childMdx.frontmatter.title') || node.fields.slug;
              return (
                <div key={node.fields.slug} style={{ marginBottom: '60px' }}>
                  <h3>
                    <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.childMdx.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{ __html: node.childMdx.excerpt }}
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($tag: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allFile(
      sort: { fields: [childMdx___frontmatter___date], order: DESC }
      filter: {
        sourceInstanceName: { eq: "posts" }
        childMdx: { frontmatter: { visible: { eq: true }, tags: { eq: $tag } } }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          childMdx {
            excerpt
            timeToRead
            frontmatter {
              date(formatString: "DD MMMM, YYYY h:mm A")
              title
            }
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
