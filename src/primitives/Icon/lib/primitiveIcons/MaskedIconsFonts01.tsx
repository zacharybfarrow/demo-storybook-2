import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts01 = (
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
    <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5Zm0 8.75A3.75 3.75 0 1 1 15.75 12 3.75 3.75 0 0 1 12 15.75Zm0-12.5A8.75 8.75 0 1 0 20.75 12 8.75 8.75 0 0 0 12 3.25Zm0 16.25a7.5 7.5 0 1 1 7.5-7.5 7.5 7.5 0 0 1-7.5 7.5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts01);
export default ForwardRef;
