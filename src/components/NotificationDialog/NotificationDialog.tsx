import ArrowBackIcon from "../Icons/ArrowBackIcon";
import CautionIcon from "../Icons/CautionIcon";
import SuccessIcon from "../Icons/SuccessIcon";
import "./NotificationDialog.css";

export interface NotificationDialogProps {
  open: boolean;
  type: "error" | "success";
  title: string;
  description: string;
  actionText?: string;
  handleClose?: () => void;
  handleNextLocation?: () => void;
}

function NotificationDialog({
  open,
  type,
  title,
  description,
  actionText,
  handleClose,
  handleNextLocation,
  ...props
}: NotificationDialogProps) {
  function handleNavigate() {
    if (handleNextLocation) handleNextLocation();

    if (handleClose) handleClose();
  }

  return (
    <>
      {open && (
        <div className="cubos-notification-dialog" {...props}>
          <div className="cubos-notification-dialog__content">
            <div className="cubos-notification-dialog__icon">
              {type === "error" ? <CautionIcon /> : <SuccessIcon />}
            </div>
            <strong>{title}</strong>
            <p>{description}</p>

            {(handleNextLocation || handleClose) && (
              <div className="cubos-notification-dialog__next-location">
                <ArrowBackIcon />
                <a href="#" onClick={handleNavigate}>
                  {actionText}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default NotificationDialog;
