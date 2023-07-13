import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont177 = (
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
    <path d="M19.75 12.58a4.39 4.39 0 0 0-.79-2.5 4.37 4.37 0 0 0-3.58-6.87 4.21 4.21 0 0 0-.63.06 4.36 4.36 0 0 0-6.47.27 4.37 4.37 0 0 0-4.72 7.16 4.38 4.38 0 0 0 3.06 7.5 4.41 4.41 0 0 0 .74-.08 4.3 4.3 0 0 0 4.73 1.8A5.76 5.76 0 0 0 17.25 23 5.62 5.62 0 0 0 23 17.52a5.48 5.48 0 0 0-3.25-4.94Zm-1.25-5a3.08 3.08 0 0 1-.44 1.57 4.38 4.38 0 0 0-2.12-.89 5.12 5.12 0 0 0-.14-.68 4.3 4.3 0 0 0 .2-1.27 4.26 4.26 0 0 0-.43-1.85 3.12 3.12 0 0 1 2.93 3.1Zm-6.88-4.39a3.13 3.13 0 0 1 3.07 2.5 4.38 4.38 0 0 0-6.13 0 3.13 3.13 0 0 1 3.06-2.5ZM3.5 7.56a3.09 3.09 0 0 1 4.1-2.95 4.2 4.2 0 0 0-.35 1.7 3.73 3.73 0 0 0 .07.69A4.37 4.37 0 0 0 4 9.28a3.06 3.06 0 0 1-.5-1.72Zm3.12 9.38a3.13 3.13 0 0 1-3.12-3.13 3 3 0 0 1 .23-1.16 4.35 4.35 0 0 0 2.91 2.84v.2a4.59 4.59 0 0 0 .2 1.23Zm.26-2.68a3.11 3.11 0 0 1 .43-6 3.68 3.68 0 0 0-.06.57A4.35 4.35 0 0 0 8.65 12a4.36 4.36 0 0 0-1.77 2.26Zm4.78 4.47a2.84 2.84 0 0 1-.66.08 3.13 3.13 0 0 1 0-6.25 4.32 4.32 0 0 0 1 2.76 5.24 5.24 0 0 0-.48 2.2 5.34 5.34 0 0 0 .14 1.21Zm-.46-7.4H11a4.49 4.49 0 0 0-1 .14 3.12 3.12 0 1 1 4.73-3.19 4.34 4.34 0 0 0-3.53 3.05Zm1.05 1.23a3.12 3.12 0 0 1 6.21-.41 6 6 0 0 0-1.21-.15 5.82 5.82 0 0 0-4.54 2.15 3.05 3.05 0 0 1-.46-1.59ZM17.91 18v3.95h-1V18H13v-1h3.95v-4h1v4h3.95v1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont177);
export default ForwardRef;
