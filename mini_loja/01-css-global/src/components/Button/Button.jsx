import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'solid', ...props }) => {
  const className = `button button--${variant}`;
  
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;