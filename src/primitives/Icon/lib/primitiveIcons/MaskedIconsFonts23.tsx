import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts23 = (
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
    <path d="M21.66 6.88a.54.54 0 0 0-.57.11l-1.24 1.23-1.8-.22-.23-1.83 1.23-1.23a.5.5 0 0 0 .13-.54.52.52 0 0 0-.47-.4 3.69 3.69 0 0 0-2.83 1 3.64 3.64 0 0 0-1 3.33l-5.74 5.84A3.5 3.5 0 0 0 6 20.07a3.5 3.5 0 0 0 5.9-3.19l5.81-5.8A3.54 3.54 0 0 0 22 7.31a.51.51 0 0 0-.34-.43Zm-13 11.6-.88-.23-.24-.89.65-.65.88.24.24.89Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts23);
export default ForwardRef;
