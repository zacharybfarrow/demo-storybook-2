import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont18 = (
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
    role="img"
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
    <path d="M11 5.77h2v1.32h-2zM11 3.5h2v1.28h-2zM16.48 10.02l-1.41-1.41L13 10.67V8.08h-2v2.59L8.96 8.63l-1.41 1.42L12 14.5l4.48-4.48z" />
    <path d="M19 12.5v5H5v-5H4v6h16v-6h-1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont18);
export default ForwardRef;
