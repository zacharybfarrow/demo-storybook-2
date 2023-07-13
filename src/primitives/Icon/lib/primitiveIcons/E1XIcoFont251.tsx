import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont251 = (
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
    <path d="M18.56 14.37a4.19 4.19 0 1 0 4.19 4.19 4.18 4.18 0 0 0-4.19-4.19Zm2.62 6.28-.53.53-2.09-2.09-2.1 2.09-.53-.53L18 18.56l-2.1-2.1.53-.53 2.1 2.1 2.09-2.1.53.53-2.09 2.1ZM22 2H2v5h20Zm-6.87 13A4.9 4.9 0 0 1 22 15V8H11v7ZM2 22h8V8H2Zm12.33-6H11v6h4a4.9 4.9 0 0 1-1.41-3.44 5 5 0 0 1 .74-2.56Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont251);
export default ForwardRef;
