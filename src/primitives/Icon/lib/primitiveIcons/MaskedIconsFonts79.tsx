import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts79 = (
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
    <path
      d="M13.47 13.15h-1v1.56h1a.84.84 0 0 0 .6-.21.74.74 0 0 0 .22-.57.77.77 0 0 0-.22-.57.84.84 0 0 0-.6-.21Zm-2-2.3v-1h2v-2h-2v-2h2v-2h-2v-2h-3v2h2v2h-2v2h2v2h-2v1h-7v9h16v-9ZM7.89 13l-2.44 3.86h2.44v1H4.15V17l2.43-3.81H4.25v-1h3.64ZM10 17.85H8.87v-5.69H10Zm5.28-3.23a1.58 1.58 0 0 1-.36.56 1.56 1.56 0 0 1-.6.39 2.18 2.18 0 0 1-.79.14h-1.1v2.14h-1.12v-5.69h2.21a2 2 0 0 1 .79.14 1.67 1.67 0 0 1 .6.38 1.54 1.54 0 0 1 .36.57 1.72 1.72 0 0 1 .13.68 1.8 1.8 0 0 1-.13.69Z"
      style={{
        fill: "#231f20",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts79);
export default ForwardRef;
