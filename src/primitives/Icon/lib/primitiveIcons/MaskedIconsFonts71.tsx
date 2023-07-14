import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts71 = (
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
    <path d="M5.75 18.6H7v-1.25H5.75ZM4.5 6.09h1.25V4.84H4.5Zm1.25 6.26H7V11.1H5.75Zm5 0H12V11.1h-1.25Zm7.51 3.75v1.25h1.25V16.1ZM9.5 6.09h1.25V4.84H9.5Zm1.25 11.26H12V16.1h-1.25Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts71);
export default ForwardRef;
