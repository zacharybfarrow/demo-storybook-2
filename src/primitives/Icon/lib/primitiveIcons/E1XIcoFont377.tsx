import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont377 = (
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
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.263 13.38a1.655 1.655 0 0 1-.431-1.115v-1.722a6.087 6.087 0 0 0-3.333-5.456V4.59a2.568 2.568 0 0 0-2.083-2.556 2.5 2.5 0 0 0-2.917 2.466v.57a5.832 5.832 0 0 0-3.333 5.263v1.931c0 .413-.153.812-.431 1.117L4.23 15.048a2.167 2.167 0 0 0 1.606 3.619h2.829a3.333 3.333 0 0 0 6.666 0h2.83a2.167 2.167 0 0 0 1.605-3.62l-1.504-1.667Zm-5.086 6.465a1.667 1.667 0 0 1-2.845-1.178h3.333c0 .442-.175.866-.488 1.178Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont377);
export default ForwardRef;
