import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts148 = (
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
    <path d="M10.64 9.2h2.71v1.78h-2.71zM10.64 6.13h2.71v1.73h-2.71zM18.05 14.96l-1.9-1.91-2.8 2.78v-3.5h-2.71v3.5l-2.76-2.76-1.91 1.92L12 21.02l6.05-6.06z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts148);
export default ForwardRef;
