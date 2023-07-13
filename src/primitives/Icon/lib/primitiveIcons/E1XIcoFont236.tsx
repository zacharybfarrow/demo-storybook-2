import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont236 = (
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
    <path d="M20 16h-3.39l3.46-1.75a2 2 0 0 0 .93-2.68l-.9-1.79a2 2 0 0 0-1.79-1.1 1.89 1.89 0 0 0-.89.22l-3.9 2L16 7.31a2 2 0 0 0-.47-2.79L13.9 3.36A2 2 0 0 0 12.75 3a2 2 0 0 0-1.64.84L8 8.2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v18h18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5.61l-4 5.62Zm.63 12L11.9 4.39a1 1 0 0 1 .85-.39 1.09 1.09 0 0 1 .6.19L15 5.3a1 1 0 0 1 .25 1.45l-3.59 5-7.2 3.63a2 2 0 0 0-.68.58ZM9 21H4v-4h5Zm6 0h-5v-4h5Zm-.53-5h-9L17.8 9.76a.92.92 0 0 1 .46-.11 1 1 0 0 1 .93.57L20.1 12a1.05 1.05 0 0 1-.46 1.4ZM21 20a1 1 0 0 1-1 1h-4v-4h4a1 1 0 0 1 1 1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont236);
export default ForwardRef;
