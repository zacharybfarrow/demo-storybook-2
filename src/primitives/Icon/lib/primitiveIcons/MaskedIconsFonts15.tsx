import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts15 = (
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
    <path d="M4.6 13.54a.6.6 0 0 0 .62.62.62.62 0 0 0 .61-.62v-.95H4.6Zm6.7 0a.62.62 0 0 0 .62.62.65.65 0 0 0 .62-.62v-.95H11.3Zm-1.69 0a.58.58 0 0 0 .62.62.62.62 0 0 0 .61-.62v-.95H9.61Zm-3.29 0a.62.62 0 0 0 .62.62.64.64 0 0 0 .62-.62v-.94H6.32Zm1.69 0a.62.62 0 0 0 .62.62.62.62 0 0 0 .62-.62v-.94H8Zm10.51-1v1a.69.69 0 0 0 .68.69.68.68 0 0 0 .69-.69v-1Zm-6.5-7a1.85 1.85 0 1 0 1.84 1.86A1.85 1.85 0 0 0 12 5.55Zm4.68 8.06a.69.69 0 0 0 .68.69.7.7 0 0 0 .62-.69v-1h-1.3Zm-1.85 0a.67.67 0 0 0 .65.72.69.69 0 0 0 .68-.69v-1h-1.33Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts15);
export default ForwardRef;
