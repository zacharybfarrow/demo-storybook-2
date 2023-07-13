import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts136 = (
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
    <path d="M12 4.53h-.06L1.69 10.47l10.34 6 10.28-5.93Zm-8.44 5.94L12 5.61l.65.38-8.44 4.86Zm1.05.61L13 6.23l1.2.69-8.38 4.85Zm1.61.92 8.42-4.85 1.2.69-8.41 4.86Zm1.61.93 8.42-4.85 1.2.69L9 13.63Zm1.61.93L17.86 9l1.21.69-8.42 4.85Zm1.61.93L19.47 10l1 .56-8.47 4.8Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts136);
export default ForwardRef;
