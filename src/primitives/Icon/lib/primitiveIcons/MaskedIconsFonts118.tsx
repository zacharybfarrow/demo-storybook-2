import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts118 = (
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
    <path
      d="M19.81 5H4.19A2.19 2.19 0 0 0 2 7.19v9.62A2.19 2.19 0 0 0 4.19 19h15.62A2.19 2.19 0 0 0 22 16.81V7.19A2.19 2.19 0 0 0 19.81 5Z"
      style={{
        fill: "#231f20",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts118);
export default ForwardRef;
