import type { CSSProperties, InputHTMLAttributes } from "react";

import { classNames } from "../../utils/classNames";
import "./Input.css";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  labelText?: string;
  labelId?: string;
  width?: number;
  height?: number;
  icon?: string;
  iconPosition?: "left" | "right";
  iconSize?: number;
  handleClickIcon?: () => void;
};

function Input({
  labelText,
  labelId,
  width,
  height,
  icon,
  iconPosition = "left",
  iconSize = 24,
  handleClickIcon,
  className,
  id,
  style,
  ...props
}: InputProps) {
  const inputHeight = height ?? 60;
  const iconSpace = iconSize + 26;
  const inputId = labelId ?? id;

  const paddingIcon =
    iconPosition === "left"
      ? `0 18px 0 ${iconSpace}px`
      : `0 ${iconSpace}px 0 18px`;

  const iconStyle = {
    [iconPosition]: 16,
    width: iconSize,
    height: iconSize,
  } as CSSProperties;

  return (
    <div className="cubos-input" style={{ width: width ?? "100%" }}>
      {labelText && <label htmlFor={inputId}>{labelText}</label>}

      <div
        className="cubos-input__field"
        style={{ height: `${inputHeight}px` }}
      >
        {icon && handleClickIcon && (
          <button
            type="button"
            className="cubos-input__icon-button"
            aria-label="Input action"
            onClick={handleClickIcon}
            style={iconStyle}
          >
            <img src={icon} alt="" />
          </button>
        )}

        {icon && !handleClickIcon && (
          <img
            className="cubos-input__icon"
            src={icon}
            alt=""
            style={iconStyle}
          />
        )}

        <input
          {...props}
          id={inputId}
          type={props.type ?? "text"}
          className={classNames("cubos-input__control", className)}
          style={{
            height: inputHeight,
            padding: icon ? paddingIcon : "0 18px",
            ...style,
          }}
        />
      </div>
    </div>
  );
}

export default Input;
