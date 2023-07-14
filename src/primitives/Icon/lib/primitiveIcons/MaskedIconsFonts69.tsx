import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts69 = (
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
    <path d="M18.26 9.84h1.25V8.59h-1.25Zm-10 6.26H9.5v-1.25H8.25ZM4.5 9.84h1.25V8.59H4.5Zm13.76-3.75h1.25V4.84h-1.25Zm1.25 5v1.25h1.25V11.1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts69);
export default ForwardRef;
