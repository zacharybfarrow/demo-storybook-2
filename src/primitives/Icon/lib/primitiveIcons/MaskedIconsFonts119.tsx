import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts119 = (
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
    <path
      d="M6.73 7.61a2.2 2.2 0 1 0 2.2 2.2 2.19 2.19 0 0 0-2.2-2.2Zm4.66 7.76h6.11v-1.21h-6.11Zm6.11-5.56h-6.11V11h6.11Zm-6.11 3.3h8V11.9h-8ZM19.81 5H4.19A2.19 2.19 0 0 0 2 7.19v9.62A2.19 2.19 0 0 0 4.19 19h15.62A2.19 2.19 0 0 0 22 16.81V7.19A2.19 2.19 0 0 0 19.81 5ZM21 16.81A1.2 1.2 0 0 1 19.81 18H4.19A1.2 1.2 0 0 1 3 16.81v-.42h8.12v-1.1c0-1.46-2.92-2.19-4.39-2.19A7.09 7.09 0 0 0 3 14.19v-7A1.2 1.2 0 0 1 4.19 6h15.62A1.2 1.2 0 0 1 21 7.19Zm-9.61-8h8V7.55h-8Z"
      fill="#231f20"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts119);
export default ForwardRef;
