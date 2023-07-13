import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon16 = (
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
    <path d="M20.11 8.468A8.907 8.907 0 0 1 20.835 12c0 4.94-4.02 8.96-8.96 8.96S2.919 16.94 2.919 12s4.019-8.96 8.959-8.96a8.943 8.943 0 0 1 7.017 3.401l-7.009 7.01-2.702-2.703-.649.65 3.027 3.025a.458.458 0 0 0 .648 0L22 4.633l-.649-.649-1.803 1.803a9.86 9.86 0 0 0-7.671-3.664C6.43 2.123 2 6.553 2 12s4.43 9.877 9.877 9.877 9.877-4.43 9.877-9.877a9.816 9.816 0 0 0-.952-4.225l-.693.693Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon16);
export default ForwardRef;
