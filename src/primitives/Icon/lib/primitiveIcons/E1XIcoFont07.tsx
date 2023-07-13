import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont07 = (
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
    data-name="Layer 1"
    viewBox="0 0 24 24"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.278 17.722h7.477l-7.477-7.477ZM12 .98A11.02 11.02 0 1 0 23.02 12 11.033 11.033 0 0 0 12 .98ZM12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10Zm5.723-8.245V6.277h-7.478Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont07);
export default ForwardRef;
