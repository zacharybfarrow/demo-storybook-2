import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont39 = (
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
    id="E1X_ico_font-39_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-39_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-39_svg__cls-2{clip-path:url(#E1X_ico_font-39_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-39_svg__ico_menu_more_horizontal"
      className="E1X_ico_font-39_svg__cls-2"
    >
      <path
        d="M12 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2m6 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2M6 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2"
        className="E1X_ico_font-39_svg__cls-2"
        style={{
          fillRule: "evenodd",
        }}
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont39);
export default ForwardRef;
