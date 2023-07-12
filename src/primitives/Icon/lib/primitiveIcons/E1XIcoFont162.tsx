import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont162 = (
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
    <path d="M2 2v20h20V2Zm7.5 1h5v6h-5Zm0 7h5v.06A5.57 5.57 0 0 0 9.63 15H9.5Zm-1 11H3v-5h5.5Zm0-6H3v-5h5.5Zm6 6h-5v-5h.13a5.57 5.57 0 0 0 4.87 4.94Zm-1.88-2-.71-.71 2.8-2.79-2.8-2.8.71-.7 2.79 2.79 2.8-2.79.7.7-2.79 2.8 2.79 2.79-.7.71-2.8-2.8ZM21 21h-5.5a5.61 5.61 0 0 0 5.5-5Zm0-6a5.61 5.61 0 0 0-5.47-5H21Zm0-6h-5.5V3H21Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont162);
export default ForwardRef;
