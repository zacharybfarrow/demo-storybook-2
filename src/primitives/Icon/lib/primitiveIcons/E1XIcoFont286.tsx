import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont286 = (
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
    <path d="M13 3h-2v.4h2Zm3.51-1h-9a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm.59 19a.6.6 0 0 1-.6.6h-9a.59.59 0 0 1-.6-.6V3a.59.59 0 0 1 .59-.6h9a.6.6 0 0 1 .6.6ZM12 19.3a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0 1.6a.59.59 0 0 1-.6-.59.6.6 0 0 1 1.2 0 .59.59 0 0 1-.6.59ZM7.49 19h9V4h-9ZM7.9 4.4h8.19v14.2H7.9Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont286);
export default ForwardRef;
