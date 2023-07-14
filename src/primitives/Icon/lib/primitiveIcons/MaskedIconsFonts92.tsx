import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts92 = (
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
    <path d="M15.5 2H2v20h20V2Zm-7 19H3v-5h5.5Zm0-6H3v-5h5.5Zm0-6H3V3h5.5Zm6 12h-5v-5h5Zm0-6h-5v-5h5Zm0-6h-5V3h5ZM21 21h-5.5v-5H21Zm0-6h-5.5v-5H21Zm0-6h-5.5V3H21Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts92);
export default ForwardRef;
