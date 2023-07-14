import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts156 = (
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
      d="M21.3 15.91a1.17 1.17 0 0 0-1.66 0l-3.19 3.2a.64.64 0 0 0-.15.25l-.51 1.76a.26.26 0 0 0 .06.25.26.26 0 0 0 .18.07h.07l1.75-.51a.47.47 0 0 0 .25-.15l3.2-3.2a1.15 1.15 0 0 0 0-1.67Zm-4.9 4.9.31-1.06.75.75Zm1.52-.56-1-.95 2.49-2.49.95 1Zm3-3-.19.18-.95-.95.18-.18a.71.71 0 0 1 .48-.2.73.73 0 0 1 .48.19.65.65 0 0 1 .19.48.66.66 0 0 1-.11.45Z"
      fill="none"
    />
    <path d="M21.3 15.91a1.17 1.17 0 0 0-1.66 0l-3.19 3.2a.64.64 0 0 0-.15.25l-.51 1.76a.26.26 0 0 0 .06.25.26.26 0 0 0 .18.07h.07l1.75-.51a.47.47 0 0 0 .25-.15l3.2-3.2a1.15 1.15 0 0 0 0-1.67Zm-4.9 4.9.31-1.06.75.75Zm1.52-.56-1-.95 2.49-2.49.95 1Zm3-3-.19.18-.95-.95.18-.18a.71.71 0 0 1 .48-.2.73.73 0 0 1 .48.19.65.65 0 0 1 .19.48.66.66 0 0 1-.11.45Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts156);
export default ForwardRef;
