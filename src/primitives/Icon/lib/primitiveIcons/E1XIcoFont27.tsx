import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont27 = (
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
    <path d="M14.62 4 9.39 5.12 3.25 3.74v14.93l6.14 1.38 5.23-1.17 6.13 1.38V5.33ZM8.5 19l-4.38-1V4.84l4.38 1Zm6.13-1-.19.05-5 1.13V6h.2l5-1.13Zm5.25 1.17-4.38-1V5l4.38 1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont27);
export default ForwardRef;
