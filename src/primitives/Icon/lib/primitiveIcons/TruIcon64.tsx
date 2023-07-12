import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon64 = (
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
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12 5.06a4.26 4.26 0 0 0-4.254 4.254c0 2.346 1.908 4.254 4.254 4.254s4.254-1.908 4.254-4.254A4.26 4.26 0 0 0 12 5.06Zm0 7.63a3.38 3.38 0 0 1-3.376-3.376c0-1.862 1.514-3.376 3.376-3.376s3.376 1.514 3.376 3.376A3.38 3.38 0 0 1 12 12.69Zm5.085-8.596A7.174 7.174 0 0 0 11.94 2a7.21 7.21 0 0 0-4.975 2.04 7.112 7.112 0 0 0-2.181 4.907c-.16 5.076 4.258 10.276 6.905 12.924a.438.438 0 0 0 .622 0l.295-.299c-.309-.311-.898-.939-.898-.939-2.561-2.68-6.185-7.27-6.046-11.658a6.238 6.238 0 0 1 1.913-4.304 6.335 6.335 0 0 1 4.372-1.793 6.295 6.295 0 0 1 4.52 1.84 6.299 6.299 0 0 1 1.875 4.502c0 3.978-3.012 8.09-5.442 10.76.2.212.403.424.611.634 2.533-2.778 5.71-7.115 5.71-11.394a7.17 7.17 0 0 0-2.136-5.126Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon64);
export default ForwardRef;
