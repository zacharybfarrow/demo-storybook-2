import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont69 = (
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
    <path d="M6.13 22h1.4V2h-1.4Zm4.13 0h1.4V11h-1.4ZM8.2 22h1.4V3.8H8.2ZM2 22h1.4V9.6H2Zm2.07 0h1.4V6h-1.4ZM20.6 8.2V22H22V8.2ZM16.47 22h1.4V6h-1.4Zm-4.13 0h1.4v-6.2h-1.4Zm6.2 0h1.4V3.4h-1.4Zm-4.14 0h1.4V8.2h-1.4Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont69);
export default ForwardRef;
