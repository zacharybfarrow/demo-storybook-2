import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont173 = (
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
    <path d="M20.32 12.88a1.66 1.66 0 0 0-.21-.51 3.41 3.41 0 0 0-.92-.85 6.86 6.86 0 0 0-6.31-9.58A6.88 6.88 0 0 0 6 8.81a7 7 0 0 0 .43 2.39l-4.81 2.88v3.48h2.5a2.5 2.5 0 1 0 5 0h2.4A5.63 5.63 0 0 0 17.25 23 5.62 5.62 0 0 0 23 17.52a5.46 5.46 0 0 0-2.68-4.64Zm-7.44-9.69a5.62 5.62 0 0 1 5.62 5.62 5.5 5.5 0 0 1-.41 2.07 12.77 12.77 0 0 0-1.31-.57 4.19 4.19 0 1 0-8.1-1.5 4 4 0 0 0 .21 1.25h-.56l-.78.47a5.4 5.4 0 0 1-.3-1.72 5.63 5.63 0 0 1 5.63-5.62Zm2.94 5.62a2.91 2.91 0 0 1-.29 1.25h-5.31a2.91 2.91 0 0 1-.29-1.25 2.95 2.95 0 0 1 5.89 0Zm-9.2 10a1.25 1.25 0 1 1 1.26-1.25 1.25 1.25 0 0 1-1.26 1.25Zm2.16-2.5a2.48 2.48 0 0 0-4.31 0H2.88v-1.52l5.79-3.48h7.23a16 16 0 0 1 1.66.71h-.36a5.7 5.7 0 0 0-5.59 4.29ZM17.91 18v3.95h-1V18H13v-1h3.95v-4h1v4h3.95v1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont173);
export default ForwardRef;
