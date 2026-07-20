import type { ButtonHTMLAttributes } from "react";

import { classNames } from "../../utils/classNames";
import "./Button.css";

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonShape = "normal" | "rounded";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
  shape?: ButtonShape;
  width?: number;
  height?: number;
};

function Button({
  variant,
  shape = "normal",
  width,
  height = 60,
  children,
  className,
  style,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        "cubos-button",
        `cubos-button--${variant}`,
        `cubos-button--${shape}`,
        className,
      )}
      style={{ width: width ?? "100%", height, ...style }}
    >
      {children ?? "Click"}
    </button>
  );
}

export default Button;
