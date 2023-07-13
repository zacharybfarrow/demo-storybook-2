import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont178 = (
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
    <path d="M7.2 8.9H4.7a1.22 1.22 0 0 0-1.2 1.2v5h1.2v5h2.5v-5h1.2v-5a1.15 1.15 0 0 0-1.2-1.2ZM6 7.7a1.9 1.9 0 1 0-1.9-1.9A1.9 1.9 0 0 0 6 7.7ZM22.42 12a.5.5 0 0 0-.14-.27 9.87 9.87 0 0 0-1.41-1.33 9 9 0 0 0-3.68-1.87 5.91 5.91 0 0 0-2.37 0 7.28 7.28 0 0 0-2.07.72 11.07 11.07 0 0 0-2.76 2c-.15.14-.29.3-.43.46a.5.5 0 0 0 0 .68A9.87 9.87 0 0 0 11 13.67a9.06 9.06 0 0 0 3.68 1.87 5.91 5.91 0 0 0 2.37 0 7.28 7.28 0 0 0 2.07-.72 11.07 11.07 0 0 0 2.76-2 4.68 4.68 0 0 0 .43-.46.5.5 0 0 0 .14-.27V12Zm-6.5 2.52a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.48Zm0-3.33a.83.83 0 1 0 .83.83.83.83 0 0 0-.83-.85Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont178);
export default ForwardRef;
