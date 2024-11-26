import React, { HTMLAttributes } from 'react';
import styles from './Button.module.scss';
import '../../styles/global.scss';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant: 'normal' | 'rounded';
  colors: 'orange' | 'white' | 'orange__outline';
  width: number;
};

function Button({ variant, colors, width, children, ...props }: ButtonProps) {
  return (
    <button
      style={{ width: `${width}px` }}
      className={`${styles[variant]} ${styles[colors]}`}
      {...props}
    >
      {children || 'Click'}
    </button>
  );
}

export default Button;
