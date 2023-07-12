import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont146 = (
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
    <path d="M14.45 17Zm.5-8.5ZM12 11Zm4.15-2.47Zm4.48-2.67h-9.8l-2.91 8.6-2.37-4.9H2.47v1.7h2.17L8 18.19l3.75-10.68h8.84Zm-1.53 7.19a.3.3 0 0 0 0-.6.3.3 0 0 0 0 .6Zm-8.1-.63Zm8.08 2.44a.31.31 0 0 0 0-.61.31.31 0 0 0 0 .61ZM16.4 8.54c-2 0-4.22.61-4.22 2v5.72c0 1.34 2.19 2 4.22 2s4.21-.62 4.21-2v-5.77c0-1.34-2.19-1.95-4.21-1.95Zm3.6 7.67c0 .75-1.62 1.35-3.61 1.35s-3.62-.6-3.62-1.35v-1.12a5.63 5.63 0 0 0 3.62 1 5.58 5.58 0 0 0 3.61-1Zm0-1.81c0 .75-1.62 1.35-3.61 1.35s-3.62-.6-3.62-1.35v-1.12a5.63 5.63 0 0 0 3.62 1 5.58 5.58 0 0 0 3.61-1Zm0-1.8c0 .75-1.61 1.4-3.6 1.4s-3.62-.6-3.62-1.34v-1a6.41 6.41 0 0 0 3.62.89 6.4 6.4 0 0 0 3.6-.99Zm-3.61-.75c-2 0-3.62-.61-3.62-1.36s1.63-1.35 3.63-1.35 3.6.6 3.6 1.35-1.61 1.36-3.6 1.36Zm.22 5.15Zm-.5.54Zm3-.86a.3.3 0 1 0 0-.6.3.3 0 0 0 0 .6Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont146);
export default ForwardRef;
