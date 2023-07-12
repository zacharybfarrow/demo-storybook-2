import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts86 = (
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
    <path d="M14.9 20.05h.1l1.72-.5a.64.64 0 0 0 .25-.15l3.14-3.15a1.12 1.12 0 0 0 0-1.62 1.14 1.14 0 0 0-1.63 0l-3.13 3.14a.64.64 0 0 0-.15.25l-.5 1.72a.24.24 0 0 0 .06.24.27.27 0 0 0 .18.08m3.36-4.55.93.93-2.44 2.45-.97-.89Zm1-.73a.74.74 0 0 1 .47.19.7.7 0 0 1 0 .94l-.19.18-.93-.93.15-.16a.65.65 0 0 1 .47-.2m-3.71 3.61.74.75-1 .3Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts86);
export default ForwardRef;
