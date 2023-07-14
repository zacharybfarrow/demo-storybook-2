import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont74 = (
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
    <path d="M22 12a3.55 3.55 0 0 0-.07-.72 5 5 0 0 0-8.41-2.85H5.57a3.57 3.57 0 1 0 0 7.14h7.95a5 5 0 0 0 8.41-2.85A3.55 3.55 0 0 0 22 12ZM3 12a2.57 2.57 0 0 1 2.57-2.57h7.17a4.85 4.85 0 0 0 0 5.14H5.57A2.57 2.57 0 0 1 3 12Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont74);
export default ForwardRef;
