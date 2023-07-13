import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont48 = (
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
    id="E1X_ico_font-48_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-48_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-48_svg__cls-2{clip-path:url(#E1X_ico_font-48_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-48_svg__ico_search"
      className="E1X_ico_font-48_svg__cls-2"
    >
      <path
        d="M9.76 14.26a4.5 4.5 0 1 1 4.5-4.5 4.49 4.49 0 0 1-4.5 4.5m6 0H15l-.32-.26a6.51 6.51 0 1 0-.7.7l.27.28v.79l5 5 1.49-1.49Z"
        className="E1X_ico_font-48_svg__cls-2"
        style={{
          fillRule: "evenodd",
        }}
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont48);
export default ForwardRef;
