import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import "../Icon.css";
export interface SVGRProps {
  /**
   * Specifies the title of the icon. This property is used to provide a textual label or name for the icon.
   * It is applied to the <title> element inside the SVG, which serves as an accessible name for the icon when using assistive technologies like screen readers.
   */
  title?: string;
  /**
   * Specifies the ID of the element that contains the title. This property is used to associate the title with a specific element, providing further context or structure.
   * It is applied to the aria-labelledby attribute of the SVG element, referencing the element with the specified ID to provide the accessible name for the icon.
   */
  titleId?: string;
  /**
   * Specifies the description of the icon. This property is used to provide a textual description or additional information about the icon's purpose or functionality.
   * It is applied to the <desc> element inside the SVG, which provides a detailed description of the icon for accessibility purposes.
   */
  desc?: string;
  /**
   * Specifies the ID of the element that contains the description. This property is used to associate the description with a specific element, providing further context or structure.
   * It is applied to the aria-describedby attribute of the SVG element, referencing the element with the specified ID to provide additional information about the icon.
   */
  descId?: string;
  /**
   * Specifies whether or not a tooltip should be applied to the icon on mouseover. Defaults to false.
   */
  tooltip?: boolean;
  /**
   * Specifies the text to be displayed in the tooltip. If no text is provided, the tooltip will display the title and the desc.
   */
  tooltipText?: string;
}
const SvgE1XIcoFont = (
  {
    title,
    titleId,
    desc,
    descId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill={props.color}
    data-tooltip={props.tooltipText ? props.tooltipText : desc}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.5 9.5h5v-5h-5v5Zm-2 12h9v-9h-9v9Zm1-8h7v7h-7v-7Zm-1-2h9v-9h-9v9Zm1-8h7v7h-7v-7Zm1 16h5v-5h-5v5Zm9 1h2.333v-2.333H13.5V20.5Zm-1-18v9h9v-9h-9Zm8 8h-7v-7h7v7Zm-1-6h-5v5h5v-5Zm-1.333 11.333H20.5V13.5h-2.333v2.333ZM13.5 13.5v2.333h2.333V13.5H13.5Zm2.333 4.667h2.334v-2.334h-2.334v2.334Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont);
export default ForwardRef;
