import type { HTMLAttributes } from "react";

import Overlay from "../_shared/Overlay/Overlay";
import "./Modal.css";

export type ModalProps = HTMLAttributes<HTMLDivElement> & {
  open: boolean;
  width: number;
  height: number;
};

function Modal({
  open,
  width,
  height,
  children,
  className,
  ...props
}: ModalProps) {
  return (
    <Overlay
      {...props}
      open={open}
      className={className}
      panelClassName="cubos-modal"
      panelStyle={{ width, height }}
    >
      <div className="cubos-modal__body">{children}</div>
    </Overlay>
  );
}

export default Modal;
