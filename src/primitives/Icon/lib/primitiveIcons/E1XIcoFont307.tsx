import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont307 = (
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
    <path d="M17 1H2v22h20V7Zm-1 1h.67l4 5H16Zm5 20H3V2h12v6h6ZM13.34 6.11h-2.71v1.73h2.71Zm0 6.2h-2.71v3.5l-2.76-2.76L6 15l6 6 6-6.06L16.13 13l-2.79 2.78Zm0-3.13h-2.71V11h2.71Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont307);
export default ForwardRef;
