import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts85 = (
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
    <path d="M17.78 13.24v.94a3.26 3.26 0 0 1 1.41.45l-.57 1.12a1.66 1.66 0 0 0-1-.38.84.84 0 0 0-.49.14.38.38 0 0 0-.18.31.42.42 0 0 0 .14.29 1.06 1.06 0 0 0 .39.23l.46.15a2.6 2.6 0 0 1 1.11.65 1.45 1.45 0 0 1 .35 1 2.19 2.19 0 0 1-.09.66 1.38 1.38 0 0 1-.28.52 1.72 1.72 0 0 1-.51.39 4.24 4.24 0 0 1-.76.32v1h-.72v-.93a3.14 3.14 0 0 1-.51 0 4.81 4.81 0 0 1-.54-.16 2.45 2.45 0 0 1-.49-.23 1.68 1.68 0 0 1-.38-.26l.63-1.18a2.2 2.2 0 0 0 1.42.65.79.79 0 0 0 .5-.16.46.46 0 0 0 .22-.4q0-.35-.51-.51l-.38-.23a3.7 3.7 0 0 1-.68-.27 1.83 1.83 0 0 1-.46-.34 1.31 1.31 0 0 1-.26-.44 1.66 1.66 0 0 1-.09-.57 2.31 2.31 0 0 1 .1-.64 1.59 1.59 0 0 1 .3-.56 1.65 1.65 0 0 1 .49-.41 1.85 1.85 0 0 1 .7-.21v-.94Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts85);
export default ForwardRef;
