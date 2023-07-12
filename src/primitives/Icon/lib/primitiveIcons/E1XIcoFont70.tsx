import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont70 = (
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
    id="E1X_ico_font-70_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-70_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-70_svg__cls-2{clip-path:url(#E1X_ico_font-70_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-70_svg__ico_chart_2_0"
      className="E1X_ico_font-70_svg__cls-2"
    >
      <path
        d="M10.54 2v1.2a8.8 8.8 0 1 1-6.22 15l-.85.85A10 10 0 1 0 10.54 2m0 17a7 7 0 0 0 0-14v1.2a5.8 5.8 0 1 1-5.77 6.38l-1.19.12a7 7 0 0 0 7 6.3"
        className="E1X_ico_font-70_svg__cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont70);
export default ForwardRef;