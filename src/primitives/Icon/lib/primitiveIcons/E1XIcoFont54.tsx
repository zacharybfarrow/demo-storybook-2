import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont54 = (
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
    id="E1X_ico_font-54_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-54_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-54_svg__cls-2{clip-path:url(#E1X_ico_font-54_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-54_svg__ico_dn_flow_0"
      className="E1X_ico_font-54_svg__cls-2"
    >
      <path
        d="M17.45 15.75H17c-1.6 0-2.55-1.62-3.87-4.3S10.27 5.75 7 5.75h-.33A2.5 2.5 0 1 0 4.5 9.5a2.53 2.53 0 0 0 2.17-1.25H7c1.6 0 2.55 1.63 3.87 4.3s2.85 5.7 6.12 5.7h.45v1.38L22 17l-4.55-2.62ZM4.5 8.5A1.5 1.5 0 1 1 6 7a1.5 1.5 0 0 1-1.5 1.5m7.4-.25h5.55v1.37L22 7l-4.55-2.63v1.38H9.22a6.93 6.93 0 0 1 2.68 2.5"
        className="E1X_ico_font-54_svg__cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont54);
export default ForwardRef;
