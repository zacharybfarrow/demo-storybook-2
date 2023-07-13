import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts142 = (
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
    <g data-name="ico actual v potential 16">
      <path
        d="m18.49 12.27-.25-2-.36-1.64-1.45-1.06-2.29 1-1.25-2.15L11 7 9.84 8.23 10 9.77l-2.74.6-.63 2.21L8.51 14l2 1.28 2.34 1.61 2.85-.37 1.61-2.45Z"
        data-name="Group 2626"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts142);
export default ForwardRef;
