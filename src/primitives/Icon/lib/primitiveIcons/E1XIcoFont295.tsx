import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont295 = (
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
    <path d="M20.57 4h-2.63V2.91a1 1 0 0 0-2.05 0V4H8V2.91a1 1 0 0 0-2 0V4H3.43A1.4 1.4 0 0 0 2 5.45v15.24a1.4 1.4 0 0 0 1.43 1.42h17.14A1.4 1.4 0 0 0 22 20.69V5.45A1.4 1.4 0 0 0 20.57 4Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont295);
export default ForwardRef;
