import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts143 = (
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
        d="m17.78 9.94-2.31-.07-1.67-1.18-1.87.36-1.74 1 .26 2.31-.29 2.31 2.09.19 1.66.52 1.64-.58 1.87-.47.73-2Z"
        data-name="Group 2626"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts143);
export default ForwardRef;
