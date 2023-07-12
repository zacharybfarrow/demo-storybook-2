import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts123 = (
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
    <path d="M15.61 20.44 17 18.19a.3.3 0 0 0 0-.19.41.41 0 0 0-.19-.18L15 16.94l2-2.72h2.5l-1.39 2.14a.31.31 0 0 0-.05.27.28.28 0 0 0 .17.21l1.32.58Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts123);
export default ForwardRef;
