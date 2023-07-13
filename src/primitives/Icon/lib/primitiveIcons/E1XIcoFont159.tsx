import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont159 = (
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
    <path d="M12 5.8a1.9 1.9 0 1 0-1.9-1.9A1.9 1.9 0 0 0 12 5.8Zm2.5 8.8v1.3c2.9.3 5 1.3 5 2.4 0 1.4-3.4 2.5-7.5 2.5s-7.5-1.1-7.5-2.5c0-1.1 2.1-2 5-2.4v-1.3c-3.4.4-6.2 1.5-6.2 3.6 0 2.6 4.4 3.8 8.8 3.8s8.8-1.2 8.8-3.8c-.1-2-3-3.2-6.4-3.6Zm-3.8 3.6h2.5v-5h1.2v-5A1.15 1.15 0 0 0 13.2 7h-2.5a1.22 1.22 0 0 0-1.2 1.2v5h1.2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont159);
export default ForwardRef;
