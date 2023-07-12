import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont274 = (
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
    <path d="M15.8 9.1c0-2.25-1.13-3.39-3.5-3.39-2.84 0-3.67 1.79-3.72 3.53h1.69c.08-.82.19-2.1 2-2.1S14.1 8.35 14.1 9.3v1.62a11.29 11.29 0 0 0-1.27 0c-3.19 0-4.69 1.67-4.69 3.9 0 1.69.84 3.51 3.18 3.51a2.84 2.84 0 0 0 2.88-1.6 7.4 7.4 0 0 0 .12 1.39h1.6c0-.38-.09-1.39-.09-2.15ZM14.11 13c0 2.56-.57 3.82-2.35 3.82a1.92 1.92 0 0 1-1.9-2.16c0-1.35.89-2.39 3.05-2.39a8.76 8.76 0 0 1 1.2.06ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm8.55 10A8.55 8.55 0 1 1 12 3.45 8.54 8.54 0 0 1 20.55 12Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont274);
export default ForwardRef;
