import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon75 = (
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
    <path d="m22 12.294-.595-.595-.535.535V6.008c0-.695-.566-1.261-1.262-1.261H3.262C2.566 4.747 2 5.313 2 6.008V16.28c0 .696.566 1.262 1.262 1.262h9.583a5.453 5.453 0 0 1-.347-.841H3.262a.421.421 0 0 1-.42-.421v-5.322H14.08l.048-.044a5.495 5.495 0 0 1 1.214-.797H2.841V8.228H20.03v3.313a4.18 4.18 0 0 0-2.32-.7c-2.32 0-4.206 1.887-4.206 4.206s1.887 4.206 4.206 4.206 4.206-1.886 4.206-4.206c0-.765-.207-1.483-.566-2.102l.651-.651ZM2.841 7.387V6.008c0-.232.189-.42.42-.42h16.347c.232 0 .42.188.42.42v1.379H2.842ZM17.71 18.412c-1.856 0-3.365-1.51-3.365-3.365s1.51-3.364 3.365-3.364c1.016 0 1.927.453 2.545 1.167l-2.578 2.578-1.197-1.197-.594.595 1.494 1.494a.42.42 0 0 0 .594 0l2.756-2.755c.22.448.345.95.345 1.482a3.369 3.369 0 0 1-3.365 3.365Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon75);
export default ForwardRef;
