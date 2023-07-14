import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts111 = (
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
    <path d="M2 2v18h.9V2.9H20V2H2z" />
    <path d="M16.47 5H5v17h17V5Zm-5.95 16.15H5.85V16.9h4.67Zm0-5.1H5.85V11.8h4.67Zm0-5.1H5.85v-5.1h4.67Zm5.1 10.2h-4.25V16.9h4.25Zm0-5.1h-4.25V11.8h4.25Zm0-5.1h-4.25v-5.1h4.25Zm5.53 10.2h-4.68V16.9h4.68Zm0-5.1h-4.68V11.8h4.68Zm0-5.1h-4.68v-5.1h4.68Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts111);
export default ForwardRef;
