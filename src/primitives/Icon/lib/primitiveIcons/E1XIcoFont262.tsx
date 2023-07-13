import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont262 = (
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
    <path
      d="M6.76 7.55a2.19 2.19 0 0 0-2.19 2.19 2.05 2.05 0 0 0 .64 1.53 2.11 2.11 0 0 0 1.55.64 2.12 2.12 0 0 0 1.56-.64A2.05 2.05 0 0 0 9 9.74a2.17 2.17 0 0 0-2.21-2.19Zm4.66 7.73h6.09v-1.22h-6.1Zm6.09-5.54h-6.1v1.17h6.1ZM11.41 13h8v-1.18h-8Zm8.39-8.07H4.24a2.1 2.1 0 0 0-1.55.64 2.12 2.12 0 0 0-.64 1.56v9.57a2.08 2.08 0 0 0 .64 1.56 2.11 2.11 0 0 0 1.55.64H19.8a2.19 2.19 0 0 0 2.2-2.19V7.13a2.2 2.2 0 0 0-2.19-2.2ZM21 16.7a1.2 1.2 0 0 1-1.2 1.2H4.24a1.19 1.19 0 0 1-.84-.35 1.13 1.13 0 0 1-.35-.85v-.42h8.08v-1.09c0-.72-.54-1.26-1.63-1.63A9.15 9.15 0 0 0 6.76 13a6.63 6.63 0 0 0-2 .3 7.56 7.56 0 0 0-1.76.8v-7a1.15 1.15 0 0 1 .35-.84 1.13 1.13 0 0 1 .84-.35H19.8A1.2 1.2 0 0 1 21 7.13Zm-9.59-8h8V7.48h-8Z"
      data-name="Path 79"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont262);
export default ForwardRef;
