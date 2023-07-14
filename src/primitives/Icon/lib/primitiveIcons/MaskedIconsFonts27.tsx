import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts27 = (
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
    <path d="M16.8 8.56a5.12 5.12 0 0 1 .14.68 4.38 4.38 0 0 1 2.12.89 3.08 3.08 0 0 0 .44-1.57 3.12 3.12 0 0 0-2.93-3.1 4.12 4.12 0 0 1 .23 3.1ZM9.65 13a4.35 4.35 0 0 1-1.4-3.2 3.68 3.68 0 0 1 .06-.57 3.11 3.11 0 0 0-.43 6A4.36 4.36 0 0 1 9.65 13Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts27);
export default ForwardRef;
