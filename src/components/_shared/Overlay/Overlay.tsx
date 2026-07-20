import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

import { classNames } from "../../../utils/classNames";
import "./Overlay.css";

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  panelClassName?: string;
  panelStyle?: CSSProperties;
  children: ReactNode;
}

function Overlay({
  open,
  panelClassName,
  panelStyle,
  children,
  className,
  role = "dialog",
  ...props
}: OverlayProps) {
  if (!open) return null;

  return (
    <div
      {...props}
      className={classNames("cubos-overlay", className)}
      role={role}
      aria-modal="true"
    >
      <div className={classNames("cubos-overlay__panel", panelClassName)} style={panelStyle}>
        {children}
      </div>
    </div>
  );
}

export default Overlay;
