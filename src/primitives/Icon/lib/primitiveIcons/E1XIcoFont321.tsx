import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont321 = (
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
    <path d="M16.514 2h-9.02a.993.993 0 0 0-.994.993V21a.993.993 0 0 0 .986 1H16.5a.993.993 0 0 0 1-.986V3a.993.993 0 0 0-.986-1Zm-5.515 1.002h2.003v.4H11Zm1.01 18.281a.993.993 0 0 1-.008-1.986h.008a.993.993 0 0 1 0 1.986Zm4.491-2.28H7.493v-15H16.5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont321);
export default ForwardRef;
