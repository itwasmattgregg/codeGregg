import React from 'react'
import Img from "gatsby-image"

import Layout from '../components/layout/layout'
import FeatureBox from '../components/featureBox/featureBox'
import {Link} from 'gatsby';
import get from 'lodash/get';
import Tech from '../components/tech/tech';
import Container from '../components/container';
import ContactForm from '../components/contactForm/contactForm';

import shape from '../images/shape.svg';

class IndexPage extends React.Component {
  render() {
    const latestPost = get(this,
      'props.data.allMarkdownRemark.edges[0].node'
    );
    const profileImg = get(this,
      'props.data.profileImg'
    );

    return (
      <Layout>
        <div style={{
          display: 'flex',
          position: 'relative',
        }}>
          <FeatureBox side="left" backgroundColor="darkBlue">
            <h1 className="h3">Minneapolis Web Developer</h1>
            <h2>Matt Gregg</h2>
            <Img alt="matt gregg" fixed={profileImg.childImageSharp.fixed}/>
            <p>I’m a full stack web engineer and I want to help you craft amazing, modern web experiences.</p>
            <Link href="">Contact me</Link>
          </FeatureBox>
          <FeatureBox side="right" backgroundColor="lightBlue">
            <h3>Latest Blog Post</h3>
            <h2>
              <Link to={latestPost.fields.slug}>{latestPost.frontmatter.title}</Link>
            </h2>
          </FeatureBox>
          <img
            src={shape}
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)'
            }} />
        </div>
        <Container>
          <h2>Clarity</h2>
          <h2>Efficiency</h2>
          <h2>Consistency</h2>
          <h2>Beauty</h2>
          <p>
            The web is an amazing tool for bringing ideas to life and making them accessible to everyone.
            I believe in creating pragmatic, performant solutions to every day problems through beautiful
            and simple web interfaces.
          </p>
          <Tech></Tech>
        </Container>
        <div
          style={{
            backgroundColor: 'white',
            padding: '50px 0',
            borderTop: '2px solid gray',
          }}
        >
          <Container>
            <ContactForm></ContactForm>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default IndexPage

export const query = graphql `
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
