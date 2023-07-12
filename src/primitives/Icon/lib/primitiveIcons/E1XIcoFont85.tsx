import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont85 = (
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
    <path d="M13 10.91h-2v1.32h2Zm-2-3.58v2.59h2V7.33l2.05 2L16.46 8 12 3.5 7.53 8l1.41 1.39Zm8 5.17v5H5v-5H4v6h16v-6Zm-8 2h2v-1.28h-2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont85);
export default ForwardRef;
