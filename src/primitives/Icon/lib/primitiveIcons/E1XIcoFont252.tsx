import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont252 = (
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
    <path d="m16.37 20.81 1.07-.31-.76-.75Zm.57-1.51.95.95 2.49-2.49-.95-1Zm3.52-3.23a.67.67 0 0 0-.48.2l-.19.18.95.95.19-.18a.67.67 0 0 0 .2-.48.66.66 0 0 0-.2-.48.72.72 0 0 0-.47-.19Zm-1.9-1.7a4.19 4.19 0 1 0 4.19 4.19 4.18 4.18 0 0 0-4.19-4.19Zm2.72 3.2-3.21 3.2a.44.44 0 0 1-.25.15l-1.75.51H16a.23.23 0 0 1-.17-.07.27.27 0 0 1-.07-.25l.51-1.76a1 1 0 0 1 .15-.25l3.2-3.2a1.17 1.17 0 0 1 1.66 1.66ZM22 2H2v5h20Zm-6.87 13A4.9 4.9 0 0 1 22 15V8H11v7Zm-.8 1H11v6h4a4.9 4.9 0 0 1-1.41-3.44 5 5 0 0 1 .74-2.56ZM2 22h8V8H2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont252);
export default ForwardRef;