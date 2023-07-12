import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts109 = (
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
    <path d="M1.5 6.26 4.38 17h2.67l-.33-1.3H5.34L3 6.91 10.5 3l.22 3 1.21-.63-.33-4.32Z" />
    <path d="m16.15 11.4-.55-7.35L5.5 9.26 8.38 20H20.5v-8.6Zm3.1 7.3H9.33L7 9.91 14.5 6l.41 5.46.09 1.19h4.26Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts109);
export default ForwardRef;
