import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont128 = (
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
    <path
      d="M1.44 1.44h21.12v21.12H1.44z"
      style={{
        fill: "none",
      }}
    />
    <path
      d="M15.06 17.51a2.72 2.72 0 1 1 2.72-2.72 2.72 2.72 0 0 1-2.72 2.72m3.62 0h-.48l-.2-.17a3.86 3.86 0 0 0 1-2.55 3.91 3.91 0 1 0-1.37 3l.17.16v.48l3 3 .9-.9Z"
      style={{
        fillRule: "evenodd",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont128);
export default ForwardRef;
