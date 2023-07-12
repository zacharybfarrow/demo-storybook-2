import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts152 = (
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
    <path
      d="M15.14 9.22H8.2a2.27 2.27 0 0 0-2.26 2.27v7.4a2.27 2.27 0 0 0 2.26 2.27h6.94a2.27 2.27 0 0 0 2.26-2.27v-7.4a2.27 2.27 0 0 0-2.26-2.27Zm-1.68 10.6-1.8-3.23-1.78 3.23H7.81l2.88-4.75L8 10.56h2.05l1.61 3 1.63-3h2l-2.69 4.51 2.89 4.75Z"
      style={{
        fill: "#231f20",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts152);
export default ForwardRef;
