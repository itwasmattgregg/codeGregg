import React from 'react';
import { graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const NotFoundPage = ({ data }) => (
  <BackgroundImage Tag='div' fluid={data.background.childImageSharp.fluid}>
    <h1>Tiny Wins</h1>
    <Link to='/'>Return Home</Link>
  </BackgroundImage>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    background: file(
      relativePath: { eq: "daniel-jensen-440210-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
