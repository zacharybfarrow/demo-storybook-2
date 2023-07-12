import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports350 = (
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
    <path d="m12 2.302-1.71 5.301-4.718-2.962 2.098 5.16-5.518.764 4.924 2.605-3.736 4.132 5.446-1.17-.206 5.566L12 17.302l3.42 4.397-.206-5.567 5.446 1.17-3.736-4.132 4.924-2.605-5.518-.763 2.098-5.16-4.718 2.961Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports350);
export default ForwardRef;
