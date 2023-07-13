import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts70 = (
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
    <path d="M12 8.59h1.25V7.34H12Zm1.26 6.26h1.25V13.6h-1.25Zm-5-6.26H9.5V7.34H8.25Zm7.51 1.26v1.25H17V9.85Zm-1.25-5h1.25V3.59h-1.26Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts70);
export default ForwardRef;
