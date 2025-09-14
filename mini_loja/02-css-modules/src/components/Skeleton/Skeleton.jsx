import React from 'react';
import styles from './Skeleton.module.css';

const Skeleton = () => {
  return (
    <div className={styles.card}>
      <div className={`${styles.skeleton} ${styles.image}`}></div>
      <div className={`${styles.skeleton} ${styles.line}`}></div>
      <div className={`${styles.skeleton} ${styles.line} ${styles.short}`}></div>
    </div>
  );
};

export default Skeleton;