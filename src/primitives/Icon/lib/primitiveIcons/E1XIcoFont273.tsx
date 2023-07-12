import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont273 = (
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
    <path d="M11.22 15.75h1.54a.48.48 0 0 0 .48-.49v-2h2a.48.48 0 0 0 .49-.48v-1.54a.48.48 0 0 0-.49-.48h-2v-2a.48.48 0 0 0-.48-.49h-1.52a.48.48 0 0 0-.48.49v2h-2a.47.47 0 0 0-.48.48v1.54a.47.47 0 0 0 .48.48h2v2a.49.49 0 0 0 .46.49Zm-4.61-2.87a.64.64 0 0 0-.49-.29H5V12a7 7 0 0 1 11.5-5.35.67.67 0 1 0 .87-1A8.34 8.34 0 0 0 3.64 12v.59H2.55a.5.5 0 0 0-.49.29.68.68 0 0 0 0 .59l1.79 2.76a.53.53 0 0 0 .46.25.59.59 0 0 0 .47-.25l1.79-2.78a.59.59 0 0 0 .04-.57Zm15.3-2.33-1.78-2.76a.57.57 0 0 0-.93 0l-1.79 2.78a.53.53 0 0 0 0 .57.58.58 0 0 0 .48.29H19V12a7 7 0 0 1-7 7 7.1 7.1 0 0 1-4.51-1.64.67.67 0 0 0-.86 1A8.34 8.34 0 0 0 20.36 12v-.59h1.11a.52.52 0 0 0 .49-.29.72.72 0 0 0-.05-.57Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont273);
export default ForwardRef;
