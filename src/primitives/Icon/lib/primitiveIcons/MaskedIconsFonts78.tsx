import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts78 = (
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
      d="M10.94 13.06a2.57 2.57 0 1 0-2.56-2.57 2.58 2.58 0 0 0 2.56 2.57Zm5.15 1.22-5 5a.54.54 0 0 1-.74 0l-3.27-3.43-3.57 3.57v2.43h18v-2.67Z"
      style={{
        fill: "#231f20",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts78);
export default ForwardRef;
