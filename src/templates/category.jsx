import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/layout';
import Container from '../components/container';

class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.pathContext.tag;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const posts = get(this.props, 'data.allMarkdownRemark.edges');
    const postCount = get(this.props, 'data.allMarkdownRemark.totalCount');
    return (
      <Layout>
        <Helmet title={`Posts in category "${category}" | ${siteTitle}`} />
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
              const title = get(node, 'frontmatter.title') || node.fields.slug;
              return (
                <div key={node.fields.slug}>
                  <h3>
                    <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { visible: { ne: false }, tags: { eq: $tag } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
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
`;

export default CategoryTemplate;
