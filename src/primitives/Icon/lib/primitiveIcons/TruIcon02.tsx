import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon02 = (
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
    <path d="M16.462 5.5h-2.824V4.225a.503.503 0 0 0-.5-.5h-2.276a.503.503 0 0 0-.5.5V5.5H7.538A2.038 2.038 0 0 0 5.5 7.538v10.924c0 1.126.912 2.038 2.038 2.038h8.924a2.038 2.038 0 0 0 2.038-2.038V7.538A2.038 2.038 0 0 0 16.462 5.5Zm-5.1-.775h1.276v2.852h-1.276V4.725ZM17.5 18.462a1.04 1.04 0 0 1-1.038 1.038H7.538A1.04 1.04 0 0 1 6.5 18.462V7.538A1.04 1.04 0 0 1 7.538 6.5h2.824v1.577a.503.503 0 0 0 .5.5h2.276a.503.503 0 0 0 .5-.5V6.5h2.824A1.04 1.04 0 0 1 17.5 7.538v10.924Zm-4.02-4.349h-2.96a1.963 1.963 0 0 0-1.964 1.964v1.161a.375.375 0 1 0 .75 0v-1.161a1.215 1.215 0 0 1 1.214-1.214h2.96c.67.001 1.213.544 1.214 1.214v1.161a.375.375 0 1 0 .75 0v-1.161a1.963 1.963 0 0 0-1.964-1.964ZM12 13.655a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Zm0-3a1.127 1.127 0 0 1 1.125 1.125A1.127 1.127 0 0 1 12 12.905a1.127 1.127 0 0 1-1.125-1.125A1.127 1.127 0 0 1 12 10.655Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon02);
export default ForwardRef;
