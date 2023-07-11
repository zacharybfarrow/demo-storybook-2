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
const SvgE1XIcoFont07 = (
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
    data-name="Layer 1"
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
    <path d="M6.278 17.722h7.477l-7.477-7.477ZM12 .98A11.02 11.02 0 1 0 23.02 12 11.033 11.033 0 0 0 12 .98ZM12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10Zm5.723-8.245V6.277h-7.478Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont07);
export default ForwardRef;
