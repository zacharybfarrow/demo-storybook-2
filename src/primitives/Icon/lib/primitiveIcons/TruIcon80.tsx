import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon80 = (
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
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.518 11.082h-.778V7.74C17.74 4.575 15.165 2 12 2S6.26 4.575 6.26 7.74v3.342h-.778c-.772 0-1.4.629-1.4 1.401V20.6c0 .609.39 1.126.933 1.32v-9.436c0-.257.21-.467.467-.467h13.036c.257 0 .467.21.467.467V20.6c0 .258-.21.467-.467.467H6.416V22h12.102c.772 0 1.4-.628 1.4-1.401v-8.116c0-.772-.628-1.4-1.4-1.4ZM7.194 7.74c0-2.65 2.156-4.806 4.806-4.806s4.806 2.156 4.806 4.806v3.342H7.194V7.74Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon80);
export default ForwardRef;
