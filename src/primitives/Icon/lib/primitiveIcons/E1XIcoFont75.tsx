import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont75 = (
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
    <path d="M2 12a3.55 3.55 0 0 0 .07.72 5 5 0 0 0 8.41 2.85h7.95a3.57 3.57 0 0 0 0-7.14h-7.95a5 5 0 0 0-8.41 2.85A3.55 3.55 0 0 0 2 12Zm19 0a2.57 2.57 0 0 1-2.57 2.57h-7.17a4.85 4.85 0 0 0 0-5.14h7.17A2.57 2.57 0 0 1 21 12Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont75);
export default ForwardRef;
