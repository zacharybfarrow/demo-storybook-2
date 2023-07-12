import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts57 = (
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
    <path d="M10.76 14.5h2.5v-1.25h-2.5ZM7 9.5h2.51V8.25H7Zm3.76 7.5h2.5v-1.25h-2.5Zm3.75-7.5H17V8.25h-2.5Zm0-2.5H17V5.75h-2.5Zm3.75 6.25v1.33h2.5v-1.33Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts57);
export default ForwardRef;
