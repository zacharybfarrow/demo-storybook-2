import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont256 = (
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
    <path d="m15 2.25-6 1.4L2 2v8.49L3 10V3.31l5 1.18v3L9 7V4.65h.23L15 3.31v16h-.2L9 20.6v-3.17l-.66 1.33a1.29 1.29 0 0 1-.34.43v1.25l-5-1.18v-5.77l-1-.11v6.72l7 1.68 6-1.43L22 22V3.9Zm6 18.44-5-1.18V3.56l5 1.18ZM4.13 12.61l2 .23a.64.64 0 0 1 .53.53l.22 2 .11.95.22 2c0 .14.06.22.11.22s.1-.06.16-.17l2.77-5.59c.12-.24.31-.62.42-.86l2.77-5.59c.09-.17.06-.27 0-.27a.45.45 0 0 0-.17 0L7.61 8.82l-.85.43L1.16 12c-.23.11-.21.23.05.26l2 .23Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont256);
export default ForwardRef;
