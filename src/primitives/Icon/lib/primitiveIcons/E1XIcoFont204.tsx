import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont204 = (
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
    <path d="M20.35 18.09a.32.32 0 0 0-.08-.2L13.4 11a5.16 5.16 0 1 0-2.23 2.35l1.2 1.2v1.86a.31.31 0 0 0 .29.3l1.7.11a.31.31 0 0 1 .29.3v1.59A.3.3 0 0 0 15 19l2 .12 1 1a.37.37 0 0 0 .2.09l2.23.07s-.08-1.71-.08-2.19Zm-9-6.39H9.88V8a1.39 1.39 0 0 0-.22-.86 1 1 0 0 0-.81-.31 1.18 1.18 0 0 0-1.08.79 3.88 3.88 0 0 0-.2 1.48v2.6H6.13V5.61h1.31v.83-.05a2 2 0 0 1 1.79-.94 2 2 0 0 1 2.06 2.18Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont204);
export default ForwardRef;
