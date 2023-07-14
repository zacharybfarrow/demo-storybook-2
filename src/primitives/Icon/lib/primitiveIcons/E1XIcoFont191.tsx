import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont191 = (
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
    <path d="M20.59 5.81h-9.8l-2.91 8.6-2.33-4.85H2.47v1.7h2.17L8 18.19l3.75-10.68h8.84Zm-.52 5.63h-1.28v-.23a1.14 1.14 0 0 0-1.14-1.14H16a1.14 1.14 0 0 0-1.14 1.14v.23H13.6a1.14 1.14 0 0 0-1.14 1.14v4.34a1.14 1.14 0 0 0 1.14 1.13h6.47a1.14 1.14 0 0 0 1.14-1.13v-4.34a1.14 1.14 0 0 0-1.14-1.14Zm-4.43-.23a.38.38 0 0 1 .38-.38h1.63a.38.38 0 0 1 .38.38v.23h-2.39Zm4.81 5.71a.38.38 0 0 1-.38.38H13.6a.38.38 0 0 1-.38-.38v-2.67H16a.93.93 0 0 0 1.71 0h2.76Zm-4-3.05a.39.39 0 1 1 .77 0 .39.39 0 1 1-.77 0Zm4-.38h-2.76a.93.93 0 0 0-1.71 0h-2.76v-.91a.38.38 0 0 1 .38-.38h6.47a.38.38 0 0 1 .38.38ZM11 12.42ZM12 11Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont191);
export default ForwardRef;
