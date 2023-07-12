import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon74 = (
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
    <path
      d="M15.59 7.374c-.902 0-1.76.188-2.54.526.254.2.494.42.72.651a5.514 5.514 0 0 1 1.82-.308c3.055 0 5.54 2.486 5.54 5.54s-2.485 5.542-5.54 5.542a5.507 5.507 0 0 1-2.87-.803 6.392 6.392 0 0 0 2.1-4.738c0-3.15-2.285-5.776-5.285-6.31l1.608-1.607a.435.435 0 0 0 0-.615L9.824 3.933a.435.435 0 0 0-.307-.127H7.304a.435.435 0 0 0-.308.127L5.678 5.252a.435.435 0 0 0 0 .615l1.608 1.607c-3 .534-5.286 3.16-5.286 6.31a6.418 6.418 0 0 0 6.41 6.41c.903 0 1.762-.188 2.542-.526a7.558 7.558 0 0 1-.724-.651 5.514 5.514 0 0 1-1.818.308c-3.055 0-5.54-2.486-5.54-5.541s2.485-5.54 5.54-5.54c1.05 0 2.033.293 2.87.802a6.392 6.392 0 0 0-2.1 4.738 6.418 6.418 0 0 0 6.41 6.41c3.534 0 6.41-2.875 6.41-6.41s-2.876-6.41-6.41-6.41ZM6.6 5.559l.884-.884h1.853l.883.884-1.81 1.81L6.6 5.56ZM12 18a5.53 5.53 0 0 1 0-8.43 5.53 5.53 0 0 1 0 8.43Z"
      style={{
        fill: "#036",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon74);
export default ForwardRef;
