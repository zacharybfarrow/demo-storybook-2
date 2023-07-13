import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts05 = (
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
    <path d="M9.5 4.55H7.88L4.5 7.94v7.19l5-4Zm-2.28 10L4.5 16.73v1.94l.88.88h2.14l3.9-1.3 2.6 1.3h1L18.09 18l-5.64-3.45ZM17.5 4.69 15.27 5.8h-4.52v5.93l-2 1.57h3.65l7.1-5.91v-.7Zm1.91 12.65.09-.05V9l-5.8 4.84Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts05);
export default ForwardRef;
