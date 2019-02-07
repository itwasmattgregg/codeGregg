import React from 'react';
import { graphql, Link } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/layout/layout';
import Container from '../components/container';

class Blog extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <Layout>
        <Container>
          <h1 className='text_center'>Blog</h1>
          <p
            className='text_center'
            style={{ maxWidth: '700px', margin: '20px auto' }}
          >
            This is a place for my thoughts on many of the things I love in
            life. From web development, to restaurant reveiws and recipes, to
            woodworking. These thoughts are my own for the world to hopefully
            learn a little more about me.
          </p>
          {posts.map(({ node }) => {
            const post = get(node, 'frontmatter') || node.fields.slug;
            return (
              <div key={node.fields.slug} style={{ marginBottom: '75px' }}>
                <h3>
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
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
          })}
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
