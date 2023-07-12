import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts42 = (
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
    <path d="M20.07 10.44h-1.28v-.23a1.14 1.14 0 0 0-1.14-1.14H16a1.14 1.14 0 0 0-1.14 1.14v.23H13.6a1.14 1.14 0 0 0-1.14 1.14v4.34a1.14 1.14 0 0 0 1.14 1.13h6.47a1.14 1.14 0 0 0 1.14-1.13v-4.34a1.14 1.14 0 0 0-1.14-1.14m-4.43-.23a.38.38 0 0 1 .36-.38h1.63a.38.38 0 0 1 .38.38v.23h-2.37Zm4.81 5.71a.38.38 0 0 1-.38.38H13.6a.38.38 0 0 1-.38-.38v-2.67H16a.93.93 0 0 0 1.71 0h2.76Zm-4-3.05a.39.39 0 1 1 .77 0 .39.39 0 1 1-.77 0m4-.38h-2.76a.93.93 0 0 0-1.71 0h-2.76v-.91a.38.38 0 0 1 .38-.38h6.47a.38.38 0 0 1 .38.38Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts42);
export default ForwardRef;
