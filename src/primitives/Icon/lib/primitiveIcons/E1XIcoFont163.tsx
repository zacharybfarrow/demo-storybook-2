import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont163 = (
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
    <path d="M22 12a10 10 0 1 0-10 10 9 9 0 0 0 1.56-.14 5.43 5.43 0 0 0 2.74.74 5.5 5.5 0 0 0 5.5-5.5 5.37 5.37 0 0 0-.34-1.89A10.06 10.06 0 0 0 22 12Zm-3.27 6.8a1.25 1.25 0 0 1-.28.52 1.72 1.72 0 0 1-.51.39 4.24 4.24 0 0 1-.76.32v1h-.72v-.93A3.14 3.14 0 0 1 16 20a5.52 5.52 0 0 1-.54-.16 2.45 2.45 0 0 1-.49-.23 1.68 1.68 0 0 1-.38-.26l.63-1.18a2.2 2.2 0 0 0 1.42.65.82.82 0 0 0 .51-.16.48.48 0 0 0 .21-.4q0-.35-.51-.51l-.44-.14a4 4 0 0 1-.68-.27 1.83 1.83 0 0 1-.46-.34 1.5 1.5 0 0 1-.26-.44 1.66 1.66 0 0 1-.09-.57 2.31 2.31 0 0 1 .1-.64 1.77 1.77 0 0 1 .3-.56 1.65 1.65 0 0 1 .49-.41 1.85 1.85 0 0 1 .7-.21v-.94h.72v.94a3.26 3.26 0 0 1 1.41.45L18 15.75a1.64 1.64 0 0 0-1-.38.84.84 0 0 0-.49.14.38.38 0 0 0-.18.31.4.4 0 0 0 .15.29.94.94 0 0 0 .38.23l.46.15a2.71 2.71 0 0 1 1.12.65 1.49 1.49 0 0 1 .34 1 2.19 2.19 0 0 1-.05.66Zm2.06-4.87A5.5 5.5 0 1 0 12.4 21H12a9 9 0 1 1 9-9 9.43 9.43 0 0 1-.21 1.93ZM6 8.1h1.3v7.1h2.4v-9H6Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont163);
export default ForwardRef;