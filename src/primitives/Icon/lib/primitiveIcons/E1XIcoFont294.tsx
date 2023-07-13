import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont294 = (
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
    <path d="M20.57 4h-2.63V2.91a1 1 0 0 0-2.05 0V4H8V2.91a1 1 0 0 0-2 0V4H3.43A1.4 1.4 0 0 0 2 5.45v15.24a1.4 1.4 0 0 0 1.43 1.42h17.14A1.4 1.4 0 0 0 22 20.69V5.45A1.4 1.4 0 0 0 20.57 4Zm.48 16.67a.45.45 0 0 1-.48.47H3.43a.45.45 0 0 1-.43-.45V9.83h18.1Zm0-11.81H3V5.45A.45.45 0 0 1 3.43 5H6v.74a1 1 0 0 0 2-.03V5h7.87v.74a1 1 0 0 0 2.05 0V5h2.63a.45.45 0 0 1 .48.48Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont294);
export default ForwardRef;
