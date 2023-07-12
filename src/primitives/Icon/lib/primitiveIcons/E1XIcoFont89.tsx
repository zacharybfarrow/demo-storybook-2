import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont89 = (
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
    <path d="M21.28 5.36h-2a1.18 1.18 0 0 0-1.09.86L15.58 17.3a22.58 22.58 0 0 1 3.48 1.35L22 6.21a.67.67 0 0 0-.46-.83.6.6 0 0 0-.26-.02Zm-5.47 3.46h-2a1.19 1.19 0 0 0-1.1.87l-1.56 6.61a31.92 31.92 0 0 1 3.62.77l1.73-7.38a.69.69 0 0 0-.5-.84.58.58 0 0 0-.23 0ZM5.54 13.11h-2a1.19 1.19 0 0 0-1.11.89L2 15.81c.31 0 .64 0 1-.05h2.82l.4-1.76a.66.66 0 0 0-.45-.84.45.45 0 0 0-.23-.05Zm5.26-2.3h-2a1.19 1.19 0 0 0-1.1.86l-1 4.16c1.34.08 2.57.2 3.71.36l1.06-4.52a.68.68 0 0 0-.46-.84.58.58 0 0 0-.21-.02Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont89);
export default ForwardRef;
