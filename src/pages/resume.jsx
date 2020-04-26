import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout/layout';
import Container from '../components/container';

import styles from '../scss/pages/resume.module.scss';
import BackgroundImage from 'gatsby-background-image';
import Skill from '../components/resume/Skill';

import initials from '../images/initials.svg';
import firebaseIcon from '../images/firebase.svg';
import gatsbyIcon from '../images/gatsby.svg';
import javascriptIcon from '../images/javascript.svg';
import laravelIcon from '../images/laravel.svg';
import reactIcon from '../images/react.svg';
import vueIcon from '../images/vue-centered.svg';
import afterEffectsIcon from '../images/logos/after-effects.svg';
import angularIcon from '../images/logos/angular.svg';
import awsIcon from '../images/logos/aws.svg';
import djangoIcon from '../images/logos/django.svg';
import dockerIcon from '../images/logos/docker.svg';
import sketchIcon from '../images/logos/sketch.svg';

const Resume = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const headerBackground = data.headerBackground?.childImageSharp.fluid;

  return (
    <Layout>
      <Helmet title={`Resume | ${siteTitle}`} />
      <BackgroundImage
        fluid={headerBackground}
        className={styles.headerBackground}
      >
        <Container className={styles.headerContainer}>
          <div className={styles.headerNameContainer}>
            <img
              className={styles.headerImage}
              src={initials}
              alt=''
              height='150px'
              role='presentation'
            />
            <h1 className={styles.headerName}>
              Matt
              <br />
              Gregg <br />
              <span className={styles.headerTitle}>
                Senior Software Engineer
              </span>
            </h1>
          </div>
          <address className={styles.contactInfo}>
            4234 Russell Ave N.
            <br />
            Minneapolis, MN 55412
            <br />
            612.987.5559
            <br />
            <a href='mailto:mattdgregg@gmail.com'>mattdgregg@gmail.com</a>
          </address>
        </Container>
      </BackgroundImage>
      <Container>
        <div className={styles.section}>
          <h2>Biography</h2>
          <p>
            Born and raised in beautiful Minneapolis Minnesota. I’m a developer
            who thrives on collaboration, writing beautiful, clean, accessible
            code, and creating the best possible experience for the end user.
            Front end guru, UX evangelist, many-stack developer, system
            architect, continuous learner, and pusher of boundaries with the
            spirit of an entrepreneur. I thrive in stressful situations and
            impossible challenges.
          </p>
        </div>
        <div className={styles.section}>
          <h2>Experience</h2>
          <div>
            <div>
              SENIOR SOFTWARE ENGINEER (UI)
              <br />
              Nerdery | Oct 2017 - Current
              <p>
                Built numerous large scale projects with a broad range of front
                end frameworks. Interfaced with many high profile clients to
                create user interface solutions and build better experiences for
                the web. Took on mentorship role for other front end developers.
                Received software architecture training.
              </p>
            </div>
            <div>
              SENIOR WEB DEVELOPER
              <br />
              Bright Health (acquired by) | May 2017 - Oct 2017
              <p>
                Worked on web applications built on React/Redux with SSR in an
                agile team. Collaborated with design to build better user
                experiences through a unitive design system. Helped to manage a
                complex automated AWS setup for building and deploying our
                applications.
              </p>
            </div>
            <div>
              FRONT END DEVELOPER
              <br />
              Spyder Trap | Oct 2014 - May 2017
              <p>
                Developed client web sites and dynamic applications back end to
                front on many frameworks. Architected experiences in
                collaboration with designers, clients, and other devs. Lead
                developer on numerous projects including consulting roles with
                our client’s development teams when needed.
              </p>
            </div>
            <div>
              JAVA SOFTWARE ENGINEER
              <br />
              Access Genetics | Aug 2013 - Oct 2014
              <p>
                Core developer on large customer facing Java EE medical web
                application. Redesigned a data driven individualized user
                dashboard for all customers. Created a zip code based MSSQL
                search for finding dental services.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h2>Skills</h2>
          <p>
            I consider myself tech agnostic. I have my favorites but I always
            love uncovering new ones.
          </p>
          <div className={styles.skillGrid}>
            <Skill icon={javascriptIcon} name='Javascript' xp={80} size={70} />
            <Skill icon={reactIcon} name='React' xp={75} />
            <Skill icon={vueIcon} name='Vue' xp={90} />
            <Skill icon={firebaseIcon} name='Firebase' xp={80} />
            <Skill icon={gatsbyIcon} name='Gatsby' xp={60} />
            <Skill icon={djangoIcon} name='Django' xp={50} />
            <Skill icon={laravelIcon} name='Laravel' xp={40} />
            <Skill icon={angularIcon} name='Angular' xp={30} />
            <Skill icon={afterEffectsIcon} name='After Effects' xp={35} />
            <Skill icon={dockerIcon} name='Docker' xp={30} />
            <Skill icon={awsIcon} name='AWS' xp={50} />
            <Skill icon={sketchIcon} name='Sketch' xp={65} />
          </div>
        </div>
        <div className={styles.section}>
          <h2>Side Projects</h2>
          {/* Make each expandable? Or a link if possible? */}
          <p>Beingful - Django / React</p>
          <p>Wedding Web App - Laravel / Vue / Algolia / AE</p>
          <p>Food Truck Finder - Vue / Firebase</p>
          <p>Gatsby/Wordpress Blog for Stereotype Steve</p>
          <p>Kitten Critic - Ember / Firebase</p>
          <p>Balderdash Game for Nerdery - Vue / Firebase</p>
          <p>Photo Scavenger Hunt App for Nerdery - Vue / Firebase</p>
        </div>
        <div className={styles.section}>
          <h2>Education</h2>
          <div>
            Computer Science (B.A.)
            <br />
            <p>Bethel University</p>
          </div>
          <div>
            Biblical Theological Studies (B.A.)
            <br />
            <p>Bethel University</p>
          </div>
        </div>
        <div>
          <h2>References</h2>
          <p>
            Kasia Wasko | Senior UX Designer
            <br />
            Contact me for contact info
          </p>
          <p>
            Jim Schofield | Front End Engineer
            <br />
            Contact me for contact info
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    headerBackground: file(relativePath: { eq: "DSC_7663_darker.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Resume;
