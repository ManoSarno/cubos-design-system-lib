import type { HTMLAttributes } from "react";

import { classNames } from "../../utils/classNames";
import "./Chip.css";

export type ChipVariant = "filled" | "outlined";

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  width: number;
  color?: string;
  textColor?: string;
  type?: ChipVariant;
}

function Chip({
  title,
  width,
  color,
  textColor,
  type = "outlined",
  className,
  style,
  ...props
}: ChipProps) {
  const variantStyle =
    type === "filled"
      ? { backgroundColor: color, color: textColor }
      : { color, borderColor: color };

  return (
    <div
      {...props}
      className={classNames("cubos-chip", `cubos-chip--${type}`, className)}
      style={{ ...variantStyle, width, ...style }}
    >
      {title}
    </div>
  );
}

export default Chip;
