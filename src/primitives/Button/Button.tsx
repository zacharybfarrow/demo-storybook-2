import React from "react";
import Icon, { IconName } from "../Icon/Icon";

import {
  ButtonIconSize,
  ButtonKind,
  ButtonRadius,
  ButtonSize,
  ButtonTheme,
  ButtonVariant,
  IconButtonSize,
} from "../types/common";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Specifies if the Button element should fit the width of its parent container
   */
  fullWidth?: boolean;
  /**
   * Specifies the name of the icon that is rendered by the Button element
   */
  icon?: IconName;
  /**
   * If icon is rendered by the Button, Specifies the description text provided to screen readers
   */
  iconLabel?: string;
  /**
   * Specifies if the Button should be optimized for a icon-only layout
   */
  isIconOnly?: boolean;
  /**
   * Specifies the kind of Button element that is render
   */
  kind?: ButtonKind;
  /**
   * Specifies the amount of border radius added to the Button element
   */
  rounded?: keyof typeof ButtonRadius;
  /**
   * Specifies the height of the Button element.
   */
  size?: keyof typeof ButtonSize;
  /**
   * Speciffies the CSS 'text-transform' property of the button element determining the casing of the 'labelText' attribute
   */
  uppercase?: boolean;
  /**
   * Specifies the color scheme of Button element that is render
   */
  variant?: ButtonVariant;
}

// eslint-disable-next-line
const Button = ({
  children,
  className,
  disabled = false,
  fullWidth = false,
  iconLabel,
  icon,
  isIconOnly = false,
  kind = "SOLID",
  rounded = "SQUARE",
  size = "SMALL",
  uppercase = false,
  variant = "PRIMARY",
  ...rest
}: ButtonProps) => {
  const dynamicClasses = [
    fullWidth && "w-full",
    !isIconOnly && icon ? "justify-between" : "justify-center",
    !isIconOnly && ButtonSize[size],
    isIconOnly && IconButtonSize[size],
    ButtonTheme[`${variant}-${kind}`],
    ButtonRadius[rounded],
    className,
  ].join(" ");

  const commonProps = { disabled, className: `${dynamicClasses} Btn`, ...rest };
  const textTransform = uppercase ? "uppercase" : "none";

  return (
    <button

      style={{ textTransform }}
      {...commonProps}
    >
      <span>{!isIconOnly && children}</span>
      {!icon ? null : (
        <Icon
          aria-label={iconLabel}
          name={icon}
          style={{
            height: ButtonIconSize[size],
            width: ButtonIconSize[size],
          }}
        />
      )}
    </button>
  );
};
export default Button;
