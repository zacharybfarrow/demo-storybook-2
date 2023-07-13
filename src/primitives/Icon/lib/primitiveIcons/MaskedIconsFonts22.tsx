import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts22 = (
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
    <path d="M10.2 7.1a6.18 6.18 0 0 1 2.33-1.42L14.42 5a.67.67 0 0 0 .47-.67.68.68 0 0 0-.51-.64l-2.27-.59a7 7 0 0 0-1.71-.2 6.9 6.9 0 0 0-4.87 2L3.7 6.73a.34.34 0 0 0-.09.27v.33H3.3a.32.32 0 0 0-.25.1l-.95.94a.37.37 0 0 0-.1.24.35.35 0 0 0 .1.24l3 2.94a.35.35 0 0 0 .47 0l.93-.91a.33.33 0 0 0 .1-.23v-.3h.34a.36.36 0 0 0 .22-.09l.91-.92.11-.11 5.54 5.8v.05l4.73 4.94a1.74 1.74 0 0 0 1.26.52 1.77 1.77 0 0 0 1.29-.6 1.72 1.72 0 0 0 .53-1.23 1.83 1.83 0 0 0-.53-1.29Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts22);
export default ForwardRef;
