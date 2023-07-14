import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts12 = (
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
    <path d="M20.75 8.56a4.37 4.37 0 0 0-4.37-4.37 4.21 4.21 0 0 0-.63.06 4.36 4.36 0 0 0-6.47.27 4.37 4.37 0 0 0-4.72 7.16 4.38 4.38 0 0 0 3.06 7.5 4.41 4.41 0 0 0 .74-.08 4.36 4.36 0 0 0 7.82-1.19h.2A4.37 4.37 0 0 0 20 11.06a4.39 4.39 0 0 0 .75-2.5Zm-8.13-4.37a3.13 3.13 0 0 1 3.07 2.5 4.38 4.38 0 0 0-6.13 0 3.13 3.13 0 0 1 3.06-2.5Zm0 2.5a3.12 3.12 0 0 1 3.07 2.57 4.34 4.34 0 0 0-3.49 3.07H12a4.49 4.49 0 0 0-1 .14 3.12 3.12 0 0 1 1.66-5.76ZM4.5 8.56a3.09 3.09 0 0 1 4.1-2.95 4.2 4.2 0 0 0-.35 1.7 3.73 3.73 0 0 0 .07.69A4.37 4.37 0 0 0 5 10.28a3.06 3.06 0 0 1-.5-1.72Zm3.12 9.38a3.13 3.13 0 0 1-3.12-3.13 3 3 0 0 1 .23-1.16 4.35 4.35 0 0 0 2.91 2.84v.2a4.59 4.59 0 0 0 .2 1.23Zm.26-2.68a3.11 3.11 0 0 1 .43-6 3.68 3.68 0 0 0-.06.57A4.35 4.35 0 0 0 9.65 13a4.36 4.36 0 0 0-1.77 2.26ZM12 19.81a3.13 3.13 0 0 1 0-6.25 4.36 4.36 0 0 0 3 4.12 3.13 3.13 0 0 1-3 2.13Zm4.38-3.12a3.13 3.13 0 1 1 3.12-3.13 3.13 3.13 0 0 1-3.12 3.13Zm2.68-6.56a4.38 4.38 0 0 0-2.12-.89 5.12 5.12 0 0 0-.14-.68 4.12 4.12 0 0 0-.23-3.1 3.12 3.12 0 0 1 2.93 3.1 3.08 3.08 0 0 1-.44 1.57Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts12);
export default ForwardRef;
