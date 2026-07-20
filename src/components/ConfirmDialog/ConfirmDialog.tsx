import { useId } from "react";
import type { HTMLAttributes } from "react";

import Button from "../Button/Button";
import CautionIcon from "../Icons/CautionIcon";
import SuccessIcon from "../Icons/SuccessIcon";
import Overlay from "../_shared/Overlay/Overlay";
import "../_shared/FeedbackDialog/FeedbackDialog.css";

export interface ConfirmDialogProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  type: "error" | "success";
  title: string;
  description: string;
  btnConfirmText: string;
  btnCancelText: string;
  handleConfirm: () => void;
  handleCancel: () => void;
}

function ConfirmDialog({
  open,
  type,
  title,
  description,
  btnConfirmText,
  handleConfirm,
  btnCancelText,
  handleCancel,
  className,
  ...props
}: ConfirmDialogProps) {
  const titleId = useId();

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
      <div className="cubos-feedback-dialog__actions">
        <Button variant="primary" shape="normal" onClick={handleCancel} width={140}>
          {btnCancelText}
        </Button>
        <Button variant="outline" shape="normal" onClick={handleConfirm} width={190}>
          {btnConfirmText}
        </Button>
      </div>
    </Overlay>
  );
}

export default ConfirmDialog;
