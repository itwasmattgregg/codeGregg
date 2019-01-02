import React from "react";
import Helmet from "react-helmet";
import get from 'lodash/get'


class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.pathContext.category;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <div className="category-container">
        <Helmet
          title={`Posts in category "${category}" | ${siteTitle}`}
        />
        hey there
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
            title
            date
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
