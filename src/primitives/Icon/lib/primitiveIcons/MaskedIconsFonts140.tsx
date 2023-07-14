import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts140 = (
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
    <path
      d="m20.56 4.53-4.93 1.29-7.5-1.08-4.9 3.06.54 5.82-.34 6.28 4.91-2.62 7.52 2.4 4.91-2.61-.54-5.82Z"
      data-name="Path 1422"
      fill="#f1f1f1"
    />
    <path
      d="m20.56 4.53-4.93 1.29-7.5-1.08-4.9 3.06.54 5.82-.34 6.28 4.91-2.62 7.52 2.4 4.91-2.61-.54-5.82Z"
      data-name="Path 1422"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts140);
export default ForwardRef;
