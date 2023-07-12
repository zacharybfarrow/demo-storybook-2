import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon01 = (
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
    <path d="M20.916 10.964 11.984 3.63l-8.932 7.334a.5.5 0 0 0 .635.773l1.99-1.634v9.56a.503.503 0 0 0 .5.5h11.615a.503.503 0 0 0 .5-.5v-9.56l1.99 1.634a.5.5 0 1 0 .634-.773Zm-7.202 8.199h-3.459V14.3h3.459v4.863Zm3.578 0h-2.578V13.8a.504.504 0 0 0-.5-.5H9.755a.503.503 0 0 0-.5.5v5.363H6.677V9.282l5.307-4.358 5.308 4.358v9.88Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon01);
export default ForwardRef;
