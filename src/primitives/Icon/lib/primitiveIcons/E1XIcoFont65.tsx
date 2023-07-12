import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont65 = (
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
    id="E1X_ico_font-65_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-65_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-65_svg__cls-2{clip-path:url(#E1X_ico_font-65_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-65_svg__ico_move_0"
      className="E1X_ico_font-65_svg__cls-2"
    >
      <path
        d="M21.82 11.58 19 8.79l-.85.85 1.75 1.76h-7.29V4.06l1.74 1.75.86-.81-2.78-2.83A.57.57 0 0 0 12 2a.61.61 0 0 0-.43.17L8.79 5l.86.86 1.75-1.8v7.34H4.06l1.76-1.75L5 8.79l-2.83 2.78A.61.61 0 0 0 2 12a.57.57 0 0 0 .18.42L5 15.21l.86-.87-1.8-1.73h7.34v7.34L9.64 18.2l-.85.86 2.79 2.77a.59.59 0 0 0 .85 0L15.21 19l-.87-.85-1.73 1.74v-7.28h7.33l-1.74 1.73.85.87 2.78-2.78a.58.58 0 0 0 0-.85"
        className="E1X_ico_font-65_svg__cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont65);
export default ForwardRef;
