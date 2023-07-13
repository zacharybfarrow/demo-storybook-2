import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont104 = (
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
    <path d="M3.08 2h17.85l.14 6.5h-1.74l-.14-1.86a3.19 3.19 0 0 0-.94-2.25 4.09 4.09 0 0 0-2.59-.66 2.48 2.48 0 0 0-1.75.46 2.74 2.74 0 0 0-.47 1.9v11.86a2.62 2.62 0 0 0 .47 1.87 2.64 2.64 0 0 0 1.83.46H17V22H7v-1.72h1.5a2.22 2.22 0 0 0 1.63-.48 2.7 2.7 0 0 0 .46-1.8V6.05a2.68 2.68 0 0 0-.47-1.85 2.55 2.55 0 0 0-1.77-.47 4 4 0 0 0-2.58.66 3.15 3.15 0 0 0-.94 2.25L4.68 8.5H2.93Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont104);
export default ForwardRef;
