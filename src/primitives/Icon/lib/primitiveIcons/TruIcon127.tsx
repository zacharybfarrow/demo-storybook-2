import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon127 = (
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
    <path d="M19.181 13.294h.927v-2.588h-.927v2.588Zm-14.384-.831v-.926H3.87v.926h.926ZM20.61 4.377H3.39c-.766 0-1.39.624-1.39 1.39v12.465c0 .767.624 1.39 1.39 1.39h16.293v-.926H3.39a.464.464 0 0 1-.463-.464V5.768c0-.256.208-.464.463-.464h17.22c.255 0 .463.208.463.464v13.774c.54-.192.927-.706.927-1.31V5.768c0-.767-.624-1.39-1.39-1.39Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon127);
export default ForwardRef;
