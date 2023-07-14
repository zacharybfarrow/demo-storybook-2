import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts35 = (
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
    <path d="M8.67 11.38A2.17 2.17 0 1 0 6.5 9.21a2.21 2.21 0 0 0 2.17 2.17Zm0 1.08c-1.17 0-3.42.5-4.09 1.5a4.77 4.77 0 0 0 4.09 2.41A4.65 4.65 0 0 0 12.75 14c-.67-1-2.92-1.54-4.08-1.54Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts35);
export default ForwardRef;
