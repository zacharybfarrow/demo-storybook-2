import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont310 = (
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
    <path d="m16 7-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4Zm-4-5a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 19a9 9 0 1 1 9-9 9 9 0 0 1-9 9Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont310);
export default ForwardRef;
