import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont160 = (
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
    <path d="M2 2v20h20V2Zm6.5 19H3v-5h5.5Zm0-6H3v-5h5.5Zm1-12h5v6h-5Zm0 7h5v.06A5.57 5.57 0 0 0 9.63 15H9.5Zm5 11h-5v-5h.13a5.57 5.57 0 0 0 4.87 4.94Zm.7-1.8-4-4 .7-.7 2.8 2.8v-6.1h1v6.1l2.8-2.8.7.7ZM21 21h-5.5a5.61 5.61 0 0 0 5.5-5Zm0-6a5.61 5.61 0 0 0-5.47-5H21Zm0-6h-5.5V3H21Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont160);
export default ForwardRef;
