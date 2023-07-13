import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont47 = (
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
    id="E1X_ico_font-47_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-47_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-47_svg__cls-2{clip-path:url(#E1X_ico_font-47_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-47_svg__ico_view_0"
      className="E1X_ico_font-47_svg__cls-2"
    >
      <path
        d="M22 12a.75.75 0 0 0-.21-.41 15.24 15.24 0 0 0-2.17-2A13.89 13.89 0 0 0 14 6.55a9.45 9.45 0 0 0-3.7-.05 11.52 11.52 0 0 0-3.18 1.12 17.24 17.24 0 0 0-4.24 3.14c-.23.23-.46.46-.67.71a.77.77 0 0 0 0 1.05 15.2 15.2 0 0 0 2.17 2A13.92 13.92 0 0 0 10 17.45a9.45 9.45 0 0 0 3.65 0 11.54 11.54 0 0 0 3.18-1.12 17.28 17.28 0 0 0 4.24-3.14c.23-.23.46-.46.67-.71a.76.76 0 0 0 .21-.41V12M12 15.85A3.85 3.85 0 1 1 15.85 12 3.85 3.85 0 0 1 12 15.85m0-5.12A1.27 1.27 0 1 0 13.27 12 1.27 1.27 0 0 0 12 10.73"
        className="E1X_ico_font-47_svg__cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont47);
export default ForwardRef;
