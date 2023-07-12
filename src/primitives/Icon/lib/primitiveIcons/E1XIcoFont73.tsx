import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont73 = (
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
    id="E1X_ico_font-73_svg__Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <clipPath id="E1X_ico_font-73_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-73_svg__cls-2{clip-path:url(#E1X_ico_font-73_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-73_svg__ico_chart_5_0"
      className="E1X_ico_font-73_svg__cls-2"
    >
      <path
        d="M17.85 8.1H9.8v2.6h8.05ZM5.4 13.3a3.4 3.4 0 1 0 3.4 3.4 3.4 3.4 0 0 0-3.4-3.4m0-9.4a3.4 3.4 0 1 0 3.4 3.4 3.4 3.4 0 0 0-3.4-3.4m4.4 12H22v-2.6H9.8Zm0 4.2h8.05v-2.6H9.8Zm0-13.6H22V3.9H9.8Z"
        className="E1X_ico_font-73_svg__cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont73);
export default ForwardRef;
