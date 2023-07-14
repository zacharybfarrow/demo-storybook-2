import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts13 = (
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
    <path d="M8.32 8a3.73 3.73 0 0 1-.07-.68 4.2 4.2 0 0 1 .35-1.7 3.09 3.09 0 0 0-4.1 3 3.06 3.06 0 0 0 .5 1.66A4.37 4.37 0 0 1 8.32 8ZM11 12.45a4.49 4.49 0 0 1 1-.14h.2a4.34 4.34 0 0 1 3.49-3.07A3.12 3.12 0 1 0 11 12.45Zm5.8-3.89a5.12 5.12 0 0 1 .14.68 4.38 4.38 0 0 1 2.12.89 3.08 3.08 0 0 0 .44-1.57 3.12 3.12 0 0 0-2.93-3.1 4.12 4.12 0 0 1 .23 3.1Zm-1.11-1.87a3.13 3.13 0 0 0-6.13 0 4.38 4.38 0 0 1 6.13 0Zm.69 3.75a3.13 3.13 0 1 0 3.12 3.12 3.13 3.13 0 0 0-3.12-3.12ZM12 13.56a3.13 3.13 0 1 0 3 4.12 4.36 4.36 0 0 1-3-4.12Zm-4.36 2.93a4.35 4.35 0 0 1-2.91-2.84 3 3 0 0 0-.23 1.16 3.13 3.13 0 0 0 3.12 3.13h.2a4.59 4.59 0 0 1-.2-1.23c0-.09.02-.15.02-.22Zm2-3.48a4.35 4.35 0 0 1-1.4-3.2 3.68 3.68 0 0 1 .06-.57 3.11 3.11 0 0 0-.43 6A4.36 4.36 0 0 1 9.65 13Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts13);
export default ForwardRef;
