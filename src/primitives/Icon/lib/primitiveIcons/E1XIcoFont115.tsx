import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont115 = (
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
      <clipPath id="E1X_ico_font-115_svg__a">
        <path
          d="M3 8.5h18v7H3z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
    </defs>
    <g
      data-name="SortBar hor 1"
      style={{
        clipPath: "url(#E1X_ico_font-115_svg__a)",
      }}
    >
      <g data-name="Group 4856">
        <path d="M3 11.5h18v1H3z" data-name="Rectangle 3345" />
        <path d="M3 14.5h18v1H3z" data-name="Rectangle 3381" />
        <path d="M3 8.5h18v1H3z" data-name="Rectangle 3346" />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont115);
export default ForwardRef;
