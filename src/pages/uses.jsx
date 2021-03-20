import React from 'react';
import Container from '../components/container';
import Layout from '../components/layout/layout';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';

import '../scss/pages/uses.scss';

const Uses = ({ data }) => {
  const desk = data?.deskImg?.childImageSharp.fluid;
  const office = data?.officeImg?.childImageSharp?.fluid;

  return (
    <Layout>
      <Helmet title={`Uses | codeGregg`} />
      <Container>
        <h1 className='text_center' style={{ marginTop: '40px' }}>
          What I use
        </h1>
        <h2>Desk setup</h2>
        <Img fluid={desk} alt='Photo of my desk, 2 monitors and macbook' />
        <ul>
          <li>MacBook Pro (15-inch, 2017)</li>
          <li>
            <a href='https://amzn.to/3s6ljBX' target='_blank'>
              Dell Ultrasharp U2719DX 27-Inch Monitor
            </a>
          </li>
          <li>BenQ RL2450HT 24" LED Pro Gaming Monitor</li>
          <li>
            <a href='https://amzn.to/3s5zWFJ' target='_blank'>
              Vivo Monitor Stand
            </a>
          </li>
          <li>
            <a
              href='https://drop.com/buy/magicforce-82-key-mechanical-keyboard'
              target='_blank'
            >
              Magicforce 82-key Mechanical Keyboard (MX Clear Switches)
            </a>
          </li>
          <li>
            <a href='https://amzn.to/3s693kS' target='_blank'>
              Apple Magic Trackpad 2
            </a>
          </li>
          <li>
            <a href='https://amzn.to/2QgMg7O' target='_blank'>
              Focusrite Scarlett 2i2 3rd Gen
            </a>{' '}
            - Audio Interface
          </li>
          <li>
            <a href='https://amzn.to/3tScLPJ' target='_blank'>
              Rode PodMic
            </a>
          </li>
          <li>
            <a href='https://amzn.to/30XBo0S' target='_blank'>
              Mic Stand
            </a>
          </li>
          <li>
            <a href='https://amzn.to/2PenS69' target='_blank'>
              AKG K712
            </a>{' '}
            - Open Back Headphones
          </li>
          <li>
            <a href='https://amzn.to/2QqeU6E' target='_blank'>
              Under Desk Headphone Hook
            </a>
          </li>
          <li>Solid Pine Desk top</li>
          <li>
            <a
              href='https://www.autonomous.ai/standing-desks/diy-smart-desk-kit?option16=37&option17=41'
              target='_blank'
            >
              Autonomous Smart Desk DIY Kit
            </a>{' '}
            - Sit/Stand Desk Legs
          </li>
          <li>
            <a
              href='https://www.target.com/p/12oz-lidded-glass-jar-2-wick-candle-blue-cedar-fig---the-collection-by-chesapeake-bay-candle/-/A-15317999'
              target='_blank'
            >
              Cedar/Fig Candle
            </a>
          </li>
          <li>
            Gaming Computer (I'll add what I remember. It's close to 10 years
            old now and still kickin it)
            <ul>
              <li></li>
            </ul>
          </li>
        </ul>
        <Img fluid={office} alt='Photo of office with tons of messy cables' />
        <h2>Software</h2>
        <ul>
          <li>VS Code</li>
          <li>Night Owl Theme</li>
          <li>Dank Mono - Font</li>
          <li>Figma and Sketch - Design</li>
          <li>iTerm and zsh</li>
          <li>nvm</li>
        </ul>
        <h2>Music</h2>
        <ul>
          <li>Morgan DAG15 Amp</li>
          <li>Gibson Les Paul Studio (White)</li>
          <li>Gibson J45 (Flamed Maple)</li>
        </ul>
        <h2>Camera</h2>
        <ul>
          <li>Nikon D600</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Container>
    </Layout>
  );
};

export default Uses;

export const query = graphql`
  query {
    deskImg: file(relativePath: { eq: "desk.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1020) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    officeImg: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1020) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
