import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon40 = (
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
    <path d="M20.663 5.22H3.337C2.6 5.22 2 5.82 2 6.556v10.886c0 .738.6 1.338 1.337 1.338h16.434v-.892H3.337a.446.446 0 0 1-.445-.446v-5.64h18.216v6.9c.519-.184.892-.679.892-1.26V6.557c0-.738-.6-1.338-1.337-1.338Zm.445 5.691H2.892V8.91h18.216v2.002Zm0-2.893H2.892V6.557c0-.246.2-.446.445-.446h17.326c.245 0 .445.2.445.446v1.46Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon40);
export default ForwardRef;
