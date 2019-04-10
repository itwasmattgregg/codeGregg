import React from 'react';
import { graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import styles from '../scss/pages/404.module.scss';

const NotFoundPage = ({ data }) => (
  <BackgroundImage
    Tag='div'
    className={styles.lostImage}
    fluid={data.background.childImageSharp.fluid}
  >
    <h1>Are you lost?</h1>
    <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
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
