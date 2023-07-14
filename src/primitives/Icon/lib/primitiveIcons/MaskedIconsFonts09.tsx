import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts09 = (
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
    <path d="M6.22 11.31a4.19 4.19 0 1 1 8.1-1.5 4 4 0 0 1-.21 1.25h.56l.78.47a5.4 5.4 0 0 0 .3-1.72 5.63 5.63 0 0 0-11.25 0 5.5 5.5 0 0 0 .41 2.07 12.77 12.77 0 0 1 1.31-.57Zm1.4 6a1.25 1.25 0 1 0 1.26 1.25 1.25 1.25 0 0 0-1.26-1.25Zm8.76 0a1.25 1.25 0 1 0 1.24 1.25 1.26 1.26 0 0 0-1.24-1.25Zm-2-5H7.1a15.68 15.68 0 0 0-2 .87 4.28 4.28 0 0 0-.93.64l-.23.26v3.21h1.53a2.48 2.48 0 0 1 4.31 0h4.44a2.48 2.48 0 0 1 4.31 0h1.59v-1.5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts09);
export default ForwardRef;
