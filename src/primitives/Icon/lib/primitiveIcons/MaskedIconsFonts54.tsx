import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts54 = (
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
    <path d="M21 8.58v6.57h-8.23V8.58ZM15.35 11h-2.08v1.65h2.08Zm0 2.07h-2.08v1.66h2.08Zm-2.07-2.48h2.07V9h-2.07ZM17.93 9h-2.07v1.66h2.07Zm0 2.07h-2.07v1.65h2.07Zm0 2.07h-2.07v1.66h2.07Zm.51-2.48h2.07V9h-2.07Zm2.08.41h-2.08v1.65h2.08Zm0 2.07h-2.08v1.66h2.08Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts54);
export default ForwardRef;
