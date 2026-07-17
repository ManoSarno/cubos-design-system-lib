import { HTMLAttributes } from 'react';
import './Button.css';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant: 'normal' | 'rounded';
  colors: 'orange' | 'white' | 'orange__outline';
  width: number;
  height?: number;
};

function Button({ variant, colors, width, height = 60, children, ...props }: ButtonProps) {
  const className = `cubos-button cubos-button--${variant} cubos-button--${colors}`;

  return (
    <button
      style={{ width: `${width}px`, height: `${height}px` }}
      className={className}
      {...props}
    >
      {children || 'Click'}
    </button>
  );
}

export default Button;
