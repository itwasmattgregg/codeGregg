import React from 'react';
import Container from '../components/container';
import Layout from '../components/layout/layout';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';

import '../scss/pages/uses.scss';

const Uses = () => {
  return (
    <Layout>
      <Helmet title={`Uses | codeGregg`} />
      <Container>
        <h1 className='text_center' style={{ marginTop: '40px' }}>
          What I use
        </h1>
        <StaticImage
          src='../images/desk.jpg'
          alt='Photo of my desk, 2 monitors and macbook'
        />
        <h2>Desk setup</h2>
        <ul>
          <li>MacBook Pro (15-inch, 2017)</li>
          <li>
            <a href='https://amzn.to/3s6ljBX' target='_blank' rel='noreferrer'>
              Dell Ultrasharp U2719DX 27-Inch Monitor
            </a>
          </li>
          <li>BenQ RL2450HT 24" LED Pro Gaming Monitor</li>
          <li>
            <a href='https://amzn.to/3s5zWFJ' target='_blank' rel='noreferrer'>
              Vivo Monitor Stand
            </a>
          </li>
          <li>
            <a
              href='https://drop.com/buy/magicforce-82-key-mechanical-keyboard'
              target='_blank'
              rel='noreferrer'
            >
              Magicforce 82-key Mechanical Keyboard (MX Clear Switches)
            </a>
          </li>
          <li>
            <a href='https://amzn.to/3s693kS' target='_blank' rel='noreferrer'>
              Apple Magic Trackpad 2
            </a>
          </li>
          <li>
            <a href='https://amzn.to/2QgMg7O' target='_blank' rel='noreferrer'>
              Focusrite Scarlett 2i2 3rd Gen
            </a>{' '}
            - Audio Interface
          </li>
          <li>
            <a href='https://amzn.to/3tScLPJ' target='_blank' rel='noreferrer'>
              Rode PodMic
            </a>
          </li>
          <li>
            <a href='https://amzn.to/30XBo0S' target='_blank' rel='noreferrer'>
              Mic Stand
            </a>
          </li>
          <li>
            <a href='https://amzn.to/2PenS69' target='_blank' rel='noreferrer'>
              AKG K712
            </a>{' '}
            - Open Back Headphones
          </li>
          <li>
            <a href='https://amzn.to/2QqeU6E' target='_blank' rel='noreferrer'>
              Under Desk Headphone Hook
            </a>
          </li>
          <li>Solid Pine Desk top</li>
          <li>
            <a
              href='https://www.autonomous.ai/standing-desks/diy-smart-desk-kit?option16=37&option17=41'
              target='_blank'
              rel='noreferrer'
            >
              Autonomous Smart Desk DIY Kit
            </a>{' '}
            - Sit/Stand Desk Legs
          </li>
          <li>
            <a
              href='https://www.target.com/p/12oz-lidded-glass-jar-2-wick-candle-blue-cedar-fig---the-collection-by-chesapeake-bay-candle/-/A-15317999'
              target='_blank'
              rel='noreferrer'
            >
              Cedar/Fig Candle from Target
            </a>
          </li>
          <li>
            Gaming Computer (It's almost 10 years old at this point so listing
            the components doesn't really make sense. Let me know if you're
            curious. It's still cookin)
          </li>
        </ul>
        <StaticImage
          src='../images/office.jpg'
          alt='Photo of office with tons of messy cables'
        />
        <h2>Software</h2>
        <ul>
          <li>VS Code</li>
          <li>
            <a
              href='https://marketplace.visualstudio.com/items?itemName=sdras.night-owl'
              target='_blank'
              rel='noreferrer'
            >
              Night Owl Theme
            </a>
          </li>
          <li>
            <a
              href='https://gumroad.com/l/dank-mono'
              target='_blank'
              rel='noreferrer'
            >
              Dank Mono
            </a>{' '}
            - Font
          </li>
          <li>
            <a href='https://screen.so/home' target='_blank' rel='noreferrer'>
              Screen.so
            </a>
          </li>
          <li>Figma and Sketch - Design</li>
          <li>iTerm and ohmyzsh</li>
          <li>
            <a
              href='https://github.com/nvm-sh/nvm'
              target='_blank'
              rel='noreferrer'
            >
              nvm
            </a>
          </li>
          <li>
            <a href='https://bear.app/' target='_blank' rel='noreferrer'>
              Bear App
            </a>
          </li>
          <li>
            <a href='https://todoist.com/' target='_blank' rel='noreferrer'>
              Todoist
            </a>
          </li>
          <li>
            <a href='https://www.postman.com/' target='_blank' rel='noreferrer'>
              Postman
            </a>
          </li>
          <li>
            <a href='https://insomnia.rest/' target='_blank' rel='noreferrer'>
              Insomnia
            </a>
          </li>
          <li>
            <a
              href='https://eggerapps.at/postico/'
              target='_blank'
              rel='noreferrer'
            >
              Postico
            </a>
          </li>
        </ul>
        <h2>Music</h2>
        <ul>
          <li>
            <a
              href='https://www.morganamps.com/'
              target='_blank'
              rel='noreferrer'
            >
              Morgan DAG15 Amp
            </a>
          </li>
          <li>
            <a
              href='https://www.gibson.com/Guitar/USAYNB363/Les-Paul-Studio/Smokehouse-Burst'
              target='_blank'
              rel='noreferrer'
            >
              Gibson Les Paul Studio
            </a>{' '}
            (White)
          </li>
          <li>
            <a
              href='https://www.gibson.com/Guitar/ACCBTI649/J-45-Standard/Vintage-Sunburst'
              target='_blank'
              rel='noreferrer'
            >
              Gibson J45
            </a>{' '}
            (Flamed Maple)
          </li>
        </ul>
        <h2>Camera</h2>
        <ul>
          <li>Nikon D600</li>
          <li>Nikon 18-35mm f/3.5-4.5G ED</li>
          <li>Nikon 28-300mm f/3.5-5.6G ED VR</li>
          <li>Nikon 50mm f/1.8G</li>
        </ul>
        <StaticImage src='../images/whiskey.jpg' alt='Whiskey cabinet' />
        <h2>Whiskey - In somewhat of an order</h2>
        <ul>
          <li>Kaiyo - Japanese Whiskey</li>
          <li>Glenkinchie 12yr</li>
          <li>Henry McKenna 10yr</li>
          <li>Glenfarclas 10yr</li>
          <li>Glen Rothes 21yr - Signatory Bottling</li>
          <li>Bruichladdich - Classic Laddie</li>
          <li>Balblair 27yr - 1991</li>
          <li>Dahlwhinnie 15yr</li>
          <li>Glenmorangie 18yr</li>
          <li>Nikka - From the Barrel</li>
          <li>Aberlour - A'bunadh</li>
          <li>Wilterness Trail - Bourbon</li>
          <li>Monkey Shoulder</li>
          <li>Aberfeldy 12yr</li>
        </ul>
      </Container>
    </Layout>
  );
};

export default Uses;
