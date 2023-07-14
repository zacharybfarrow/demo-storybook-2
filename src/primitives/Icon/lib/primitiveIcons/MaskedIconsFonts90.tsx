import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts90 = (
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
    <path d="M13.88 3.88A1.88 1.88 0 1 1 12 2a1.88 1.88 0 0 1 1.88 1.88ZM13.25 7h-2.5A1.25 1.25 0 0 0 9.5 8.25v5h1.25v5h2.5v-5h1.25v-5A1.25 1.25 0 0 0 13.25 7Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts90);
export default ForwardRef;
