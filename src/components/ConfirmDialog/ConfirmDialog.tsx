import "./ConfirmDialog.css";
import SuccessIcon from "../Icons/SuccessIcon";
import CautionIcon from "../Icons/CautionIcon";
import Button from "../Button/Button";

export interface ConfirmDialogProps {
  open: boolean;
  type: 'error' | 'success';
  title: string;
  description: string;
  btnConfirmText: string;
  btnCancelText: string;
  handleConfirm: () => void;
  handleCancel: () => void;
};

function ConfirmDialog({ open, type, title, description, btnConfirmText, handleConfirm, btnCancelText, handleCancel, ...props }: ConfirmDialogProps) {

  return (
    <>
      {open && (
        <div className='cubos-confirm-dialog' {...props}>
          <div className='cubos-confirm-dialog__content'>
            <div className='cubos-confirm-dialog__icon'>
              {type === 'error' ? <CautionIcon /> : <SuccessIcon />}
            </div>
            <strong>{title}</strong>
            <p>{description}</p>
            <div className='cubos-confirm-dialog__buttons'>
              <Button
                variant='normal'
                colors='orange'
                onClick={handleCancel}
                width={140}
              >
                Cancel
              </Button>
              <Button
                variant='normal'
                colors='orange__outline'
                onClick={handleConfirm}
                width={190}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmDialog;
