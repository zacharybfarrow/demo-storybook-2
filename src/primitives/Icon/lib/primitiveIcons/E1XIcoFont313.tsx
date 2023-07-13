import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont313 = (
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
    <path d="m8 4.61-.07-.07-3.54 3.53.7.7L7.5 6.36v12.82h1V6.36l2.4 2.41.7-.7-3.54-3.53Zm6.91 7.85h-3.3v1h3.29Zm.72-2h-4v1h4Zm-4 5h1.66v-1h-1.68Zm0 4h1.33v-1h-1.35Zm6.8-6.46a4.5 4.5 0 1 0 4.5 4.5 4.51 4.51 0 0 0-4.5-4.5Zm2.63 6.6-.53.52-2.1-2.12-2.09 2.09-.53-.52 2.09-2.1-2.09-2.1.53-.53 2.09 2.1 2.1-2.1.53.53-2.06 2.1Zm-9.45-2.11H13v-1h-1.39Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont313);
export default ForwardRef;
