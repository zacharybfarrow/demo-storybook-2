import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon59 = (
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
    <path d="M20.663 6.431h-9.57a.447.447 0 0 1-.326-.142L9.042 4.434a1.342 1.342 0 0 0-.98-.427H3.338C2.6 4.007 2 4.607 2 5.345v13.31c0 .738.6 1.338 1.337 1.338h16.434V19.1H3.337a.446.446 0 0 1-.445-.446V5.345c0-.246.2-.446.445-.446h4.726c.123 0 .242.052.326.142l1.725 1.855c.252.271.61.427.98.427h9.569c.245 0 .445.2.445.446v12.146c.519-.185.892-.679.892-1.26V7.77c0-.738-.6-1.338-1.337-1.338Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon59);
export default ForwardRef;
