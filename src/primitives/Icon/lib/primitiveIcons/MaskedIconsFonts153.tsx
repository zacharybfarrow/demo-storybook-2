import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts153 = (
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
    <path d="M7 12h3.92a.12.12 0 0 0-.05-.13l-1.35-1.41A4.33 4.33 0 0 1 12 9.67a4.42 4.42 0 0 1 2.24.59 4.4 4.4 0 0 1 2.2 3.6H18a5.93 5.93 0 0 0-.46-2.07 5.83 5.83 0 0 0-3.21-3.21 6 6 0 0 0-5.95.75L7 7.92s-.09-.07-.13 0 0 .06 0 .13v3.78a.22.22 0 0 0 .07.18A.24.24 0 0 0 7 12Zm10 4h-3.96a.12.12 0 0 0 .05.13l1.39 1.39a4.33 4.33 0 0 1-2.48.79 4.42 4.42 0 0 1-2.24-.59 4.49 4.49 0 0 1-1.62-1.62 4.39 4.39 0 0 1-.59-2.24H6a5.68 5.68 0 0 0 .47 2.33 5.83 5.83 0 0 0 3.21 3.21 6 6 0 0 0 5.95-.75L17 20.08c0 .05.09.07.13.05s.05-.06.05-.13v-3.78a.22.22 0 0 0-.07-.18A.24.24 0 0 0 17 16Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts153);
export default ForwardRef;
