import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont101 = (
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
      d="M7.18 5.77 5.3 3.89c-.07-.07-.13-.09-.18-.07s-.07.08-.07.18v5a.33.33 0 0 0 .1.25.35.35 0 0 0 .24.1h5c.1 0 .16 0 .18-.08s0-.11-.07-.17L8.7 7.28A5.64 5.64 0 0 1 12 6.22 6 6 0 0 1 15 7a5.84 5.84 0 0 1 2.16 2.17 5.76 5.76 0 0 1 .79 3A5.9 5.9 0 0 1 15 17.3a5.77 5.77 0 0 1-3 .8 5.9 5.9 0 0 1-5.93-5.94H4a8.09 8.09 0 0 0 2.34 5.68 8.08 8.08 0 0 0 2.57 1.71 7.88 7.88 0 0 0 6.22 0 8.08 8.08 0 0 0 2.57-1.71 8 8 0 0 0 1.71-8.79 7.83 7.83 0 0 0-4.28-4.28A7.89 7.89 0 0 0 12 4.14a7.77 7.77 0 0 0-4.82 1.63Z"
      data-name="Path 1633"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont101);
export default ForwardRef;