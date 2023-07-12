import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont306 = (
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
    <path d="M17 1H2v22h20V7Zm-1 1h.67l4 5H16Zm5 20H3V2h12v6h6Zm-10.34-1h2.71v-1.73h-2.71Zm0-3.07h2.71v-1.78h-2.71ZM6 12.17l1.91 1.91 2.79-2.79v3.51h2.71v-3.51l2.76 2.77L18 12.13l-6-6Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont306);
export default ForwardRef;
