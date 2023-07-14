import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts138 = (
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
    <path d="M4.27 14.73Zm10.55-6.19 4.74.93.16-.79-5-1-2.48.88v1.82l-1.55.29-1.5.33-1.88-.46v-5h-.8v4.82l-2.26-.57-.19.78 2.45.6v3.32l-2-.53-.2.77 2.24.59v3h.8v-2.8l1.81.48 3.12-.55v2.86h.8v-3l1.78-.31-.13-.79-1.65.3v-3.44l1.64-.31 2.19.31v7.44h.8v-8.13l-3-.43-1.62.31V9.15Zm-2.54 6.12-3.08.54-1.89-.5v-3.34l1.86.46 1.71-.34 1.4-.26Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts138);
export default ForwardRef;
