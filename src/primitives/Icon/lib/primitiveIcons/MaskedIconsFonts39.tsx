import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts39 = (
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
      d="M7.81 15.55H5.05c-.19 0-.25.09-.11.24s.41.41.75.71a2.81 2.81 0 0 0-1.06 2.19c.27 1.57 2.11 1.77 2.16 1.56S5.72 19.8 6 19.09a5.16 5.16 0 0 1 1-1.27c.36.35.64.67.86.89s.26.15.26-.06v-2.82c.01-.2-.07-.28-.31-.28Z"
      data-name="Short Cut"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts39);
export default ForwardRef;
