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
const SvgE1XIcoFont06 = (
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
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill={props.color}
    data-tooltip={props.tooltipText ? props.tooltipText : desc}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <clipPath id="E1X_ico_font-06_svg__a">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
    </defs>
    <g
      style={{
        clipPath: "url(#E1X_ico_font-06_svg__a)",
      }}
    >
      <path
        d="M12 4 7 8.67V7H5v3.54l-1 .93V20h16v-8.53Zm7 15h-6v-4h-2v4H5v-7.09l7-6.54 7 6.54Z"
        style={{
          fillRule: "evenodd",
        }}
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont06);
export default ForwardRef;
