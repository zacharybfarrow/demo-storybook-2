import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts100 = (
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
    <path d="M14.5 14.63v1.27c2.91.34 5 1.26 5 2.35 0 1.38-3.36 2.5-7.5 2.5s-7.5-1.12-7.5-2.5c0-1.09 2.09-2 5-2.35v-1.27c-3.39.37-6.25 1.53-6.25 3.62C3.25 20.84 7.64 22 12 22s8.75-1.16 8.75-3.75c0-2.09-2.86-3.25-6.25-3.62Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts100);
export default ForwardRef;
