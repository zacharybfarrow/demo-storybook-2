import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont87 = (
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
    <path d="M13.72 2A6.42 6.42 0 0 0 8 5l-.09.16V2.49H3.7V22h4.61v-8.45A12.32 12.32 0 0 1 9 8.8a3.74 3.74 0 0 1 3.4-2.52 3.08 3.08 0 0 1 2.59 1 4.4 4.4 0 0 1 .7 2.74V22h4.61V9c0-4.09-2.42-7-6.58-7Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont87);
export default ForwardRef;
