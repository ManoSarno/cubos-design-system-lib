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
        <div className='cubos-modal' {...props}>
          <div className='cubos-modal__content' style={{ width: `${width}px`, height: `${height}px` }}>
            <div>{props.children}</div>

            <div className='cubos-modal__buttons'>
              <Button
                variant='rounded'
                colors='white'
                onClick={handleCancel}
                width={205}
                height={51}
              >
                {btnCancelText}
              </Button>
              <Button
                variant='rounded'
                colors='orange'
                onClick={handleConfirm}
                width={110}
                height={51}
              >
                {btnConfirmText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
