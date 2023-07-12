import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports403 = (
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
    <path d="M5.606 10.474a1.52 1.52 0 1 0 0 3.04 1.52 1.52 0 0 0 0-3.04Zm0-6a1.52 1.52 0 1 0 0 3.04 1.52 1.52 0 0 0 0-3.04Zm0 12a1.52 1.52 0 1 0 0 3.04 1.52 1.52 0 0 0 0-3.04Zm3.156 3h11v-3h-11v3Zm0-5.974h11v-3h-11v3Zm0-8.975v3h11v-3h-11Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports403);
export default ForwardRef;
