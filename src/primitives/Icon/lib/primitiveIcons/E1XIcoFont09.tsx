import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont09 = (
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
    id="E1X_ico_font-09_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-09_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-09_svg__cls-2{clip-path:url(#E1X_ico_font-09_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-09_svg__ico_clear_1_24x24"
      className="E1X_ico_font-09_svg__cls-2"
    >
      <path
        d="m15.5 14.79-.71.71L12 12.7l-2.8 2.8-.7-.71L11.3 12 8.5 9.2l.7-.7 2.8 2.8 2.79-2.8.71.7-2.8 2.8Z"
        className="E1X_ico_font-09_svg__cls-2"
        style={{
          fillRule: "evenodd",
        }}
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont09);
export default ForwardRef;
