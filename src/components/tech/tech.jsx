import React from 'react';
import firebase from '../../images/firebase.svg';
import gatsby from '../../images/gatsby.svg';
import javascript from '../../images/javascript.svg';
import laravel from '../../images/laravel.svg';
import nodejs from '../../images/nodejs.svg';
import react from '../../images/react.svg';
import redux from '../../images/redux.svg';
import sass from '../../images/sass.svg';
import vue from '../../images/vue.svg';
import webpack from '../../images/webpack.svg';
import styles from './tech.module.scss';
import posed from 'react-pose';

const Icon = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    rotateY: 0,
  },
  hover: {
    scale: 1.1,
  },
  press: {
    rotateY: 30,
    scale: 1.1,
  },
});

const Tech = () => (
  <div className='text_center'>
    <p>Some of the technologies I'm passionate about...</p>
    <div className={styles.techContainer}>
      <Icon className={styles.techLogo}>
        <img src={firebase} alt='firebase' title='firebase' />
      </Icon>
      <Icon className={styles.techLogo}>
        <img src={gatsby} alt='gatsby' title='gatsby' />
      </Icon>
      <Icon className={styles.techLogo}>
        <img src={javascript} alt='javascript' title='javascript' />
      </Icon>
      <Icon className={styles.techLogo}>
        <img src={vue} alt='vue' title='vue' />
      </Icon>
      <Icon className={styles.techLogo}>
        <img src={nodejs} alt='nodejs' title='nodejs' />
      </Icon>
      <Icon className={styles.techLogo}>
        <img src={react} alt='react' title='react' />
      </Icon>
      <Icon className={styles.techLogo}>
        <img src={redux} alt='redux' title='redux' />
      </Icon>
      <Icon className={styles.techLogo}>
        <img src={sass} alt='sass' title='sass' />
      </Icon>
      <Icon className={styles.techLogo}>
        <img src={laravel} alt='laravel' title='laravel' />
      </Icon>
      <Icon className={styles.techLogo}>
        <img src={webpack} alt='webpack' title='webpack' />
      </Icon>
    </div>
  </div>
);

export default Tech;
