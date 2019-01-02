import React from 'react'
import firebase from '../../images/firebase.svg'
import gatsby from '../../images/gatsby.svg'
import javascript from '../../images/javascript.svg'
import laravel from '../../images/laravel.svg'
import nodejs from '../../images/nodejs.svg'
import react from '../../images/react.svg'
import redux from '../../images/redux.svg'
import sass from '../../images/sass.svg'
import vue from '../../images/vue.svg'
import webpack from '../../images/webpack.svg'
import styles from './tech.module.scss'

const Tech = () => (
  <div className="text_center">
    <p>Some of the technologies I work with:</p>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 150px)',
      gridGap: '30px',
      gridAutoRows: '150px',
      justifyContent: 'center',
    }}>
      <div className={styles.techLogo}>
        <img src={firebase} alt="firebase"></img>
      </div>
      <div className={styles.techLogo}>
        <img src={gatsby} alt="gatsby"></img>
      </div>
      <div className={styles.techLogo}>
        <img src={javascript} alt="javascript"></img>
      </div>
      <div className={styles.techLogo}>
        <img src={laravel} alt="laravel"></img>
      </div>
      <div className={styles.techLogo}>
        <img src={nodejs} alt="nodejs"></img>
      </div>
      <div className={styles.techLogo}>
        <img src={react} alt="react"></img>
      </div>
      <div className={styles.techLogo}>
        <img src={redux} alt="redux"></img>
      </div>
      <div className={styles.techLogo}>
        <img src={sass} alt="sass"></img>
      </div>
      <div className={styles.techLogo}>
        <img src={vue} alt="vue"></img>
      </div>
      <div className={styles.techLogo}>
        <img src={webpack} alt="webpack"></img>
      </div>
    </div>
  </div>
)

export default Tech
