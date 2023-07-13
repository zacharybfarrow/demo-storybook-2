import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont63 = (
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
    id="E1X_ico_font-63_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-63_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-63_svg__cls-2{clip-path:url(#E1X_ico_font-63_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-63_svg__ico_test_0"
      className="E1X_ico_font-63_svg__cls-2"
    >
      <path
        d="M19.5 9.5A2.5 2.5 0 1 0 22 12a2.5 2.5 0 0 0-2.5-2.5m0 4A1.5 1.5 0 1 1 21 12a1.5 1.5 0 0 1-1.5 1.5M8.82 10.75H6.67A2.5 2.5 0 1 0 4.5 14.5a2.53 2.53 0 0 0 2.17-1.25h2.15L10.06 12Zm-4.3 2.75A1.5 1.5 0 1 1 6 12a1.5 1.5 0 0 1-1.5 1.5m9.36-4.62L12 10.78 10.14 8.9l-1.25 1.25L10.76 12l-1.87 1.9 1.25 1.22L12 13.25l1.87 1.87 1.22-1.22-1.85-1.9 1.87-1.87Z"
        className="E1X_ico_font-63_svg__cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont63);
export default ForwardRef;
