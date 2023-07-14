import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont250 = (
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
    <path d="M22 2H2v5h20Zm-6.87 13A4.9 4.9 0 0 1 22 15V8H11v7Zm-.8 1H11v6h4a4.9 4.9 0 0 1-1.41-3.44 5 5 0 0 1 .74-2.56Zm7.17-.41a4.19 4.19 0 1 0 0 5.93 4.19 4.19 0 0 0 0-5.93Zm-2.59 3.34v3h-.74v-3h-3v-.75h3v-3h.74v3h3v.75ZM2 22h8V8H2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont250);
export default ForwardRef;
