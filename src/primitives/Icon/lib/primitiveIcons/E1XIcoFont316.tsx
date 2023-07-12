import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont316 = (
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
    <path d="M16.87 8.82 15 6.91l-3 3-3-3-2 1.91 3 3-3 3 1.9 1.97 3-3 3 3 1.91-1.91-3-3ZM17.26 3H6.78l-5.24 9.05 5.24 9.08h10.48l5.25-9.08Zm-.65 17H7.43l-4.59-7.95 4.59-8h9.18l4.59 8Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont316);
export default ForwardRef;
