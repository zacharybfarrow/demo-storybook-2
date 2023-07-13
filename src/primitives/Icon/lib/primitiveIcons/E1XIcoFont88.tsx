import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont88 = (
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
    <path d="m22 7.5-5.06-2.92v1.53H7.19a2.75 2.75 0 0 0-2.41-1.39 2.78 2.78 0 1 0 2.41 4.17H17v1.52ZM4.78 9.16A1.67 1.67 0 1 1 6.44 7.5a1.67 1.67 0 0 1-1.66 1.66" />
    <path
      d="m22 16.5-5.06-2.91v1.52H7.19a2.78 2.78 0 1 0 0 2.78H17v1.53ZM4.78 18.17a1.67 1.67 0 1 1 1.66-1.67 1.67 1.67 0 0 1-1.66 1.67"
      data-name="ico_flow_one_to_one_0"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont88);
export default ForwardRef;
