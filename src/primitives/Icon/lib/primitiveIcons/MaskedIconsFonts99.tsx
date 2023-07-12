import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts99 = (
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
    <path d="M20.14 13.2a5.5 5.5 0 1 0 0 7.78 5.49 5.49 0 0 0 0-7.78ZM12 17.09a4.25 4.25 0 0 1 6.83-3.41l-6 6a4.16 4.16 0 0 1-.83-2.59Zm7.3 3a4.25 4.25 0 0 1-5.57.39l6-6a4.28 4.28 0 0 1-.46 5.64Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts99);
export default ForwardRef;
