import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon131 = (
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
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.65 9.913h.858a3.66 3.66 0 0 0-3.656-3.656v.858a2.802 2.802 0 0 1 2.798 2.798Zm-3.825 1.633.62-.62a1.316 1.316 0 0 0 1.503-.252 1.315 1.315 0 0 0 0-1.857 1.315 1.315 0 0 0-2.242.928c0 .203.047.398.133.575l-.62.62-5.887-5.887a.43.43 0 0 0-.664.073 9.202 9.202 0 0 0-1.385 5.871 9.186 9.186 0 0 0 2.637 5.536 9.152 9.152 0 0 0 1.708 1.34l.947 2.7a.423.423 0 0 1-.055.389.424.424 0 0 1-.35.18h-2.3a.424.424 0 0 1-.35-.18.424.424 0 0 1-.055-.39l.738-2.104a10.49 10.49 0 0 1-.707-.573l-.84 2.394A1.288 1.288 0 0 0 5.869 22H8.17a1.288 1.288 0 0 0 1.214-1.711l-.644-1.837a9.14 9.14 0 0 0 3.654.765 9.195 9.195 0 0 0 4.933-1.432.429.429 0 0 0 .072-.665l-5.574-5.574Zm.872-2.123a.455.455 0 0 1 .645 0 .457.457 0 1 1-.645 0Zm-1.154 8.893a8.327 8.327 0 0 1-5.017-2.39 8.327 8.327 0 0 1-2.39-5.017 8.354 8.354 0 0 1 .98-4.86l11.287 11.287a8.354 8.354 0 0 1-4.86.98ZM12.852 2v.857a7.064 7.064 0 0 1 7.056 7.056h.857C20.765 5.55 17.215 2 12.852 2Zm0 2.129v.857a4.933 4.933 0 0 1 4.927 4.927h.857a5.791 5.791 0 0 0-5.784-5.784Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon131);
export default ForwardRef;
