import React from 'react';
import styles from './Button.module.scss';
import ArrowRight from '@/assets/svg/ArrowRight';

function Button({ text, showIcon = false, className = '', onClick}) {
  return (
    <button
      type="submit"
      className={`${styles.loginButton} ${className}`} onClick={onClick}
    >
      {text}
      {showIcon && <ArrowRight />}
    </button>
  );
}

export default Button;

