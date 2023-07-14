import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts26 = (
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
    <path d="M11 12.45a4.49 4.49 0 0 1 1-.14h.2a4.34 4.34 0 0 1 3.49-3.07A3.12 3.12 0 1 0 11 12.45Zm1 1.11a3.13 3.13 0 1 0 3 4.12 4.36 4.36 0 0 1-3-4.12Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts26);
export default ForwardRef;
