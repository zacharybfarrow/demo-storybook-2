import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import "../Icon.css";
import { SVGRProps } from "../../iconTypes";
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