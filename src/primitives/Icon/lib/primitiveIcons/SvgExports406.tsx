import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports406 = (
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
    role="img"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M23 12c0-4.555-2.783-8.472-6.738-10.14l-.406.965c3.578 1.51 6.096 5.054 6.096 9.175s-2.518 7.665-6.096 9.175l.406.965C20.217 20.472 23 16.555 23 12ZM2.048 12c0-4.121 2.518-7.665 6.096-9.175l-.406-.965C3.783 3.528 1 7.445 1 12s2.783 8.472 6.738 10.14l.406-.965C4.566 19.665 2.048 16.12 2.048 12Z" />
    <path d="M20.439 12c0-3.495-2.135-6.5-5.17-7.78l-.405.966C17.52 6.307 19.39 8.939 19.39 12s-1.87 5.693-4.527 6.814l.405.966c3.035-1.28 5.17-4.285 5.17-7.78ZM4.608 12c0-3.06 1.87-5.693 4.528-6.814L8.73 4.22C5.696 5.5 3.56 8.505 3.56 12s2.136 6.5 5.17 7.78l.406-.966A7.403 7.403 0 0 1 4.608 12Z" />
    <path d="M7.17 12c0-2 1.222-3.72 2.958-4.453l-.405-.966C7.609 7.473 6.122 9.566 6.122 12s1.487 4.527 3.6 5.419l.406-.966A4.838 4.838 0 0 1 7.17 12ZM17.878 12a5.887 5.887 0 0 0-3.6-5.419l-.407.966c1.737.732 2.96 2.453 2.96 4.453s-1.223 3.72-2.96 4.453l.406.966a5.887 5.887 0 0 0 3.601-5.42V12Z" />
    <path d="M15.317 12c0-1.374-.84-2.555-2.032-3.058l-.406.966c.816.344 1.39 1.152 1.39 2.092s-.574 1.748-1.39 2.092l.406.966A3.322 3.322 0 0 0 15.317 12ZM9.73 12c0-.94.574-1.748 1.39-2.092l-.405-.966C9.522 9.445 8.683 10.626 8.683 12s.839 2.555 2.032 3.058l.406-.965A2.273 2.273 0 0 1 9.73 12ZM12.757 12a.758.758 0 0 0-1.514 0 .758.758 0 0 0 1.514 0Zm-.764.722a.729.729 0 1 1 0-1.457.729.729 0 0 1 0 1.457Z" />
    <path d="M11.993 11.265a.729.729 0 1 0 0 1.457.729.729 0 0 0 0-1.457Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports406);
export default ForwardRef;
