import React, { HTMLAttributes } from 'react';
import '../../styles/global.scss';
import styles from './Input.module.scss';

export type InputProps = HTMLAttributes<HTMLInputElement> & {
  labelText?: string;
  labelId?: string;
  width: number;
  height?: number;
  icon?: string;
  iconPosition?: 'left' | 'right';
  iconSize?: number;
};

function Input({labelText, labelId, width, height, icon, iconPosition = 'left', iconSize = 32, ...props}: InputProps) {

  const paddingIcon = iconPosition === 'left' ? '0 18px 0 40px' : '0 40px 0 18px';

  return (
    <div className={styles['container-input']} style={{ width: `${width}px` }}>
      {labelText && <label htmlFor={labelId}>{labelText}</label>}

      {icon && <img src={icon} alt='icon' style={{ [iconPosition]: '16px', bottom: height ? `calc(${height}px/2.5)` : '16px', width: `${iconSize}px`, height: 'auto' }} />}

      <input id={labelId} type='text' {...props} style={{ height: height ? `${height}px` : '60px', padding: icon ? paddingIcon : '0 18px' }} />
    </div>
  );
}

export default Input;
