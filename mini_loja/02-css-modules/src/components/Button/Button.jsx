import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'solid', ...props }) => {
  const className = `${styles.button} ${styles[variant]}`;
  
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;