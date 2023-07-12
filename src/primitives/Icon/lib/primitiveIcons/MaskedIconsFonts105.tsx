import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts105 = (
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
    <path d="M14.46 11.88a1.86 1.86 0 0 0-.67-.44 2.48 2.48 0 0 0-.89-.15h-2.48v6.4h1.25v-2.41h1.23a2.28 2.28 0 0 0 .89-.16 1.84 1.84 0 0 0 .67-.43 1.72 1.72 0 0 0 .41-.64 2 2 0 0 0 .15-.77 2 2 0 0 0-.15-.77 1.76 1.76 0 0 0-.41-.63Zm-.94 2a.94.94 0 0 1-.68.24h-1.17V12.4h1.17a.94.94 0 0 1 .68.24.9.9 0 0 1 .25.64.88.88 0 0 1-.25.64Zm-4.35-2a2 2 0 0 0-.67-.44 2.48 2.48 0 0 0-.89-.15H5.13v6.4h1.25v-2.41h1.23a2.28 2.28 0 0 0 .89-.16 1.93 1.93 0 0 0 .67-.43 1.72 1.72 0 0 0 .41-.64 2 2 0 0 0 .15-.77 2 2 0 0 0-.15-.77 1.76 1.76 0 0 0-.41-.63Zm-.94 2a1 1 0 0 1-.68.24H6.38V12.4h1.17a1 1 0 0 1 .68.24.89.89 0 0 1 .24.64.88.88 0 0 1-.24.64Zm7-2.63v1.15h1.67v5.29h1.26V12.4h1.67v-1.11Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts105);
export default ForwardRef;
