import React from 'react';
import Container from './container';
import twitter from '../images/twitter.svg';
import spotify from '../images/spotify.svg';
import facebook from '../images/facebook.svg';
import codepen from '../images/codepen.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin2.svg';
import bitbucket from '../images/bitbucket.svg';

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
          href='https://github.com/itwasmattgregg'
          style={{ margin: '0 10px' }}
        >
          <img src={github} alt='github' />
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
        <a
          href='https://twitter.com/ItWasMattGregg'
          rel='me'
          style={{ margin: '0 10px' }}
        >
          <img src={twitter} alt='twitter' />
        </a>
        <a
          href='https://www.facebook.com/mattdgregg'
          style={{ margin: '0 10px' }}
        >
          <img src={facebook} alt='facebook' />
        </a>
      </div>
      <div className='text_center' style={{ marginTop: '10px' }}>
        <small>matt@codegregg.com</small>
        <br />
        <a
          href='https://www.buymeacoffee.com/29s6gtvjb'
          target='_blank'
          rel='noreferrer'
          className='printHide'
        >
          <img
            src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
            alt='Buy Me A Coffee'
            style={{
              height: '50px',
              marginTop: '20px',
            }}
          />
        </a>
        <script
          type='text/javascript'
          src='https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js'
          data-name='bmc-button'
          data-slug='29s6gtvjb'
          data-color='#FF5F5F'
          data-emoji=''
          data-font='Cookie'
          data-text='Buy me a latte'
          data-outline-color='#000000'
          data-font-color='#ffffff'
          data-coffee-color='#FFDD00'
        ></script>
      </div>
    </Container>
  </div>
);

export default Footer;
