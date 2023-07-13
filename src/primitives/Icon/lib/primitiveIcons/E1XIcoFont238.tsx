import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont238 = (
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
    <path d="M21.66 13.59a5.26 5.26 0 1 0 0 7.44 5.27 5.27 0 0 0 0-7.44Zm-.14 6.5-.71.71L18 18l-2.8 2.79-.7-.71 2.79-2.79-2.79-2.79.7-.71 2.8 2.8 2.79-2.79.71.71-2.8 2.79Zm-8.64.91H10v-4h1.71a6.51 6.51 0 0 1 .13-1H5.42L17.8 9.76a1 1 0 0 1 .46-.11 1 1 0 0 1 .94.56l.57 1.15a5.86 5.86 0 0 1 1.33.64 2.46 2.46 0 0 0-.14-.38l-.91-1.79a2 2 0 0 0-1.79-1.1 1.89 1.89 0 0 0-.89.22l-3.9 2L16 7.31a2 2 0 0 0-.47-2.79L13.9 3.36A2 2 0 0 0 12.75 3a2 2 0 0 0-1.64.84L8 8.2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v18h11.78a5.7 5.7 0 0 1-.9-1ZM3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5.61l-4 5.62Zm.63 12L11.9 4.39a1 1 0 0 1 .85-.39 1.09 1.09 0 0 1 .6.19L15 5.3a1 1 0 0 1 .25 1.45l-3.59 5-7.2 3.63a2 2 0 0 0-.68.58ZM9 21H4v-4h5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont238);
export default ForwardRef;
