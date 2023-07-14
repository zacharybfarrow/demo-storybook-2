import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgModuleAppIcon18 = (
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
    <path d="M14.36 8.15A2.16 2.16 0 1 0 12.2 6a2.2 2.2 0 0 0 2.16 2.15Zm0 1.08c-1.16 0-3.41.5-4.08 1.5a4.8 4.8 0 0 0 4.08 2.42 4.68 4.68 0 0 0 4.08-2.42c-.67-1-2.91-1.5-4.08-1.5Zm6.17-6.81a8.2 8.2 0 1 0 .2 11.58 8.2 8.2 0 0 0-.2-11.59Zm-.34 11.07A7.45 7.45 0 1 1 14.84.87a7.45 7.45 0 0 1 5.35 12.62Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgModuleAppIcon18);
export default ForwardRef;
