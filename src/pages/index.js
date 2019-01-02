import React from 'react'
import Img from "gatsby-image"

import Layout from '../components/layout/layout'
import FeatureBox from '../components/featureBox/featureBox'
import { Link } from 'gatsby';
import get from 'lodash/get';
import Tech from '../components/Tech';
import Container from '../components/container';

class IndexPage extends React.Component {
  render() {
    const latestPost = get(this, 'props.data.allMarkdownRemark.edges[0].node');
    const profileImg = get(this, 'props.data.profileImg');

    return (
      <Layout>
        <div style={{
          display: 'flex',
        }}>
          <FeatureBox side="left" backgroundColor="darkBlue">
            <h1 class="h3">Minneapolis Web Developer</h1>
            <h2>Matt Gregg</h2>
            <Img fixed={profileImg.childImageSharp.fixed} />
          </FeatureBox>
          <FeatureBox side="right" backgroundColor="lightBlue">
            <h3>Latest Blog Post</h3>
            <h2><Link to={latestPost.fields.slug}>{latestPost.frontmatter.title}</Link></h2>
          </FeatureBox>
        </div>
        <Container>
          <Tech></Tech>
        </Container>
      </Layout>
    );
  }
}

export default IndexPage

export const query = graphql`
  query {
    profileImg: file(relativePath: { eq: "Matt-Gregg-square-9961.jpg" }) {
      childImageSharp {
        fixed(
          width: 140,
          quality: 70,
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(limit: 1, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            category
          }
        }
      }
    }
  }
`
