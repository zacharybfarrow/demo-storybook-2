import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont240 = (
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
    <path d="M6.86 7A3.21 3.21 0 0 0 4 8.5v.08-1.33H1.85V17h2.31v-4.23a6.08 6.08 0 0 1 .32-2.37A1.87 1.87 0 0 1 6.2 9.14a1.56 1.56 0 0 1 1.3.5A2.21 2.21 0 0 1 7.84 11v6h2.31v-6.52A3.18 3.18 0 0 0 6.86 7Zm11.46-.58h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.44h-2.83v8.31h-3.4v1h3.4v6.7h2.83v.55a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.45h-1.83v-4.15h1.83v.7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.3h-1.83v-3.65h1.83v.35a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.65h-1.83V4.86h1.83v.56a1 1 0 0 0 1 1Zm0-3h2v2h-2Zm0 15h2v2h-2Zm0-5h2v2h-2Zm0-5h2v2h-2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont240);
export default ForwardRef;
