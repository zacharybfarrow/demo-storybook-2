import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont102 = (
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
    <path d="M5.39 9.38h5c.1 0 .16 0 .18-.08s0-.11-.07-.17L8.7 7.28A5.64 5.64 0 0 1 12 6.22 6 6 0 0 1 15 7a5.84 5.84 0 0 1 2.16 2.17 5.7 5.7 0 0 1 .77 2.64H20a7.9 7.9 0 0 0-4.89-7A7.89 7.89 0 0 0 12 4.14a7.77 7.77 0 0 0-4.82 1.63L5.3 3.89c-.07-.07-.13-.09-.18-.07s-.07.08-.07.18v5a.33.33 0 0 0 .1.25.35.35 0 0 0 .24.13Zm13.22 5.24h-5c-.1 0-.16 0-.18.08s0 .11.07.17l1.84 1.85A5.64 5.64 0 0 1 12 17.78 6 6 0 0 1 9 17a5.84 5.84 0 0 1-2.16-2.17 5.76 5.76 0 0 1-.79-3H4A7.89 7.89 0 0 0 4.61 15a7.83 7.83 0 0 0 4.28 4.28 7.89 7.89 0 0 0 3.11.63 7.77 7.77 0 0 0 4.82-1.63l1.88 1.88c.07.07.13.09.18.07S19 20.1 19 20v-5a.33.33 0 0 0-.1-.25.35.35 0 0 0-.29-.13Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont102);
export default ForwardRef;
