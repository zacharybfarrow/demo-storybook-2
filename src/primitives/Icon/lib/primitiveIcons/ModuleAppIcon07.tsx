import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgModuleAppIcon07 = (
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
    <path d="M16.07 17c-.94 0-2.82.47-2.82 1.41v.7h5.63v-.7c0-.96-1.88-1.41-2.81-1.41Zm0-.81a1.41 1.41 0 1 0-1.41-1.41 1.41 1.41 0 0 0 1.45 1.39Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgModuleAppIcon07);
export default ForwardRef;
