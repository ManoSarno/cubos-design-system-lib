import { useId } from "react";
import type { HTMLAttributes, MouseEvent } from "react";

import ArrowBackIcon from "../Icons/ArrowBackIcon";
import CautionIcon from "../Icons/CautionIcon";
import SuccessIcon from "../Icons/SuccessIcon";
import Overlay from "../_shared/Overlay/Overlay";
import "../_shared/FeedbackDialog/FeedbackDialog.css";

export interface NotificationDialogProps extends HTMLAttributes<HTMLDivElement> {
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
  className,
  ...props
}: NotificationDialogProps) {
  const titleId = useId();

  function handleNavigate(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (handleNextLocation) handleNextLocation();
    if (handleClose) handleClose();
  }

  return (
    <Overlay
      {...props}
      open={open}
      className={className}
      panelClassName="cubos-feedback-dialog"
      aria-labelledby={titleId}
    >
      <div className="cubos-feedback-dialog__icon">
        {type === "error" ? <CautionIcon /> : <SuccessIcon />}
      </div>
      <strong id={titleId} className="cubos-feedback-dialog__title">
        {title}
      </strong>
      <p className="cubos-feedback-dialog__description">{description}</p>

      {(handleNextLocation || handleClose) && (
        <button type="button" className="cubos-feedback-dialog__link" onClick={handleNavigate}>
          <ArrowBackIcon />
          {actionText}
        </button>
      )}
    </Overlay>
  );
}

export default NotificationDialog;
