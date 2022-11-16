import React from 'react';
import Container from './container';
import twitter from '../images/logos/twitter.svg';
import spotify from '../images/logos/spotify.svg';
import facebook from '../images/logos/facebook.svg';
import codepen from '../images/logos/codepen.svg';
import github from '../images/logos/github.svg';
import linkedin from '../images/logos/linkedin2.svg';
import bitbucket from '../images/logos/bitbucket.svg';

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
        <a
          href='https://github.com/itwasmattgregg'
          style={{ margin: '0 10px' }}
        >
          <img src={github} alt='github' />
        </a>
        <a
          href='https://twitter.com/ItWasMattGregg'
          rel='me'
          style={{ margin: '0 10px' }}
        >
          <img src={twitter} alt='twitter' />
        </a>
        <a
          href='https://codepen.io/itwasmattgregg/'
          style={{ margin: '0 10px' }}
        >
          <img src={codepen} alt='codepen' />
        </a>
        <a
          href='https://bitbucket.org/itwasmattgregg'
          style={{ margin: '0 10px' }}
        >
          <img src={bitbucket} alt='bitbucket' />
        </a>

        <a
          href='https://www.linkedin.com/in/mattdgregg/'
          style={{ margin: '0 10px' }}
        >
          <img src={linkedin} alt='linkedin' />
        </a>
        <a
          href='https://open.spotify.com/user/1248248872?si=qDPkzMvSRD-IV0FLrm3TQA'
          style={{ margin: '0 10px' }}
        >
          <img src={spotify} alt='spotify' />
        </a>
        <a rel="me" href="https://c.im/@itwasmattgregg" style={{ margin: '0 10px' }}>M</a>
      </div>
      <div className='text_center' style={{ marginTop: '10px' }}>
        <small>matt@codegregg.com</small>
      </div>
    </Container>
  </div>
);

export default Footer;
