import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts47 = (
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
    <path d="m14.46 10.78-1.78 1.79 1.78 1.8-.55.55-2.34-2.35 2.34-2.34Zm3-2.49.73.25-2.88 8.32-.73-.26Zm.83 6.08 1.78-1.8-1.78-1.79.55-.55 2.35 2.34-2.35 2.35Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts47);
export default ForwardRef;
