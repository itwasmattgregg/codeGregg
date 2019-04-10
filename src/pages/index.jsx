import React from 'react';
import Img from 'gatsby-image';

import Layout from '../components/layout/layout';
import FeatureBox from '../components/featureBox/featureBox';
import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import Tech from '../components/tech/tech';
import Container from '../components/container';
import ContactForm from '../components/contactForm/contactForm';

import shape from '../images/shape.svg';
import styles from '../scss/pages/index.module.scss';

class IndexPage extends React.Component {
  render() {
    const latestPost = get(this, 'props.data.allMarkdownRemark.edges[0].node');
    const profileImg = get(this, 'props.data.profileImg');

    return (
      <Layout>
        <div
          style={{
            display: 'flex',
            position: 'relative',
            flexWrap: 'wrap',
          }}
        >
          <FeatureBox side='left' backgroundColor='darkBlue'>
            <h2 className='h3' style={{ marginBottom: '50px' }}>
              Minneapolis Web Developer
            </h2>
            <h1>Matt Gregg</h1>
            <div style={{ display: 'flex' }}>
              <Img
                alt='matt gregg'
                fixed={profileImg.childImageSharp.fixed}
                style={{ flexShrink: '0', marginRight: '25px' }}
              />
              <div>
                <p>
                  I’m a full stack web engineer and I want to help you craft
                  amazing, modern experiences.
                </p>
                <Link
                  to='/#contact'
                  style={{
                    color: 'white',
                    fontWeight: '700',
                    textDecoration: 'none',
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
                  textDecoration: 'none',
                }}
              >
                {latestPost.frontmatter.title}
              </Link>
            </h2>
            <p>{latestPost.excerpt}</p>
            <Link
              to={latestPost.fields.slug}
              style={{
                color: 'white',
                fontWeight: '700',
                textDecoration: 'none',
              }}
            >
              Read More
            </Link>
          </FeatureBox>
          <img
            src={shape}
            alt=''
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%) scaleX(1.1)',
              pointerEvents: 'none',
            }}
          />
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
                I've worked with some amazing companies like Google, Verizon,
                Cargill, Deloitte, the NYC MTA, and many others. If you would
                like to hear how I can help your company, contact me below.
              </p>
            </div>
          </div>
          <Tech />
        </Container>
        <div
          style={{
            backgroundColor: 'white',
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
}

export default IndexPage;

export const query = graphql`
  query {
    profileImg: file(relativePath: { eq: "Matt-Gregg-square-9961.jpg" }) {
      childImageSharp {
        fixed(width: 140, quality: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { visible: { ne: false } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`;
