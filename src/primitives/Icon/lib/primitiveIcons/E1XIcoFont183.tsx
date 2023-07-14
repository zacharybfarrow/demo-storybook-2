import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont183 = (
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
    <path d="M10 11.61a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.5 2.5Zm-3.4 2.13a2.5 2.5 0 1 0-2.5 2.5 2.5 2.5 0 0 0 2.5-2.5ZM4.88 8.93a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.5 2.5Zm14.35-1.69a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.5 2.5Zm-5.85-.38a2.5 2.5 0 1 0-2.5-2.5 2.51 2.51 0 0 0 2.5 2.5Zm6.56 10.91a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5Zm0-1.4a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.46 2.5ZM5.42 17a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5Zm10.13-9.6a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.46ZM13.42 18a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5Zm-.5-2.5a2.5 2.5 0 1 0-2.5 2.5 2.5 2.5 0 0 0 2.5-2.46Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont183);
export default ForwardRef;
