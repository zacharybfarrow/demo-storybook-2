import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts150 = (
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
    <path
      d="M21 10.91h-7.49a1 1 0 0 0-.74.31 1.06 1.06 0 0 0-.31.75v4.6a1 1 0 0 0 .31.75 1 1 0 0 0 .74.3H21a1 1 0 0 0 .74-.3 1 1 0 0 0 .31-.75V12A1.06 1.06 0 0 0 21 10.91Z"
      data-name="Path 79"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts150);
export default ForwardRef;
