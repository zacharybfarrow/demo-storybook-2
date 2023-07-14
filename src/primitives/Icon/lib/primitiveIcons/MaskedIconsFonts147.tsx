import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts147 = (
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
    <path d="M10.67 16.16h2.71v1.78h-2.71zM10.67 19.29h2.71v1.73h-2.71zM5.97 12.19l1.91 1.91 2.79-2.79v3.51h2.71v-3.51l2.77 2.77 1.9-1.93-6.02-6.02-6.06 6.06z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts147);
export default ForwardRef;
