import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont57 = (
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
    id="E1X_ico_font-57_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-57_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-57_svg__cls-2{clip-path:url(#E1X_ico_font-57_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-57_svg__ico_edit_pencil_0"
      className="E1X_ico_font-57_svg__cls-2"
    >
      <path
        d="M2.87 22a.55.55 0 0 0 .23 0l6-1.74a1.78 1.78 0 0 0 .86-.51L20.81 8.82a4 4 0 0 0-5.65-5.65L4.3 14.07a2.37 2.37 0 0 0-.51.86L2 20.89a.88.88 0 0 0 .23.86.87.87 0 0 0 .6.26M14.54 6.26l3.22 3.22L9.29 18l-3.22-3.27ZM18 3.72a2.41 2.41 0 0 1 1.63.66A2.26 2.26 0 0 1 20.3 6a2.26 2.26 0 0 1-.66 1.63l-.64.62L15.76 5l.63-.63A2.26 2.26 0 0 1 18 3.72M5.18 16.24l2.57 2.57-3.62 1.05Z"
        className="E1X_ico_font-57_svg__cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont57);
export default ForwardRef;
