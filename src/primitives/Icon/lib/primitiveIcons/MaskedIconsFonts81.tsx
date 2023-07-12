import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts81 = (
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
    <path d="M3.09 9.81a1.91 1.91 0 0 0 .5 1.2 2.46 2.46 0 0 0 1.13.74V18a1.81 1.81 0 0 0 1.81 1.81h10.89a1.75 1.75 0 0 0 1.29-.53 1.79 1.79 0 0 0 .53-1.28v-6.25A2 2 0 0 0 20.5 11a2.22 2.22 0 0 0 .5-1.44l-3.7-5.13a.35.35 0 0 0-.17-.15.57.57 0 0 0-.25-.06H7a.44.44 0 0 0-.25.08 1 1 0 0 0-.21.21l-3.33 4.8a2.44 2.44 0 0 0-.12.5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts81);
export default ForwardRef;
