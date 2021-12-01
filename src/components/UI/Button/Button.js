import React from 'react';

import classes from './Button.module.css';
// импортируем React, Button.module
const Button = (props) => {
  return (
    <button
    // его свойства
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;