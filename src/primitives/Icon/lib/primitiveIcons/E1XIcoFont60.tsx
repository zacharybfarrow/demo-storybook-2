import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont60 = (
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
    id="E1X_ico_font-60_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-60_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-60_svg__cls-2{clip-path:url(#E1X_ico_font-60_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-60_svg__ico_flow_connection_0"
      className="E1X_ico_font-60_svg__cls-2"
    >
      <path
        d="M19.5 14.5a2.53 2.53 0 0 0-2.18 1.25H17c-2 0-2.95-.95-4.18-2.15A15.91 15.91 0 0 0 11 12a12.51 12.51 0 0 0 1.9-1.65c1.23-1.15 2.17-2.1 4.1-2.1h.32A2.5 2.5 0 1 0 19.5 4.5a2.53 2.53 0 0 0-2.18 1.25H17c-2.95 0-4.48 1.5-5.82 2.85C9.95 9.8 9 10.75 7 10.75h-.32A2.5 2.5 0 1 0 4.5 14.5a2.53 2.53 0 0 0 2.18-1.25H7c1.93 0 2.88.95 4.07 2.13S14 18.25 17 18.25h.32a2.5 2.5 0 1 0 2.18-3.75m0-9A1.5 1.5 0 1 1 18 7a1.5 1.5 0 0 1 1.5-1.5m-15 8A1.5 1.5 0 1 1 6 12a1.5 1.5 0 0 1-1.5 1.5m15 5A1.5 1.5 0 1 1 21 17a1.5 1.5 0 0 1-1.5 1.5"
        className="E1X_ico_font-60_svg__cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont60);
export default ForwardRef;
