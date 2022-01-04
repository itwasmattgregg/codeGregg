import React from 'react';
import firebase from '../../images/firebase.svg';
import gatsby from '../../images/gatsby.svg';
import javascript from '../../images/javascript.svg';
import nodejs from '../../images/nodejs.svg';
import react from '../../images/react.svg';
import sass from '../../images/sass.svg';
import vue from '../../images/vue.svg';
import * as styles from './tech.module.scss';
import posed from 'react-pose';

const Icon = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    rotateY: 0,
    y: 0,
  },
  hover: {
    scale: 1.1,
    rotateY: 30,
  },
  press: {
    rotateY: 720,
    y: -20,
    transition: { type: 'spring', stiffness: 5 },
  },
});

const Tech = ({ onStart, onEnd }) => (
  <div className='text_center'>
    <p>Some of the technologies I'm most passionate about...</p>
    <div className={styles.techContainer}>
      <Icon
        className={styles.techLogo}
        onPressStart={onStart}
        onPressEnd={onEnd}
      >
        <img src={firebase} alt='firebase' title='firebase' />
      </Icon>
      <Icon
        className={styles.techLogo}
        onPressStart={onStart}
        onPressEnd={onEnd}
      >
        <img src={gatsby} alt='gatsby' title='gatsby' />
      </Icon>
      <Icon
        className={styles.techLogo}
        onPressStart={onStart}
        onPressEnd={onEnd}
      >
        <img src={javascript} alt='javascript' title='javascript' />
      </Icon>
      <Icon
        className={styles.techLogo}
        onPressStart={onStart}
        onPressEnd={onEnd}
      >
        <img src={vue} alt='vue' title='vue' />
      </Icon>
      <Icon
        className={styles.techLogo}
        onPressStart={onStart}
        onPressEnd={onEnd}
      >
        <img src={nodejs} alt='nodejs' title='nodejs' />
      </Icon>
      <Icon
        className={styles.techLogo}
        onPressStart={onStart}
        onPressEnd={onEnd}
      >
        <img src={react} alt='react' title='react' />
      </Icon>
      <Icon
        className={styles.techLogo}
        onPressStart={onStart}
        onPressEnd={onEnd}
      >
        <img src={sass} alt='sass' title='sass' />
      </Icon>
    </div>
  </div>
);

export default Tech;
