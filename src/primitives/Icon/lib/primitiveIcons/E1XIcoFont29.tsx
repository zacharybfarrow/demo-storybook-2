import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont29 = (
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
    id="E1X_ico_font-29_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-29_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-29_svg__cls-2{clip-path:url(#E1X_ico_font-29_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-29_svg__ico_map_tools_location"
      className="E1X_ico_font-29_svg__cls-2"
    >
      <path
        d="M12 3.7a6 6 0 0 0-6 6c0 3 4.69 9 5.22 9.63l.78 1 .78-1c.53-.67 5.22-6.6 5.22-9.63a6 6 0 0 0-6-6Zm0 15s-5-6.24-5-9a5 5 0 1 1 10 0c0 2.76-5 9-5 9Zm0-12a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm0 5a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"
        className="E1X_ico_font-29_svg__cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont29);
export default ForwardRef;
