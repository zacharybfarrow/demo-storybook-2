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
  PolymorphicProps,
} from "../types/common";

export interface ButtonBasicProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Specifies if the Button element should fit the width of its parent container
   */
  fullWidth?: boolean;
  /**
   * Optionally render the Button element as an `<a>` element
   */
  href?: string;
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

export type ButtonProps<T extends React.ElementType> = PolymorphicProps<
  T,
  ButtonBasicProps
>;

export interface ButtonComponent {
  <T extends React.ElementType>(
    props: ButtonProps<T>,
    context?: unknown
  ): React.ReactElement<unknown, T> | null;
}

// eslint-disable-next-line
const Button = React.forwardRef(function Button<T extends React.ElementType>(
  {
    as,
    children,
    className,
    disabled = false,
    fullWidth = false,
    href,
    iconLabel,
    icon,
    isIconOnly = false,
    kind = "SOLID",
    onBlur,
    onClick,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    rounded = "SQUARE",
    size = "SMALL",
    tabIndex,
    type,
    uppercase = false,
    variant = "PRIMARY",
    ...rest
  }: ButtonProps<T>,
  ref: React.Ref<unknown>
) {
  const buttonClassName = cx([
    "inline-flex",
    "items-center",
    "outline-2",
    "border-2",
    "font-med",
    "transition-all",
    "outline-transparent",
    "focus:outline-blue-500",
    "disabled:bg-zinc-500",
    "disabled:text-zinc-800",
    "disabled:border-zinc-800",
    fullWidth && "w-full",
    uppercase ? "uppercase" : "",
    isIconOnly && IconButtonSize[size],
    !isIconOnly && icon ? "justify-between" : "justify-center",
    !isIconOnly && ButtonSize[size],
    ButtonTheme[`${variant}-${kind}`],
    ButtonRadius[rounded],
    className,
  ]);

  const commonProps = { tabIndex, className: buttonClassName, ref };
  const anchorProps = { href };

  let additionalProps: Partial<ButtonBasicProps> = {
    disabled,
    type,
    // add aria props
  };

  let component: React.ElementType = "button";

  if (as) {
    component = as;
    additionalProps = {
      ...additionalProps,
      ...anchorProps,
    };
  } else if (href && !disabled) {
    component = "a";
    additionalProps = anchorProps;
  }

  const ButtonIconElement = !icon ? null : (
    <Icon
      aria-label={iconLabel}
      name={icon}
      style={{
        height: ButtonIconSize[size],
        width: ButtonIconSize[size],
      }}
    />
  );

  const Button = React.createElement(
    component,
    {
      onBlur,
      onClick,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      ...rest,
      ...commonProps,
      ...additionalProps,
    },
    !isIconOnly && children,
    ButtonIconElement
  );
  return Button;
});

export default Button as ButtonComponent;

export const capitalizeString = (string?: string) => {
  if (!string) return "";
  const clean = string.toLowerCase();
  const char = clean.charAt(0).toUpperCase();
  return char + clean.slice(1);
};

export function cx<T>(values: T[]) {
  if (values.length === 0) return values[0];
  return values.join(" ").trimEnd();
}
