import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgModuleAppIcon02 = (
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
    <path d="m17.38 3.14-.3-.25-2.89 3.53-2.1-1.91-3.5 3.21-1.8 1.09-3.56.68.18.92.3-.05.19 4.61.96-.87 2.4-2.75 1.87 1.71 3.15-4.31 2.09.49h4.98v-6.1h-1.97z" />
  </svg>
);
const ForwardRef = forwardRef(SvgModuleAppIcon02);
export default ForwardRef;
