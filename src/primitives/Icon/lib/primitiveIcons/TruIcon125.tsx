import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon125 = (
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
    <path d="m18.973 13.665-1.141 1.141-1.141-1.14-.59.589 1.141 1.14-1.14 1.142.589.59 1.14-1.142 1.142 1.142.59-.59-1.142-1.141 1.142-1.141-.59-.59Zm1.334-1.62V5.686c0-.689-.56-1.25-1.25-1.25H3.25c-.689 0-1.25.561-1.25 1.25v10.776c0 .69.561 1.25 1.25 1.25h9.685a5.377 5.377 0 0 1-.314-.833h-9.37a.417.417 0 0 1-.417-.417V5.686c0-.23.187-.416.416-.416h15.807c.23 0 .416.187.416.416v5.88a4.144 4.144 0 0 0-1.641-.338c-2.298 0-4.168 1.87-4.168 4.168s1.87 4.168 4.168 4.168S22 17.694 22 15.396a4.164 4.164 0 0 0-1.693-3.351Zm-2.475 6.685c-1.839 0-3.335-1.495-3.335-3.334s1.496-3.335 3.335-3.335 3.334 1.496 3.334 3.335-1.495 3.334-3.334 3.334Zm-4.969-8.779h4.979v-.833h-4.979v.833ZM4.291 14.22v.607c0 .452.368.82.821.82h6.01c.453 0 .821-.368.821-.82v-.607a3.817 3.817 0 0 0-1.259-2.834c-.197.201-.419.38-.66.53a2.987 2.987 0 0 1 1.085 2.304v.594H5.125v-.594a2.996 2.996 0 0 1 2.992-2.992c1.303 0 2.363-1.06 2.363-2.363S9.42 6.502 8.117 6.502a2.366 2.366 0 0 0-2.363 2.363c0 .738.34 1.398.872 1.832a3.832 3.832 0 0 0-2.335 3.523Zm2.297-5.355c0-.844.686-1.53 1.53-1.53a1.53 1.53 0 0 1 0 3.059c-.844 0-1.53-.686-1.53-1.53Zm11.254-1.983h-4.979v.834h4.979v-.834Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon125);
export default ForwardRef;
