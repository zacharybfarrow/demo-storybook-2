import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont202 = (
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
    <path d="M8.43 15.07a1.8 1.8 0 1 0 1.8 1.8 1.8 1.8 0 0 0-1.8-1.8Zm3.71-7.85v4.55l3.56 3.12 1-1.13-3-2.67V7.22Zm.7-4.28a8.11 8.11 0 0 0-8.11 8.11 7.53 7.53 0 0 0 .12 1.35 6.51 6.51 0 0 1 1.4-.78v-.57a6.61 6.61 0 1 1 9 6.14 1.81 1.81 0 0 1-.21.67 7 7 0 0 1-.45.74c-.09.14-.2.28-.31.43a8.11 8.11 0 0 0-1.44-16.09Zm.54 13a9.8 9.8 0 0 0-1-1.31 5.37 5.37 0 0 0-3.91-2 5.39 5.39 0 0 0-3.91 2 9.71 9.71 0 0 0-1 1.31c-.18.27-.3.48-.37.61a.56.56 0 0 0 0 .56c.07.13.19.34.37.61a9.71 9.71 0 0 0 1 1.31 5.39 5.39 0 0 0 3.91 2 5.37 5.37 0 0 0 3.91-2 9.8 9.8 0 0 0 1-1.31c.18-.27.3-.48.37-.61a.61.61 0 0 0 0-.56c-.07-.09-.19-.3-.37-.55Zm-1 1.12a9.64 9.64 0 0 1-.91 1.16 4.3 4.3 0 0 1-3 1.6 4.3 4.3 0 0 1-3-1.6 9.64 9.64 0 0 1-.91-1.16 2.22 2.22 0 0 1-.15-.23 2.22 2.22 0 0 1 .15-.23 9.64 9.64 0 0 1 .91-1.16 4.3 4.3 0 0 1 3-1.6 4.3 4.3 0 0 1 3 1.6 9.64 9.64 0 0 1 .91 1.16 2.22 2.22 0 0 1 .15.23 2.22 2.22 0 0 1-.15.27Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont202);
export default ForwardRef;
