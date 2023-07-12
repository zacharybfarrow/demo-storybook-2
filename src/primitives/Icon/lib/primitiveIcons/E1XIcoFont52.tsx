import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont52 = (
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
    id="E1X_ico_font-52_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-52_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-52_svg__cls-2{clip-path:url(#E1X_ico_font-52_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-52_svg__ico_cd_data_0"
      className="E1X_ico_font-52_svg__cls-2"
    >
      <g className="E1X_ico_font-52_svg__cls-2">
        <path d="M12 2C7.78 2 3.25 3.27 3.25 6.06v11.88C3.25 20.73 7.78 22 12 22s8.75-1.27 8.75-4.06V6.06C20.75 3.27 16.21 2 12 2m7.5 15.94c0 1.55-3.36 2.81-7.5 2.81s-7.5-1.26-7.5-2.81V15.6c1.29 1.33 4.41 2 7.5 2s6.21-.69 7.5-2Zm0-3.75c0 1.56-3.36 2.81-7.5 2.81s-7.5-1.25-7.5-2.79v-2.36c1.29 1.33 4.41 2 7.5 2s6.21-.69 7.5-2Zm0-3.75c0 1.54-3.36 2.79-7.5 2.79S4.5 12 4.5 10.46V8.29c1.64 1.25 4.64 1.83 7.5 1.83s5.86-.59 7.5-1.83ZM12 8.88c-4.14 0-7.5-1.26-7.5-2.81S7.86 3.25 12 3.25s7.5 1.26 7.5 2.81-3.36 2.82-7.5 2.82" />
        <path d="M17.63 17.63a.63.63 0 1 1-.62.63.63.63 0 0 1 .63-.62M17.63 13.88a.63.63 0 1 1-.62.63.63.63 0 0 1 .63-.62M17.63 10.13a.63.63 0 1 1-.62.63.63.63 0 0 1 .63-.62" />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont52);
export default ForwardRef;
