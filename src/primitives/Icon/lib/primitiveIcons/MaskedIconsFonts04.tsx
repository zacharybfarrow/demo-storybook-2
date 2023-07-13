import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts04 = (
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
    <path d="M17.75 3.18 15 4.57h-4.25V3.32H7.37L3.25 7.43V19.2l1.62 1.62h2.86l3.6-1.2 2.4 1.2h1.54l5.48-2.74V6.18ZM4.5 8l3.38-3.43H9.5v6.57l-5 4ZM15 19.57h-1l-2.6-1.3-3.9 1.3H5.38l-.88-.89v-1.94l2.72-2.17h5.23L18.09 18Zm4.52-2.26h-.09l-5.73-3.45L19.5 9Zm0-9.91-7.1 5.92H8.78l2-1.58V5.82h4.52l2.2-1.12 2 2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts04);
export default ForwardRef;
