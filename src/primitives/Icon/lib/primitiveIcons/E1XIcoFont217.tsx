import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont217 = (
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
    <path
      d="M11.38 22v-2.52a7.53 7.53 0 0 1-6.85-6.85H2v-1.25h2.52a7.53 7.53 0 0 1 6.85-6.85V2h1.25v2.53a7.51 7.51 0 0 1 6.85 6.84H22v1.25h-2.53a7.51 7.51 0 0 1-6.85 6.85V22Zm2.12-8.5a7.87 7.87 0 0 1 1.64.47 4.67 4.67 0 0 1 1.33.77 1.52 1.52 0 0 1 .53 1 6.25 6.25 0 1 0-10 0 1.47 1.47 0 0 1 .53-1A4.58 4.58 0 0 1 8.87 14a8.43 8.43 0 0 1 1.65-.47 9.3 9.3 0 0 1 1.5-.15 8.27 8.27 0 0 1 1.48.12Zm-3.27-2.15a2.39 2.39 0 0 1-.73-1.77 2.49 2.49 0 0 1 2.5-2.5 2.49 2.49 0 0 1 2.5 2.5 2.51 2.51 0 0 1-2.5 2.5 2.39 2.39 0 0 1-1.77-.73Z"
      data-name="Union 4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont217);
export default ForwardRef;
