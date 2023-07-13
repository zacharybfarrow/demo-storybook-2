import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont181 = (
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
    <path d="M7.2 8.9H4.7a1.22 1.22 0 0 0-1.2 1.2v5h1.2v5h2.5v-5h1.2v-5a1.15 1.15 0 0 0-1.2-1.2ZM6 7.7a1.9 1.9 0 1 0-1.9-1.9A1.9 1.9 0 0 0 6 7.7Zm14.69.41a5.63 5.63 0 0 0-8-.16 5.62 5.62 0 0 0 .17 7.94 5.61 5.61 0 0 0 7.94.16 5.61 5.61 0 0 0-.11-7.94ZM17.3 12.5v3.95h-1V12.5h-4v-1h4V7.55h1v4h3.95v1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont181);
export default ForwardRef;
