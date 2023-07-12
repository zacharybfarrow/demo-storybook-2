import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts31 = (
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
    <path d="M16.44 5.33h4.44v13.33h-4.44zM3.11 18.67 15.56 22V2L3.11 5.33ZM6.22 7.56h2L9.31 10l1.16-2.46h1.93l-2 3.53 2.22 4.15h-2l-1.31-2.91L8 15.24H6.09l2.15-4.08Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts31);
export default ForwardRef;
