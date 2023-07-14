import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts166 = (
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
    <path
      d="M19.8 4.93H4.24a2.1 2.1 0 0 0-1.55.64 2.12 2.12 0 0 0-.64 1.56v9.57a2.08 2.08 0 0 0 .64 1.56 2.11 2.11 0 0 0 1.55.64H19.8a2.19 2.19 0 0 0 2.2-2.19V7.13a2.2 2.2 0 0 0-2.19-2.2Z"
      data-name="Path 79"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts166);
export default ForwardRef;
