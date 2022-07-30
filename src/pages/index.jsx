import React, { Component } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useTheme } from '@emotion/react';

import Layout from '../components/layout/layout';
import FeatureBox from '../components/featureBox/featureBox';
import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import Tech from '../components/tech/tech';
import Container from '../components/container';
import ContactForm from '../components/contactForm/contactForm';

import * as styles from '../scss/pages/index.module.scss';

export default function IndexPage({ data }) {
  const latestPost = get(data, 'allFile.edges[0].node');
  const latestPostMdx = latestPost.childMdx;
  const profileImg = getImage(data.profileImg);

  const theme = useTheme();

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          position: 'relative',
          flexWrap: 'wrap',
          overflow: 'hidden',
        }}
      >
        <FeatureBox side='left' backgroundColor='darkBlue'>
          <h2 className='h3' style={{ marginTop: 0, marginBottom: '50px' }}>
            Minneapolis Web Developer
          </h2>
          <h1>Matt Gregg</h1>
          <div style={{ display: 'flex' }}>
            <GatsbyImage
              image={profileImg}
              alt='matt gregg'
              className={styles.profileImg}
            />
            <div>
              <p>
                I’m a Front-end Software Engineer who loves architecting amazing
                experiences. I also enjoy speaking at schools about code,
                building my design chops, and constantly learning. On the side I
                enjoy woodworking, cooking, and playing guitar.
              </p>
              <Link
                to='/#contact'
                style={{
                  color: 'white',
                  fontWeight: '700',
                }}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </FeatureBox>
        <FeatureBox side='right' backgroundColor='lightBlue'>
          <h3 style={{ marginBottom: '50px' }}>Latest Blog Post</h3>
          <h2 className='h1 font_default'>
            <Link
              to={latestPost.fields.slug}
              style={{
                color: 'white',
              }}
            >
              {latestPostMdx.frontmatter.title}
            </Link>
          </h2>
          <div>
            <em>
              #{latestPostMdx.frontmatter.tags[0]} -{' '}
              {latestPostMdx.frontmatter.date}
            </em>
          </div>
          <p>{latestPostMdx.excerpt}</p>
        </FeatureBox>
      </div>
      <Container>
        <div
          style={{
            textAlign: 'center',
            margin: '70px 0',
          }}
        >
          <div className={styles.processList}>
            <h2 className={styles.processItem}>Clarity</h2>
            <span className={styles.processItemDivider} />
            <h2 className={styles.processItem}>Efficiency</h2>
            <span className={styles.processItemDivider} />
            <h2 className={styles.processItem}>Consistency</h2>
            <span className={styles.processItemDivider} />
            <h2 className={styles.processItem}>Beauty</h2>
          </div>
          <div
            style={{
              maxWidth: '525px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <p>
              The web is an incredible tool for bringing ideas to life and
              making them accessible to everyone. I believe in creating
              pragmatic, performant solutions to everyday problems through
              beautiful and simple web interfaces.
            </p>
            <p>
              I've worked with some amazing companies like Google, Cargill,
              Deloitte, the NYC MTA, and many others. If you would like to hear
              how I can help your company, use the form below to contact me.
            </p>
          </div>
        </div>
        <Tech />
      </Container>
      <div
        style={{
          backgroundColor: theme.background,
          padding: '50px 0',
          boxShadow: '0px 0px 3px 0 rgba(0,0,0,0.4)',
        }}
      >
        <Container>
          <h2 className='text_center'>Contact Me</h2>
          <ContactForm />
        </Container>
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    profileImg: file(relativePath: { eq: "matt_white_bg.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 140
          layout: FIXED
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    allFile(
      sort: { fields: [childMdx___frontmatter___date], order: DESC }
      filter: {
        sourceInstanceName: { eq: "posts" }
        childMdx: { frontmatter: { visible: { eq: true } } }
      }
      limit: 1
    ) {
      edges {
        node {
          fields {
            slug
          }
          childMdx {
            excerpt
            frontmatter {
              date(formatString: "MMMM DD YYYY")
              title
              tags
            }
          }
        }
      }
    }
  }
`;
