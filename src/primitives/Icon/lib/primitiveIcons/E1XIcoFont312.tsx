import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont312 = (
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
    <path d="m9.26 11.72 1.45.29c.07-.5.31-.82.79-.82a.67.67 0 0 1 .68.71 1.81 1.81 0 0 1-.46 1.1L9.2 16.05v.73h4.65V15.4h-2.3l1.37-1.72a2.89 2.89 0 0 0 .78-1.83 2 2 0 0 0-2.2-2 2.13 2.13 0 0 0-2.24 1.87ZM12 4 7 8.67V7H5v3.54l-1 .93V20h16v-8.53Zm7 15h-6v-1h-2v1H5v-7.09l7-6.54 7 6.54Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont312);
export default ForwardRef;
