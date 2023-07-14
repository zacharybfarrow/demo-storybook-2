import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports339 = (
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
    <path d="m15.45 6.023-.363 3.342-.098.91.837.369L18.902 12l-3.076 1.356-.837.37.098.91.364 3.341-2.713-1.986-.738-.54-.738.54-2.713 1.986.364-3.342.098-.91-.837-.369L5.098 12l3.076-1.356.837-.37-.098-.91-.364-3.341 2.713 1.986.738.54.738-.54 2.713-1.986M17 3.34 12 7 7 3.34l.67 6.16L2 12l5.67 2.5L7 20.66 12 17l5 3.66-.67-6.16L22 12l-5.67-2.5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports339);
export default ForwardRef;
