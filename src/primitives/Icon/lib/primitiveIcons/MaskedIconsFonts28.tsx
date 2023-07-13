import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts28 = (
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
    <path d="M8.32 8a3.73 3.73 0 0 1-.07-.68 4.2 4.2 0 0 1 .35-1.7 3.09 3.09 0 0 0-4.1 3 3.06 3.06 0 0 0 .5 1.66A4.37 4.37 0 0 1 8.32 8Zm7.37-1.3a3.13 3.13 0 0 0-6.13 0 4.38 4.38 0 0 1 6.13 0Zm-8 9.8a4.35 4.35 0 0 1-2.91-2.84 3 3 0 0 0-.23 1.16 3.13 3.13 0 0 0 3.12 3.13h.2a4.59 4.59 0 0 1-.2-1.23c-.05-.1-.03-.16-.03-.23Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts28);
export default ForwardRef;
