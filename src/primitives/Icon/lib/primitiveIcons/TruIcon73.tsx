import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon73 = (
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
    <path d="M21.576 16.177H4.12V6.245c0-.233.19-.424.424-.424h14.91c.234 0 .424.19.424.424v8.66h.848v-8.66c0-.701-.57-1.272-1.272-1.272H4.545c-.702 0-1.272.57-1.272 1.272v9.932h-.849A.424.424 0 0 0 2 16.6a2.429 2.429 0 0 0 2.426 2.426h15.148A2.429 2.429 0 0 0 22 16.601a.424.424 0 0 0-.424-.424Zm-10 2.002h-7.15a1.58 1.58 0 0 1-1.52-1.154h8.67v1.154Zm7.998 0h-7.15v-1.154h8.67a1.58 1.58 0 0 1-1.52 1.154Zm-6.39-10.63v-.848h-2.369v.848h2.37Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon73);
export default ForwardRef;
