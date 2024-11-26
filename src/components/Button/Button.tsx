import React, { HTMLAttributes } from 'react';
import styles from './Button.module.scss';
import '../../styles/global.scss';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant: 'normal' | 'rounded';
  colors: 'orange' | 'white' | 'orange__outline';
  width: number;
  height?: number;
};

function Button({ variant, colors, width, height = 60, children, ...props }: ButtonProps) {
  return (
    <button
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`${styles[variant]} ${styles[colors]}`}
      {...props}
    >
      {children || 'Click'}
    </button>
  );
}

export default Button;
