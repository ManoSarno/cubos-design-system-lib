import { InputHTMLAttributes } from "react";
import "./Input.css";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  labelText?: string;
  labelId?: string;
  width: number;
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
  ...props
}: InputProps) {
  const inputHeight = height ?? 60;
  const iconSpace = iconSize + 26;

  const paddingIcon =
    iconPosition === "left"
      ? `0 18px 0 ${iconSpace}px`
      : `0 ${iconSpace}px 0 18px`;

  return (
    <div className="cubos-input" style={{ width: `${width}px` }}>
      {labelText && <label htmlFor={labelId}>{labelText}</label>}

      <div
        className="cubos-input__field"
        style={{ height: `${inputHeight}px` }}
      >
        {icon && (
          <img
            src={icon}
            alt="icon"
            onClick={handleClickIcon}
            style={{
              [iconPosition]: "16px",
              width: `${iconSize}px`,
            }}
          />
        )}

        <input
          id={labelId}
          type="text"
          {...props}
          style={{
            height: `${inputHeight}px`,
            padding: icon ? paddingIcon : "0 18px",
          }}
        />
      </div>
    </div>
  );
}

export default Input;
