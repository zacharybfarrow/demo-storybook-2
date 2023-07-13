import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon136 = (
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
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20.89 12.336v-2.53c0-.808-.643-1.466-1.443-1.495v-.745c0-.825-.672-1.497-1.497-1.497H16.26V3.607c0-.825-.671-1.497-1.497-1.497H6.757c-.825 0-1.497.672-1.497 1.497v2.462H3.62A1.62 1.62 0 0 0 2 7.688v12.705c0 .825.671 1.497 1.497 1.497h15.896c.826 0 1.497-.672 1.497-1.497v-1.67h-.998v1.67a.5.5 0 0 1-.499.5H3.497a.5.5 0 0 1-.5-.5V9.183c.192.08.402.124.622.124h15.774a.5.5 0 0 1 .5.498v2.479h-2.465a2.472 2.472 0 0 0-2.47 2.469 2.472 2.472 0 0 0 2.47 2.47h3.075c.826 0 1.497-.672 1.497-1.498V13.78c0-.69-.472-1.273-1.11-1.444ZM5.26 8.31H3.62a.621.621 0 0 1 0-1.242H5.26V8.31Zm5.155 0H6.258V3.607a.5.5 0 0 1 .499-.5h3.658V8.31Zm2.185 0h-1.187V3.108H12.6v5.2Zm2.663 0h-1.666V3.108h1.167a.5.5 0 0 1 .5.499v4.702Zm3.186 0H16.26V7.067h1.689a.5.5 0 0 1 .499.5v.742Zm2.553 7.416a.5.5 0 0 1-.499.5h-3.075a1.473 1.473 0 0 1 0-2.943h3.075a.5.5 0 0 1 .5.498v1.945Zm-3.834-.474h.996v-.996h-.996v.996Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon136);
export default ForwardRef;
