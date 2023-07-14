import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont268 = (
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
    <path d="M8.06 15.94h7.88V8.06H8.06Zm13.16-7.83a10.12 10.12 0 0 0-5.33-5.33 10.09 10.09 0 0 0-7.78 0 10.12 10.12 0 0 0-5.33 5.33 10.09 10.09 0 0 0 0 7.78 10.12 10.12 0 0 0 5.33 5.33 10.09 10.09 0 0 0 7.78 0 10.12 10.12 0 0 0 5.33-5.33 10.09 10.09 0 0 0 0-7.78Zm-1.85 7a7.94 7.94 0 0 1-4.26 4.26 8.11 8.11 0 0 1-6.22 0 7.94 7.94 0 0 1-4.26-4.26 8.11 8.11 0 0 1 0-6.22 7.94 7.94 0 0 1 4.26-4.26 8.11 8.11 0 0 1 6.22 0 7.94 7.94 0 0 1 4.26 4.26 8.11 8.11 0 0 1 0 6.22Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont268);
export default ForwardRef;
