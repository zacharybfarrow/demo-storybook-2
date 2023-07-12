import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont140 = (
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
    <path d="M14.88 11.84a5 5 0 0 1 .58.34 4 4 0 0 1 .39.34 2.69 2.69 0 0 1 .6 1 3.61 3.61 0 0 1 .19 1.23 4.07 4.07 0 0 1-.27 1.52 3.17 3.17 0 0 1-.78 1.15 3.65 3.65 0 0 1-1.24.74 4.93 4.93 0 0 1-1.63.26H7.36V5.59h5.14a5.27 5.27 0 0 1 1.64.25 3.57 3.57 0 0 1 1.25.72 3.15 3.15 0 0 1 .8 1.1 3.76 3.76 0 0 1 .27 1.46 2.91 2.91 0 0 1-1.58 2.72Zm-2.57-1.06a1.76 1.76 0 0 0 1.21-.4A1.38 1.38 0 0 0 14 9.3a1.38 1.38 0 0 0-.44-1.08 1.76 1.76 0 0 0-1.21-.4H9.86v3Zm.16 5.4a1.68 1.68 0 0 0 1.22-.43 1.51 1.51 0 0 0 .45-1.16 1.49 1.49 0 0 0-.45-1.15 1.72 1.72 0 0 0-1.22-.44H9.86v3.15Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont140);
export default ForwardRef;
