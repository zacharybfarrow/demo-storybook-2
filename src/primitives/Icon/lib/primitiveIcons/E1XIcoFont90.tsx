import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont90 = (
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
    <path d="M17 22a.83.83 0 0 1-.83-.83.84.84 0 0 1 .83-.84.83.83 0 0 0 .83-.83v-5a.83.83 0 0 1 .25-.59L20 12l-1.91-1.91a.83.83 0 0 1-.25-.59v-5a.83.83 0 0 0-.84-.83.84.84 0 0 1-.83-.84A.83.83 0 0 1 17 2a2.5 2.5 0 0 1 2.5 2.5v4.66l2.26 2.25a.85.85 0 0 1 0 1.18l-2.26 2.25v4.66A2.5 2.5 0 0 1 17 22ZM7 22a2.5 2.5 0 0 1-2.5-2.5v-4.66l-2.26-2.25a.85.85 0 0 1 0-1.18L4.5 9.16V4.5A2.5 2.5 0 0 1 7 2a.83.83 0 0 1 .83.83.84.84 0 0 1-.83.84.83.83 0 0 0-.83.83v5a.83.83 0 0 1-.25.59L4 12l1.91 1.91a.83.83 0 0 1 .25.59v5a.83.83 0 0 0 .83.83.84.84 0 0 1 .83.84A.83.83 0 0 1 7 22Zm5-7.5a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5Zm0-3.33a.83.83 0 1 0 .83.83.83.83 0 0 0-.83-.83Zm0 9.16a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5ZM12 17a.83.83 0 0 0-.83.83.83.83 0 1 0 1.66 0A.83.83 0 0 0 12 17Zm0-8.33a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5Zm0-3.34a.84.84 0 0 0-.83.84.83.83 0 1 0 1.66 0 .84.84 0 0 0-.83-.84Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont90);
export default ForwardRef;
