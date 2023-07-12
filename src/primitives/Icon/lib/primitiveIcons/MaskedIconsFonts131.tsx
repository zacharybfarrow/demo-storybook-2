import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts131 = (
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
    <path d="M7.6 7.08a.74.74 0 1 0-.74-.74.74.74 0 0 0 .74.74Zm14.09 3.57s-2.58-1.05-5.17-2l-4.69-1.5a.51.51 0 0 0-.17-.07h-.2a3.27 3.27 0 0 0-.6-.08 4.07 4.07 0 0 0 0 8.13c2 0 9.91-3.26 10.83-3.63A.47.47 0 0 0 22 11c0-.17-.12-.23-.31-.35Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts131);
export default ForwardRef;
