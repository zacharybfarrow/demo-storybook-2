import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont61 = (
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
    id="E1X_ico_font-61_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-61_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-61_svg__cls-2{clip-path:url(#E1X_ico_font-61_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-61_svg__ico_flow_one_to_one_0"
      className="E1X_ico_font-61_svg__cls-2"
    >
      <path
        d="M22 11.92 16.94 9v1.53H7.19a2.78 2.78 0 1 0-2.42 4.17 2.81 2.81 0 0 0 2.42-1.39H17v1.53ZM4.78 13.58a1.67 1.67 0 1 1 1.67-1.67 1.67 1.67 0 0 1-1.67 1.67"
        className="E1X_ico_font-61_svg__cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont61);
export default ForwardRef;
