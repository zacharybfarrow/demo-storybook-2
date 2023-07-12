import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont220221 = (
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
    viewBox="0 0 25 24"
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
    <path d="m14 19.87 1.42-.42-1-1Zm5.67-7.76a8.05 8.05 0 0 0 .08-1.11A8.75 8.75 0 1 0 11 19.75h.6A5.79 5.79 0 0 0 16.25 22 5.62 5.62 0 0 0 22 16.52a5.41 5.41 0 0 0-2.33-4.41ZM3.5 11a7.5 7.5 0 0 1 15 0v.45a6.1 6.1 0 0 0-2.25-.45H16a5 5 0 1 0-5.45 5 5.44 5.44 0 0 0 0 .57 5.25 5.25 0 0 0 .39 2A7.52 7.52 0 0 1 3.5 11Zm7.34 3.73A3.74 3.74 0 1 1 14.75 11v.23a5.62 5.62 0 0 0-3.91 3.5Zm5.43 5.08a.66.66 0 0 1-.34.2l-2.33.68h-.09a.34.34 0 0 1-.24-.1.34.34 0 0 1-.09-.33l.69-2.34a.86.86 0 0 1 .2-.33l4.26-4.27a1.55 1.55 0 0 1 2.21 0 1.56 1.56 0 0 1 0 2.21Zm-1.51-2L16 19.12l3.32-3.32-1.26-1.27Zm4.68-4.31a.86.86 0 0 0-.63.27l-.25.24 1.26 1.27.26-.25a.88.88 0 0 0 .26-.64.9.9 0 0 0-.26-.64 1 1 0 0 0-.64-.21Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont220221);
export default ForwardRef;
