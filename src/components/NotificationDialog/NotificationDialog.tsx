import React from "react";
import styles from "./NotificationDialog.module.scss";
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
        <div className={styles.container} {...props}>
          <div className={styles.dialog}>
            <div className={styles.icon}>
              {type === 'error' ? <CautionIcon /> : <SuccessIcon />}
            </div>
            <strong>{title}</strong>
            <p>{description}</p>

            {(handleNextLocation || handleClose) && (
              <div className={styles['next-location']}>
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
