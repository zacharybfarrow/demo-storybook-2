import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont44 = (
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
    id="E1X_ico_font-44_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-44_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-44_svg__cls-2{clip-path:url(#E1X_ico_font-44_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-44_svg__ico_circle__"
      className="E1X_ico_font-44_svg__cls-2"
      data-name="ico_circle_!"
    >
      <path
        d="M12 4.5a7.5 7.5 0 1 0 7.5 7.5A7.5 7.5 0 0 0 12 4.5m.75 11.25h-1.5v-1.5h1.5Zm0-3h-1.5v-4.5h1.5Z"
        className="E1X_ico_font-44_svg__cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont44);
export default ForwardRef;
