import React from 'react';
import { graphql, Link } from 'gatsby';

import styles from '../scss/pages/404.module.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const NotFoundPage = ({ data }) => {
  const image = getImage(data.background);
  return (
    <>
      <div className={styles.container}>
        <GatsbyImage className={styles.lostImage} image={image}></GatsbyImage>
        <h1>Are you lost?</h1>
        <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
        <Link to='/' className='button'>
          Return Home
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  {
    background: file(
      relativePath: { eq: "daniel-jensen-440210-unsplash.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FLUID
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
