import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon29 = (
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
    <path d="M18.487 18.386c-3.521 3.572-9.292 3.612-12.863.091-3.571-3.521-3.612-9.292-.09-12.863a9.068 9.068 0 0 1 6.477-2.706c2.307 0 4.616.87 6.385 2.615a9.027 9.027 0 0 1 2.682 5.795h.912a9.93 9.93 0 0 0-2.956-6.442c-3.928-3.873-10.275-3.828-14.148.1-3.873 3.928-3.828 10.275.1 14.148A9.972 9.972 0 0 0 12.009 22c2.586 0 5.17-.993 7.125-2.976a9.928 9.928 0 0 0 2.855-6.342h-.91a9.026 9.026 0 0 1-2.592 5.704Zm-6.931-12.81V12c0 .25.203.454.454.454h8.004v-.908h-7.55v-5.97h-.908Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon29);
export default ForwardRef;
