import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon47 = (
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
    <path d="M19.498 10.058V9.48C19.498 5.356 16.142 2 12.017 2S4.536 5.356 4.536 9.481v.578a2.302 2.302 0 0 0-2.239 2.298 2.304 2.304 0 0 0 2.292 2.3 7.498 7.498 0 0 0 5.753 6.413c.176.54.683.93 1.28.93h.79c.742 0 1.346-.604 1.346-1.346 0-.743-.604-1.347-1.346-1.347h-.79c-.572 0-1.06.36-1.255.863-2.845-.735-4.953-3.32-4.953-6.39V9.48a6.61 6.61 0 0 1 6.603-6.603 6.61 6.61 0 0 1 6.603 6.603v1.014c0 .242.196.439.439.439h.342c.785 0 1.423.638 1.423 1.423 0 .752-.586 1.37-1.326 1.42V12.26h-.878v1.958c0 .242.196.44.439.44h.342a2.304 2.304 0 0 0 2.302-2.302c0-1.237-.98-2.249-2.205-2.3ZM4.536 13.777c-.756-.034-1.36-.657-1.36-1.42s.604-1.387 1.36-1.42v2.84Zm7.086 6.409h.79a.468.468 0 0 1 0 .936h-.79a.468.468 0 0 1 0-.936Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon47);
export default ForwardRef;
