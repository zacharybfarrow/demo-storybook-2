import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont186 = (
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
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2ZM9.05 14.79l-.86.85L4.54 12l3.65-3.65.86.86L6.26 12Zm1.29 3.87-1.15-.4 4.47-12.92 1.15.4Zm5.47-3-.81-.87L17.74 12 15 9.21l.86-.86 3.6 3.65Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont186);
export default ForwardRef;
