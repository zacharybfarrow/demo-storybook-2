import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon27 = (
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
    <path d="M20.638 2.458H3.362C2.611 2.458 2 3.068 2 3.82v11.834c0 .751.611 1.362 1.362 1.362h3.077l.908-.908H3.362a.454.454 0 0 1-.454-.454V3.82c0-.25.204-.454.454-.454h17.276c.25 0 .454.204.454.454v11.834c0 .25-.204.454-.454.454h-10.8c-.365 0-.707.142-.964.4L4.481 20.9l.642.642 4.393-4.393a.45.45 0 0 1 .321-.133h10.801c.751 0 1.362-.61 1.362-1.362V3.82c0-.751-.611-1.362-1.362-1.362Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon27);
export default ForwardRef;
