import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont184 = (
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
    <path
      d="m15.81 8.35-.81.86L17.74 12 15 14.79l.86.85 3.6-3.64ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 19a9 9 0 1 1 9-9 9 9 0 0 1-9 9ZM8.19 8.35 4.54 12l3.65 3.64.86-.85L6.26 12l2.79-2.79Zm1 9.91 1.15.4 4.47-12.92-1.15-.4Z"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont184);
export default ForwardRef;
