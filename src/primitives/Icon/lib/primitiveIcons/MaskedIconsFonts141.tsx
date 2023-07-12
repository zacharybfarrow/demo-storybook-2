import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts141 = (
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
    <path d="m17.64 16.57 1.4-2 .82-3.64.4-2L17.24 6 16 5.7h-.11L10.73 5 8.12 6.72l-.41 1.87h-2.2l.2 4.95 1.91 2.5 3.11 1.81.89.32 4.17-.62Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts141);
export default ForwardRef;
