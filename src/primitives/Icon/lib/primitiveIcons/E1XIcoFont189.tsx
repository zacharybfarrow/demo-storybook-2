import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont189 = (
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
    <path d="M11 12.42Zm9.57-6.61h-9.8l-2.91 8.6-2.31-4.85H2.47v1.7h2.17L8 18.19l3.75-10.68h8.84ZM12 11Zm8.77.84a4.17 4.17 0 0 0-2.21-2.21 4.17 4.17 0 0 0-3.25 0 4.17 4.17 0 0 0-2.21 2.21 4.05 4.05 0 0 0 0 3.25 4.17 4.17 0 0 0 2.21 2.21 4.05 4.05 0 0 0 3.25 0 4.17 4.17 0 0 0 2.17-2.3 4.17 4.17 0 0 0 0-3.25Zm-4.79-.89a1.27 1.27 0 0 1 1-.4 1.29 1.29 0 0 1 1 .4 1.27 1.27 0 0 1 .4.95 1.31 1.31 0 0 1-.4 1 1.29 1.29 0 0 1-1 .4 1.27 1.27 0 0 1-1-.4 1.31 1.31 0 0 1-.4-1 1.27 1.27 0 0 1 .36-1Zm3 4.54a2.75 2.75 0 0 1-.6.48 3.39 3.39 0 0 1-.7.31 2.93 2.93 0 0 1-1.59 0 3.17 3.17 0 0 1-.7-.31 3.42 3.42 0 0 1-.61-.47 3.32 3.32 0 0 1-.44-.62 1.5 1.5 0 0 1 .48-.4 3.76 3.76 0 0 1 .68-.29 5 5 0 0 1 .74-.18 3.61 3.61 0 0 1 1.31 0 5 5 0 0 1 .74.18 3.76 3.76 0 0 1 .68.29 1.5 1.5 0 0 1 .48.4 2.55 2.55 0 0 1-.45.56Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont189);
export default ForwardRef;
