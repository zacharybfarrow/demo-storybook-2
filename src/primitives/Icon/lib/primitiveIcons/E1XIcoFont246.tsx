import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont246 = (
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
    <path d="M4.19 18A1.2 1.2 0 0 1 3 16.81v-.42h8.12v-1.1c0-1.46-2.92-2.19-4.39-2.19A7.09 7.09 0 0 0 3 14.19v-7A1.2 1.2 0 0 1 4.19 6h15.62A1.2 1.2 0 0 1 21 7.19v7.11a5.18 5.18 0 0 1 1 .7V7.19A2.19 2.19 0 0 0 19.81 5H4.19A2.19 2.19 0 0 0 2 7.19v9.62A2.19 2.19 0 0 0 4.19 19h9.45v-.44a3.55 3.55 0 0 1 .06-.56Zm7.2-2.63h3.41a4.92 4.92 0 0 1 1.54-1.21h-4.95Zm8-3.47h-8v1.21h8Zm0-4.35h-8v1.21h8Zm-8 2.26V11h6.11V9.81Zm7.17 4.56a4.19 4.19 0 1 0 4.19 4.19 4.18 4.18 0 0 0-4.19-4.19Zm2.72 3.2-3.21 3.2a.44.44 0 0 1-.25.15l-1.75.51H16a.23.23 0 0 1-.17-.07.27.27 0 0 1-.07-.25l.51-1.76a1 1 0 0 1 .15-.25l3.2-3.2a1.17 1.17 0 0 1 1.66 1.66ZM4.54 9.81a2.2 2.2 0 1 0 2.19-2.2 2.19 2.19 0 0 0-2.19 2.2Zm15.92 6.26a.67.67 0 0 0-.48.2l-.19.18.95.95.19-.18a.67.67 0 0 0 .2-.48.66.66 0 0 0-.2-.48.72.72 0 0 0-.47-.19Zm-3.52 3.23.95.95 2.49-2.49-.95-1Zm-.57 1.51 1.07-.31-.76-.75Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont246);
export default ForwardRef;
