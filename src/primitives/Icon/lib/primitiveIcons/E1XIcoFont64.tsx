import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont64 = (
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
    id="E1X_ico_font-64_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-64_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-64_svg__cls-2{clip-path:url(#E1X_ico_font-64_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-64_svg__ico_group_items_0"
      className="E1X_ico_font-64_svg__cls-2"
    >
      <path
        d="M4.91 2.06A2.91 2.91 0 1 0 7.82 5a2.91 2.91 0 0 0-2.91-2.94m0 14.06A2.91 2.91 0 1 0 7.82 19a2.91 2.91 0 0 0-2.91-2.91m0-7A2.91 2.91 0 1 0 7.82 12a2.91 2.91 0 0 0-2.91-2.91m14.18 0A2.91 2.91 0 1 0 22 12a2.91 2.91 0 0 0-2.91-2.91m0-1.21A2.91 2.91 0 1 0 16.18 5a2.91 2.91 0 0 0 2.91 2.91m-7-5.82A2.91 2.91 0 1 0 15 5a2.91 2.91 0 0 0-2.91-2.91m0 14.06A2.91 2.91 0 1 0 15 19a2.91 2.91 0 0 0-2.91-2.91m7 0A2.91 2.91 0 1 0 22 19a2.91 2.91 0 0 0-2.91-2.91m-7-7A2.91 2.91 0 1 0 15 12a2.91 2.91 0 0 0-2.91-2.91"
        className="E1X_ico_font-64_svg__cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont64);
export default ForwardRef;
