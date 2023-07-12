import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgModuleAppIcon13 = (
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
    <path d="M9.6 1.6H3.2v2.67h6.4Zm.53 15.68v-1.81h-3a4.39 4.39 0 0 0 3 1.81Zm-3-7.15h3V8.55a3.82 3.82 0 0 0-2.99 1.58Zm-.73 2.22V13a4.43 4.43 0 0 0 .09.9h3.64v-2.17H6.47c-.03.21-.06.41-.07.62Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgModuleAppIcon13);
export default ForwardRef;
