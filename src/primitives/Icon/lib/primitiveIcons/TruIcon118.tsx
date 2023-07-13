import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon118 = (
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
    <path d="M4.148 19.451a.4.4 0 0 1-.399-.399v-1.274a6.716 6.716 0 0 1 3.886-6.083 5.904 5.904 0 0 1-.854-.572 7.611 7.611 0 0 0-3.93 6.655v1.274c0 .715.582 1.297 1.297 1.297H12.2a5.24 5.24 0 0 1-.511-.898h-7.54ZM21.149 21.365l-1.623-1.623a3.872 3.872 0 0 0 .843-2.414 3.897 3.897 0 0 0-3.666-3.886 7.637 7.637 0 0 0-4.043-2.944 4.538 4.538 0 0 0 2.333-3.963A4.54 4.54 0 0 0 10.458 2C7.957 2 5.922 4.035 5.922 6.535s2.035 4.535 4.536 4.535c2.085 0 3.95.959 5.181 2.457a3.899 3.899 0 0 0-3.055 3.8 3.897 3.897 0 0 0 3.892 3.893c.912 0 1.75-.316 2.415-.843L20.514 22l.635-.635ZM6.82 6.535a3.641 3.641 0 0 1 3.637-3.637c2.005 0 3.636 1.632 3.636 3.637s-1.631 3.637-3.636 3.637A3.641 3.641 0 0 1 6.82 6.535Zm6.661 10.793a2.998 2.998 0 0 1 2.994-2.995 2.998 2.998 0 0 1 2.995 2.995 2.998 2.998 0 0 1-2.995 2.994 2.998 2.998 0 0 1-2.994-2.994Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon118);
export default ForwardRef;
