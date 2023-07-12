import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont188 = (
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
    <path d="M16.11 8.48ZM11 12.42Zm9.57-6.61h-9.8l-2.91 8.6-2.31-4.85H2.47v1.7h2.17L8 18.19l3.75-10.68h8.84ZM12 11Zm6 1V8.79h-2.3v3.12h-3.14v2.3h3.13v3.13H18v-3.13h3.12v-2.3Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont188);
export default ForwardRef;
