import * as React from 'react';
import "./NotificationDialog.css";
import SuccessIcon from "../Icons/SuccessIcon";
import CautionIcon from "../Icons/CautionIcon";
import ArrowBackIcon from "../Icons/ArrowBackIcon";

export interface NotificationDialogProps {
  open: boolean;
  type: 'error' | 'success';
  title: string;
  description: string;
  actionText?: string;
  handleClose?: () => void;
  handleNextLocation?: () => void;
};

function NotificationDialog({ open, type, title, description, actionText, handleClose, handleNextLocation, ...props }: NotificationDialogProps) {

  function handleNavigate() {
    if(handleNextLocation) handleNextLocation();

    if(handleClose) handleClose();
  }

  return (
    <>
      {open && (
        <div className='container' {...props}>
          <div className='dialog'>
            <div className='icon'>
              {type === 'error' ? <CautionIcon /> : <SuccessIcon />}
            </div>
            <strong>{title}</strong>
            <p>{description}</p>

            {(handleNextLocation || handleClose) && (
              <div className='next-location'>
                <ArrowBackIcon />
                <a href='#' onClick={handleNavigate}>
                  {actionText}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationDialog;
