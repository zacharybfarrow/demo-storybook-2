import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont53 = (
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
    id="E1X_ico_font-53_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-53_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-53_svg__cls-2{clip-path:url(#E1X_ico_font-53_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-53_svg__ico_dn_dashboard_0"
      className="E1X_ico_font-53_svg__cls-2"
    >
      <path
        d="M19 6.08a10.11 10.11 0 0 1 0 14.28 1.13 1.13 0 0 1-1.41.15l-2.4-1.56a1.11 1.11 0 0 1-.09-1.8 1.13 1.13 0 0 1 1.34-.08l1.57 1a7.84 7.84 0 1 0-12.3 0l1.57-1a1.14 1.14 0 0 1 1.35.08 1.12 1.12 0 0 1 .15 1.57 1.08 1.08 0 0 1-.25.22L6.18 20.5a1.13 1.13 0 0 1-1.41-.15A10.1 10.1 0 0 1 19 6.08m-2 8.14a.71.71 0 1 0 .84-.57.71.71 0 0 0-.84.57m-9.89-3a.71.71 0 1 0-.93.38.69.69 0 0 0 .28.06.71.71 0 0 0 .66-.44M6 13.67a.71.71 0 0 0 .14 1.41h.14A.71.71 0 0 0 6 13.67Zm2.26-6a.71.71 0 1 0 1 .2.71.71 0 0 0-1-.2m7.55 1a.71.71 0 1 0-1 .2.71.71 0 0 0 1-.19m-3.25-1.09a.71.71 0 0 0-.39-.93.72.72 0 0 0-.27-.05.71.71 0 1 0 .65 1m5 3.93L14 13.81a2.16 2.16 0 1 1-1.65-2.57 2.19 2.19 0 0 1 .63.24l4.14-1.07a.6.6 0 0 1 .48 1.09Zm-5 1.53a.76.76 0 1 0-.4 1 .76.76 0 0 0 .4-1Z"
        className="E1X_ico_font-53_svg__cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont53);
export default ForwardRef;
