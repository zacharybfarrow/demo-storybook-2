import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont277 = (
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
    <path d="M10.09 10.72A1.28 1.28 0 1 0 11.38 12a1.28 1.28 0 0 0-1.29-1.28Zm0 3.92a1.29 1.29 0 0 0 0 2.57 1.29 1.29 0 1 0 0-2.57Zm0 3.92a1.29 1.29 0 1 0 1.29 1.28 1.28 1.28 0 0 0-1.29-1.28Zm0-11.77a1.29 1.29 0 1 0 1.29 1.29 1.28 1.28 0 0 0-1.29-1.29Zm3.82-1.35a1.29 1.29 0 1 0-1.29-1.28 1.28 1.28 0 0 0 1.29 1.28Zm0 1.35a1.29 1.29 0 1 0 0 2.57 1.29 1.29 0 0 0 0-2.57Zm0 3.93A1.28 1.28 0 1 0 15.19 12a1.28 1.28 0 0 0-1.28-1.28Zm-3.82-7.85a1.29 1.29 0 1 0 1.29 1.29 1.28 1.28 0 0 0-1.29-1.29Zm3.82 15.69a1.29 1.29 0 1 0 1.28 1.28 1.29 1.29 0 0 0-1.28-1.28Zm0-3.92a1.29 1.29 0 1 0 1.28 1.28 1.28 1.28 0 0 0-1.28-1.28Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont277);
export default ForwardRef;
