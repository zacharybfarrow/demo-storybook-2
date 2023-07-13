import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon124 = (
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
    <path d="M20.684 14.319a4.48 4.48 0 0 0-4.596-1.09.471.471 0 0 1-.474-.121l-1.34-1.34 3.578-3.577 2.336-1.178a.48.48 0 0 0 .213-.214l1.19-2.385a.48.48 0 0 0-.091-.554L20.14 2.5a.48.48 0 0 0-.554-.09L17.201 3.6a.48.48 0 0 0-.214.212l-1.181 2.34-3.573 3.574-1.34-1.34a.47.47 0 0 1-.121-.474 4.48 4.48 0 0 0-1.09-4.596 4.525 4.525 0 0 0-4.695-1.058.48.48 0 0 0-.179.791l1.676 1.676a.48.48 0 0 1 0 .678l-1.08 1.081a.48.48 0 0 1-.679 0L3.05 4.808a.48.48 0 0 0-.79.179A4.524 4.524 0 0 0 3.315 9.68a4.48 4.48 0 0 0 4.596 1.09.47.47 0 0 1 .474.121l.985.986-6.397 6.305c-.372.365-.579.854-.581 1.376s.2 1.013.568 1.382c.378.377.875.566 1.373.566.492 0 .985-.184 1.361-.554l5.397-5.319-.678-.678-5.391 5.313a.985.985 0 0 1-1.383-.006c-.187-.187-.29-.435-.288-.7s.106-.51.295-.697l6.403-6.31 3.058 3.058a.47.47 0 0 1 .12.474 4.48 4.48 0 0 0 1.09 4.596 4.522 4.522 0 0 0 4.695 1.058.48.48 0 0 0 .179-.791l-1.676-1.676a.48.48 0 0 1 0-.678l1.08-1.081a.48.48 0 0 1 .679 0l1.676 1.676a.48.48 0 0 0 .79-.179 4.524 4.524 0 0 0-1.057-4.694ZM16.54 6.777a.482.482 0 0 0 .089-.123l1.144-2.267 1.933-.965.873.872-.965 1.934-2.261 1.141a.481.481 0 0 0-.124.09l-3.631 3.631-.686-.685 3.628-3.628Zm4.48 11.127-1.066-1.067a1.44 1.44 0 0 0-2.035 0l-1.08 1.081a1.44 1.44 0 0 0 0 2.035l1.066 1.066a3.562 3.562 0 0 1-2.907-1.013 3.526 3.526 0 0 1-.858-3.617 1.419 1.419 0 0 0-.353-1.453l-4.722-4.722a1.43 1.43 0 0 0-1.012-.424c-.147 0-.296.023-.44.07a3.526 3.526 0 0 1-3.618-.857 3.562 3.562 0 0 1-1.013-2.907l1.066 1.067a1.44 1.44 0 0 0 2.035 0l1.08-1.081a1.44 1.44 0 0 0 0-2.035L6.097 2.98a3.564 3.564 0 0 1 2.907 1.013 3.526 3.526 0 0 1 .858 3.617 1.419 1.419 0 0 0 .353 1.453l4.722 4.722a1.42 1.42 0 0 0 1.453.353 3.526 3.526 0 0 1 3.617.858 3.562 3.562 0 0 1 1.013 2.907Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon124);
export default ForwardRef;
