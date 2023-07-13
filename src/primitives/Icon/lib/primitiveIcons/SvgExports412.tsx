import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports412 = (
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
    <path d="M4.64 6.14h14.72a1.5 1.5 0 0 0 0-3H4.64a1.5 1.5 0 0 0 0 3Zm14.72 11.72H4.64a1.5 1.5 0 0 0 0 3h14.72a1.5 1.5 0 0 0 0-3Zm0-7.36H4.64a1.5 1.5 0 0 0 0 3h14.72a1.5 1.5 0 0 0 0-3Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports412);
export default ForwardRef;
