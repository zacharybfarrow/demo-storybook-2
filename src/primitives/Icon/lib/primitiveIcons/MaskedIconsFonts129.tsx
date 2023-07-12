import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts129 = (
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
      d="M8.76 18.23a4.9 4.9 0 0 1 .21.92l-1.86-1.86-2-1.95-.26-.34.36.06a5.46 5.46 0 0 1 .66.19 4.78 4.78 0 0 1 2.89 3Zm4.64-4.84-1.27 1.26-.73.74-.38.38a.36.36 0 0 1-.49 0l-1-1-.1-.11-1.17-1.15a.34.34 0 0 1 0-.45l.25-.25.13-.13.74-.73L13 8.21a.36.36 0 0 1 .49 0l2.31 2.32a.33.33 0 0 1 0 .48Z"
      data-name="Path 108"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts129);
export default ForwardRef;
