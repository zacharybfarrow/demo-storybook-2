import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont185 = (
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
    <path d="M12 14.19a1.64 1.64 0 1 0 1.64 1.64A1.64 1.64 0 0 0 12 14.19Zm0 2.18a.55.55 0 0 1-.55-.54.55.55 0 1 1 1.1 0 .55.55 0 0 1-.55.54Zm6.4-4.76-1.48-1.48V7.08a1.65 1.65 0 0 0-1.64-1.64.55.55 0 1 0 0 1.09.55.55 0 0 1 .55.55v3.28a.54.54 0 0 0 .16.39L17.24 12 16 13.25a.53.53 0 0 0-.16.39v3.28a.55.55 0 0 1-.55.55.55.55 0 1 0 0 1.09 1.65 1.65 0 0 0 1.64-1.64v-3.05l1.48-1.48a.56.56 0 0 0-.01-.78ZM8.17 10.36V7.08a.55.55 0 0 1 .55-.55.55.55 0 1 0 0-1.09 1.65 1.65 0 0 0-1.64 1.64v3.05L5.6 11.61a.56.56 0 0 0 0 .78l1.48 1.48v3.05a1.65 1.65 0 0 0 1.64 1.64.55.55 0 1 0 0-1.09.55.55 0 0 1-.55-.55v-3.28a.53.53 0 0 0-.17-.39L6.76 12 8 10.75a.54.54 0 0 0 .17-.39ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 19a9 9 0 1 1 9-9 9 9 0 0 1-9 9Zm0-10.64A1.64 1.64 0 1 0 13.64 12 1.65 1.65 0 0 0 12 10.36Zm0 2.19a.55.55 0 1 1 .55-.55.55.55 0 0 1-.55.55Zm0-6a1.64 1.64 0 1 0 1.64 1.64A1.65 1.65 0 0 0 12 6.53Zm0 2.19a.55.55 0 0 1-.55-.55.55.55 0 0 1 1.1 0 .55.55 0 0 1-.55.53Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont185);
export default ForwardRef;
