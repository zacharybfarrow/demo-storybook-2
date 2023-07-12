import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts07 = (
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
    <path d="M19.42 7.62a2.56 2.56 0 0 0 .5-.78 2.28 2.28 0 0 0 .2-.85v-.24a1.87 1.87 0 0 0-1.87-1.87H18a2.28 2.28 0 0 0-.85.2 2.56 2.56 0 0 0-.78.5 6.27 6.27 0 0 1-1.22.9 6.43 6.43 0 0 1-3.16.9 6.43 6.43 0 0 1-3.16-.9 6.27 6.27 0 0 1-1.22-.9 2.56 2.56 0 0 0-.78-.5 2.28 2.28 0 0 0-.83-.2h-.25a1.87 1.87 0 0 0-1.87 1.87V6a2.28 2.28 0 0 0 .2.85 2.56 2.56 0 0 0 .5.78 6.27 6.27 0 0 1 .9 1.22 6.43 6.43 0 0 1 .9 3.15 6.43 6.43 0 0 1-.9 3.16 6.68 6.68 0 0 1-.9 1.22 2.56 2.56 0 0 0-.5.78 2.28 2.28 0 0 0-.2.85v.24a1.88 1.88 0 0 0 1.87 1.88H6a2.76 2.76 0 0 0 1.63-.71 6.27 6.27 0 0 1 1.22-.9 6.33 6.33 0 0 1 3.15-.89 6.33 6.33 0 0 1 3.16.89 6.27 6.27 0 0 1 1.22.9 2.76 2.76 0 0 0 1.63.71h.24a1.88 1.88 0 0 0 1.87-1.88V18a2.28 2.28 0 0 0-.2-.85 2.56 2.56 0 0 0-.5-.78 6.68 6.68 0 0 1-.9-1.22 6.43 6.43 0 0 1-.9-3.16 6.43 6.43 0 0 1 .9-3.16 6.27 6.27 0 0 1 .9-1.21Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts07);
export default ForwardRef;
