import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont254 = (
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
    role="img"
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
    <path d="M4.39 19.5h9.82v.6a1.35 1.35 0 0 0 1.35 1.35h2.7a1.34 1.34 0 0 0 1.35-1.35v-2.7a1.34 1.34 0 0 0-1.35-1.35h-2.7a1.35 1.35 0 0 0-1.35 1.35v.75H5.74v-5.27h5.47v.65a1.35 1.35 0 0 0 1.35 1.35h2.7a1.34 1.34 0 0 0 1.35-1.35v-2.7a1.34 1.34 0 0 0-1.35-1.35h-2.7a1.36 1.36 0 0 0-1.35 1.35v.7H5.74V6.2h2.47v.4A1.35 1.35 0 0 0 9.56 8h2.7a1.34 1.34 0 0 0 1.35-1.4V3.9a1.34 1.34 0 0 0-1.35-1.35h-2.7A1.35 1.35 0 0 0 8.21 3.9v.95H4.39Zm11.17-2.1h2.7v2.7h-2.7Zm-6-13.5h2.7v2.7h-2.7Zm3 6.93h2.7v2.7h-2.7Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont254);
export default ForwardRef;
