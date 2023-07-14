import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont99 = (
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
    <path d="M18.25 10.75H17V7A5 5 0 0 0 7 7v3.75H5.75A1.25 1.25 0 0 0 4.5 12v8.75A1.25 1.25 0 0 0 5.75 22h12.5a1.25 1.25 0 0 0 1.25-1.25V12a1.25 1.25 0 0 0-1.25-1.25ZM9.5 7a2.5 2.5 0 0 1 5 0v3.75h-5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont99);
export default ForwardRef;
