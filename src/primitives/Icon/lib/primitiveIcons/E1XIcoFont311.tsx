import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont311 = (
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
    <path d="m10 12.78 1.3-.78v4.75h1.6V9.89H12L10 11ZM12 4 7 8.67V7H5v3.54l-1 .93V20h16v-8.53Zm7 15h-6v-1h-2v1H5v-7.09l7-6.54 7 6.54Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont311);
export default ForwardRef;
