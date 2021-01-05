import React from 'react';
import styles from './featureBox.module.scss';

const FeatureBox = ({ side, backgroundColor, children }) => (
  <div
    className={`${styles.featureBox} ${
      side === 'right' ? styles.rightBox : ''
    } ${styles[backgroundColor]}`}
  >
    <div className={styles.featureBoxContent}>{children}</div>
  </div>
);

export default FeatureBox;
