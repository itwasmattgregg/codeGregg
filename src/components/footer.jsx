import React from 'react';
import Container from './container';
import twitter from '../images/twitter.svg';
import spotify from '../images/spotify.svg';
import facebook from '../images/facebook.svg';
import codepen from '../images/codepen.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin2.svg';

const Footer = () => (
  // Social Icons
  <div
    style={{
      background: 'white',
      padding: '10px 0',
    }}
  >
    <Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <a href="#" style={{ margin: '0 10px' }}>
          <img src={codepen} alt="codepen" />
        </a>
        <a href="#" style={{ margin: '0 10px' }}>
          <img src={github} alt="github" />
        </a>
        <a href="#" style={{ margin: '0 10px' }}>
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="#" style={{ margin: '0 10px' }}>
          <img src={spotify} alt="spotify" />
        </a>
        <a href="#" style={{ margin: '0 10px' }}>
          <img src={twitter} alt="twitter" />
        </a>
        <a href="#" style={{ margin: '0 10px' }}>
          <img src={facebook} alt="facebook" />
        </a>
      </div>
    </Container>
  </div>
);

export default Footer;
