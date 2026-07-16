import * as React from 'react';
import { HTMLAttributes } from 'react';
import "./Modal.css";
import Button from "../Button/Button";

export type ModalProps = HTMLAttributes<HTMLElement> & {
  open: boolean;
  width: number;
  height: number;
  btnConfirmText: string;
  btnCancelText: string;
  handleConfirm: () => void;
  handleCancel: () => void;
};

function Modal({ open, width, height, btnConfirmText, handleConfirm, btnCancelText, handleCancel, ...props }: ModalProps) {

  return (
    <>
      {open && (
        <div className='container' {...props}>
          <div className='dialog' style={{ width: `${width}px`, height: `${height}px` }}>
            <div>{props.children}</div>

            <div className='dialog__buttons'>
              <Button variant='rounded' colors='white' onClick={handleCancel} width={205} height={51}>Cancel</Button>
              <Button variant='rounded' colors='orange' onClick={handleConfirm} width={110} height={51}>Confirm</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
