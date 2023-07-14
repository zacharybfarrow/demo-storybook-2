import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon48 = (
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
    <path d="M21.995 15.285a10.008 10.008 0 0 0-3.618-6.807l-.423.732c.088.075.176.15.262.229a9.245 9.245 0 0 1 1.505 1.779l-2.017 1.165.416.72 2.023-1.167a9.155 9.155 0 0 1 1.023 3.426.414.414 0 0 1-.415.451h-7.23a1.578 1.578 0 0 0-.413-.707l4.252-7.364A10.01 10.01 0 0 0 12 6.192c-2.517 0-4.924.935-6.778 2.633a10.008 10.008 0 0 0-3.217 6.46 1.245 1.245 0 0 0 1.245 1.361h7.229c.183.67.795 1.163 1.521 1.163s1.338-.494 1.521-1.163h7.23a1.245 1.245 0 0 0 1.244-1.361Zm-11.516.529h-7.23a.414.414 0 0 1-.415-.452A9.155 9.155 0 0 1 3.86 11.93l2.032 1.174.417-.721-2.027-1.17a9.244 9.244 0 0 1 1.502-1.774c.404-.37.838-.7 1.294-.989l1.158 2.005.721-.416-1.156-2.002a9.18 9.18 0 0 1 3.789-1.004v2.3h.832V7.036a9.174 9.174 0 0 1 3.799 1.015l-3.84 6.65a1.58 1.58 0 0 0-1.903 1.114ZM12 16.976a.747.747 0 1 1 .002-1.494.747.747 0 0 1-.002 1.494Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon48);
export default ForwardRef;
