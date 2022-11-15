import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { saveAs } from 'file-saver';

import Layout from '../components/layout/layout';
import Container from '../components/container';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Skill from '../components/resume/Skill';

import * as styles from '../scss/pages/resume.module.scss';

import initials from '../images/initials.svg';
import firebaseIcon from '../images/logos/firebase.svg';
import gatsbyIcon from '../images/logos/gatsby.svg';
import javascriptIcon from '../images/logos/javascript.svg';
import laravelIcon from '../images/logos/laravel.svg';
import reactIcon from '../images/logos/react.svg';
import vueIcon from '../images/logos/vue-centered.svg';
import afterEffectsIcon from '../images/logos/after-effects.svg';
import angularIcon from '../images/logos/angular.svg';
import awsIcon from '../images/logos/aws.svg';
import djangoIcon from '../images/logos/django.svg';
import dockerIcon from '../images/logos/docker.svg';
import sketchIcon from '../images/logos/sketch.svg';

const Resume = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const headerBackground = getImage(data.headerBackground);
  const [downloading, setDownloading] = useState(false);

  const getPdfDownload = async () => {
    setDownloading(true);
    const response = await fetch('/api/get-resume-pdf');
    const blob = await response.blob();
    setDownloading(false);
    saveAs(blob, 'matt-gregg-resume.pdf');
  };

  return (
    <Layout>
      <Helmet title={`Resume | ${siteTitle}`} />
      <div className={styles.headerBackground}>
        <GatsbyImage
          image={headerBackground}
          className={styles.headerBackgroundImage}
          alt=''
          style={{ position: 'absolute' }}
        />
        <Container className={styles.headerContainer}>
          <div className={styles.headerNameContainer}>
            <img
              className={styles.headerImage}
              src={initials}
              alt=''
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
          <button
            onClick={getPdfDownload}
            className={styles.downloadButton}
            disabled={downloading}
          >
            Download PDF
            {downloading && (
              <div className={styles.loadingSpinner}>
                <span className={styles.loadingBox}></span>
                <span className={styles.loadingBox}></span>
                <span className={styles.loadingBox}></span>
                <span className={styles.loadingBox}></span>
              </div>
            )}
          </button>
        </Container>
      </div>
      <Container>
        <div className={styles.section}>
          <h2>Biography</h2>
          <p>
            Born and raised in beautiful Minneapolis Minnesota. I’m a developer
            who thrives on collaboration, writing beautiful, clean, accessible
            code, and creating the best possible experience for the end user.
            Front end guru, UX evangelist, many-stack developer, system
            architect, continuous learner, and pusher of boundaries with the
            spirit of an entrepreneur. I thrive in stressful situations,
            impossible challenges and working to build teams and communities.
          </p>
        </div>
        <div className={styles.section}>
          <h2>Skills</h2>
          <p>
            I consider myself tech agnostic. I have my favorites but I always
            love uncovering new ones.
          </p>
          <div className={styles.skillGrid}>
            <Skill icon={javascriptIcon} name='Javascript' xp={95} size={70} />
            <Skill icon={reactIcon} name='React' xp={95} />
            <Skill icon={vueIcon} name='Vue' xp={90} />
            <Skill icon={firebaseIcon} name='Firebase' xp={80} />
            <Skill icon={gatsbyIcon} name='Gatsby' xp={80} />
            <Skill icon={djangoIcon} name='Django' xp={60} />
            <Skill icon={laravelIcon} name='Laravel' xp={40} />
            <Skill icon={angularIcon} name='Angular' xp={60} />
            <Skill icon={afterEffectsIcon} name='After Effects' xp={35} />
            <Skill icon={dockerIcon} name='Docker' xp={30} />
            <Skill icon={awsIcon} name='AWS' xp={50} />
            <Skill icon={sketchIcon} name='Sketch' xp={75} />
          </div>
        </div>
        <div className={styles.section}>
          <h2>Experience</h2>
          {/* Talk about what I've accomplished (numbers) not what I did.
           Job duties don't matter */}
          <div className={styles.expereienceItem}>
            <h4>Software Developer (Front End)</h4>
            <em>
              <strong>Shopify</strong> | Mar 2021 - Current
            </em>
            <p>
              Working on the the Capital team building React / Rails / Graphql
              applications for merchant services. Our primary application was 
              responsible for lending billions of dollars to hundreds of 
              thousands of merchants to help grow their businesses.
            </p>
            <p>
              I also worked across the organization on FE infrastructure
              initiatives and building community through tooling, documentation,
              and presentations.
            </p>
          </div>
          <div className={styles.expereienceItem}>
            <h4>Senior Software Engineer (Front End)</h4>
            <em>
              <strong>Nerdery</strong> | Oct 2017 - Mar 2021
            </em>
            <p>
              Built numerous large scale projects with a broad range of
              technologies. Have worked with React, Angular, and VueJS to build
              performant, secure applications. Worked with many high profile
              clients to create UI solutions and build better experiences for
              the web. Have experience working on agile teams, working closely
              with backend engineers, and designers to architect and deliver
              applications. Was a mentor for other front end developers with.
              Received software architecture training.
            </p>
          </div>
          <div className={styles.expereienceItem}>
            <h4>Chief Technology Officer</h4>
            <em>
              <strong>Beingful</strong> | Sep 2019 - Nov 2020
            </em>
            <p>
              Built a social media platform using Django and React for a startup
              as a side project. Worked in cycles to deliver weekly updates and
              worked closely with the owner to make design and technical
              decisions to constantly try to make the app better and fulfill the
              goals of the project. I also interviewed and hired other
              developers over the length of the project to help work on the
              codebase.
            </p>
          </div>
          <div className={styles.expereienceItem}>
            <h4>Senior Web Developer</h4>
            <em>
              <strong>Bright Health</strong> (acquired Spyder Trap) | May 2017 -
              Oct 2017
            </em>
            <p>
              Worked on web applications built on React/Redux with SSR in an
              agile team. Collaborated with design to build better user
              experiences through a unitive design system. Helped to manage a
              complex automated AWS setup for building and deploying our
              applications.
            </p>
          </div>
          <div className={styles.expereienceItem}>
            <h4>Front End Developer</h4>
            <em>
              <strong>Spyder Trap</strong> | Oct 2014 - May 2017
            </em>
            <p>
              Developed client web sites and dynamic applications back end to
              front on many frameworks. Architected experiences in collaboration
              with designers, clients, and other devs. Lead developer on
              numerous projects including consulting roles with our client’s
              development teams when needed.
            </p>
          </div>
          <div className={styles.expereienceItem}>
            <h4>Java Software Engineer</h4>
            <em>
              <strong>Access Genetics</strong> | Aug 2013 - Oct 2014
            </em>
            <p>
              Core developer on large customer facing Java EE medical web
              application. Redesigned a data driven individualized user
              dashboard for all customers. Created a zip code based MSSQL search
              for finding dental services.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <h2>Side Projects</h2>
          <div className={styles.sideProjectsContainer}>
            <a
              href='https://yeastyboysbread.com/'
              className={styles.sideProject}
            >
              <strong>Yeasty Boys Bread</strong> <br />
              NextJS / MongoDB
            </a>
            <div className={styles.sideProject}>
              <a href='https://beingful.co'>
                <strong>Beingful</strong> <br />
                Django / React
              </a>
            </div>
            <a
              href='https://gregg-wedding.herokuapp.com/'
              className={styles.sideProject}
            >
              <strong>Wedding Web App</strong> <br />
              Laravel / Vue / Algolia / After Effects
            </a>
            <a href='https://foodtruckfinder.io' className={styles.sideProject}>
              <strong>Food Truck Finder</strong> <br />
              Vue / Firebase / Netlify Lambda Functions
            </a>
            <a
              href='https://www.stereotypesteve.com/'
              className={styles.sideProject}
            >
              <strong>Blog for Stereotype Steve</strong> <br />
              Gatsby / Wordpress
            </a>
            <a
              href='https://wtf-allergies.netlify.app'
              className={styles.sideProject}
            >
              <strong>WTF Allergies</strong> <br />
              Vue / Netlify Lambda Function
            </a>
            <a href='https://kittencritic.com/' className={styles.sideProject}>
              <strong>Kitten Critic</strong> <br />
              Remix / sqlite
            </a>
            <a
              href='https://isitfridayyet.netlify.app/'
              className={styles.sideProject}
            >
              <strong>Is it Friday yet?</strong> <br />
              JS
            </a>
            <a
              href='https://shouldiuseamodal.com/'
              className={styles.sideProject}
            >
              <strong>Should I use a modal?</strong> <br />
              Svelte
            </a>
            <div className={styles.sideProject}>
              <strong>Balderdash Game</strong> <br />
              Vue / Firebase
            </div>
            <div className={styles.sideProject}>
              <strong>Photo Scavenger Hunt App</strong> <br />
              Vue / Firebase
            </div>
          </div>
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
            Jim Schofield | Senior Front End Engineer
            <br />
            Contact me for contact info
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    headerBackground: file(relativePath: { eq: "DSC_7663_darker.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export default Resume;
