import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont398 = (
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
    role="img"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m10.05 13.874 1.905-1.906 1.893 1.893 1.256-1.257-1.892-1.892 1.892-1.893-1.215-1.214-1.892 1.892-1.893-1.893-1.256 1.257 1.892 1.893-1.905 1.905 1.214 1.215Zm9.804-12.223a.504.504 0 0 0-.354-.146h-15a.503.503 0 0 0-.5.5v19a.5.5 0 0 0 .735.44L12 17.569l7.265 3.878a.5.5 0 0 0 .735-.441v-19a.503.503 0 0 0-.146-.354ZM19 20.171l-6.765-3.61a.499.499 0 0 0-.47 0L5 20.17V5.006h14V20.17Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont398);
export default ForwardRef;
