import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont15 = (
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
      <clipPath id="E1X_ico_font-15_svg__a">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
    </defs>
    <g
      style={{
        clipPath: "url(#E1X_ico_font-15_svg__a)",
      }}
    >
      <path
        d="M8.56 9.22 12 12.66l3.44-3.44 1.06 1.06-4.5 4.5-4.5-4.5 1.06-1.06z"
        style={{
          fillRule: "evenodd",
        }}
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont15);
export default ForwardRef;
