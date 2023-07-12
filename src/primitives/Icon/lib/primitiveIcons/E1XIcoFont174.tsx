import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont174 = (
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
    <path d="m16.48 11 1-3.77L7.4 2.05 6.85 9.4H2.5V18h8.22a5.7 5.7 0 0 0 5.53 4A5.62 5.62 0 0 0 22 16.52 5.62 5.62 0 0 0 16.48 11Zm-6 5.49v.18H3.75v-6H8l.08-1.16L8.5 4 16 7.91l-.87 3.21a5.57 5.57 0 0 0-4.61 5.4Zm9.39 2.75-.7.71-2.8-2.8L13.62 20l-.71-.71 2.8-2.79-2.8-2.8.71-.7 2.79 2.79 2.8-2.79.7.7-2.79 2.8Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont174);
export default ForwardRef;
