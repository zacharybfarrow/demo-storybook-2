import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont31 = (
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
      <clipPath id="E1X_ico_font-31_svg__a">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
    </defs>
    <path
      d="M4 4v16h16V4Zm5 15H5v-4h4Zm0-5H5v-4h4Zm5 5h-4v-4h4Zm0-5h-4v-4h4Zm0-5h-4V5h4Zm5 10h-4v-4h4Zm0-5h-4v-4h4Zm0-5h-4V5h4Z"
      style={{
        clipPath: "url(#E1X_ico_font-31_svg__a)",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont31);
export default ForwardRef;
