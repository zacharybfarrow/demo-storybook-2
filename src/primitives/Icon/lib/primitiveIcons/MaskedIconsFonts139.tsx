import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts139 = (
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
    <path d="M18.62 7.42Zm-8 11-5.54-.6L1 20h21.69v-3.53l-6-1.08Zm-8.49-8.06h8.09V9.05H2.13Zm16.32 2.71a4.54 4.54 0 0 0 3.63-1.81l-3.8-2.77V4a4.54 4.54 0 0 0 .17 9.08Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts139);
export default ForwardRef;
