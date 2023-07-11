import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import "../Icon.css";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont01 = (
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
    id="E1X_ico_font-01_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-01_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-01_svg__cls-2{clip-path:url(#E1X_ico_font-01_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-01_svg__ico_help_0"
      className="E1X_ico_font-01_svg__cls-2"
    >
      <path
        d="M11 18h2v-2h-2Zm1-16a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8m0-14a4 4 0 0 0-4 4h2a2 2 0 0 1 4 0c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4"
        className="E1X_ico_font-01_svg__cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont01);
export default ForwardRef;