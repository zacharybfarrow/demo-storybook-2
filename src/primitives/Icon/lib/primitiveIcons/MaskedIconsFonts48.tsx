import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts48 = (
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
    <path d="M16.89 8.25a4.06 4.06 0 0 1 1.63.33 4.17 4.17 0 0 1 2.21 2.21 4.17 4.17 0 0 1 0 3.25 4.17 4.17 0 0 1-2.21 2.21 4.05 4.05 0 0 1-3.25 0A4.17 4.17 0 0 1 13.06 14a4.05 4.05 0 0 1 0-3.25 4.17 4.17 0 0 1 2.21-2.21 4 4 0 0 1 1.62-.29Zm0 7.09a3 3 0 0 0 .8-.11 3.39 3.39 0 0 0 .7-.31 2.75 2.75 0 0 0 .6-.48 2.55 2.55 0 0 0 .46-.63 1.5 1.5 0 0 0-.48-.4 3.76 3.76 0 0 0-.68-.29 5 5 0 0 0-.74-.18 3.61 3.61 0 0 0-1.31 0 5 5 0 0 0-.74.18 3.76 3.76 0 0 0-.68.29 1.5 1.5 0 0 0-.48.4 3.32 3.32 0 0 0 .44.62 3.42 3.42 0 0 0 .61.47 3.17 3.17 0 0 0 .7.31 3 3 0 0 0 .8.13Zm0-5.84a1.37 1.37 0 0 0-1.35 1.35 1.31 1.31 0 0 0 .4 1 1.27 1.27 0 0 0 1 .4 1.29 1.29 0 0 0 1-.4 1.31 1.31 0 0 0 .4-1 1.27 1.27 0 0 0-.4-.95 1.29 1.29 0 0 0-1.05-.4Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts48);
export default ForwardRef;
