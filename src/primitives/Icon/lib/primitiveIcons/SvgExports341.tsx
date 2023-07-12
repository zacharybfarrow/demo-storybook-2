import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports341 = (
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
    <path d="m14.4 6.208-.113 2.193-.07 1.383 1.382-.071 2.193-.112-1.63 1.471-1.027.928 1.027.928 1.63 1.471-2.193-.112-1.382-.07.07 1.382.112 2.193-1.471-1.63L12 15.135l-.928 1.027-1.471 1.63.112-2.193.07-1.383-1.382.071-2.193.112 1.63-1.471L8.865 12l-1.027-.928-1.63-1.471 2.193.112 1.382.07-.07-1.382L9.6 6.208l1.471 1.63L12 8.865l.928-1.027 1.471-1.63m1.428-3.447L12 7 8.173 2.761l.291 5.703-5.703-.29L7 12l-4.239 3.827 5.703-.291-.29 5.703L12 17l3.827 4.239-.291-5.703 5.703.29L17 12l4.239-3.827-5.703.291Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports341);
export default ForwardRef;
