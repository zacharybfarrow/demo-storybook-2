import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports413 = (
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
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    role="img"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m14.121 12 6.708-6.708a1.5 1.5 0 1 0-2.121-2.121L12 9.879 5.292 3.17a1.5 1.5 0 1 0-2.121 2.121L9.879 12 3.17 18.708a1.5 1.5 0 1 0 2.121 2.121L12 14.121l6.708 6.708a1.5 1.5 0 0 0 2.121-2.121L14.121 12Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports413);
export default ForwardRef;
