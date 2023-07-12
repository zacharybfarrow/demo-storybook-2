import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgModuleAppIcon17 = (
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
    <path d="M8.25 17a1.71 1.71 0 1 0-1.71-1.71A1.74 1.74 0 0 0 8.25 17Zm0 .85c-.92 0-2.69.39-3.22 1.18a3.78 3.78 0 0 0 3.22 1.91A3.71 3.71 0 0 0 11.47 19c-.53-.77-2.3-1.16-3.22-1.16Zm4.9-6.6A7.38 7.38 0 0 0 2.9 21.85a7.38 7.38 0 0 0 10.43-.18 7.38 7.38 0 0 0-.18-10.43Zm-.36 9.91a6.63 6.63 0 0 1-9.37.16 6.63 6.63 0 0 1 9.21-9.53 6.63 6.63 0 0 1 .16 9.37Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgModuleAppIcon17);
export default ForwardRef;
