import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont229 = (
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
    <path d="M4.12 15.12a.63.63 0 0 0 .63-.62.63.63 0 1 0-.63.62Zm0 2.5a.63.63 0 0 0-.62.63.63.63 0 1 0 .62-.63Zm14.38-7.3V6.06C18.5 3.27 14 2 9.75 2S1 3.27 1 6.06v11.88C1 20.73 5.53 22 9.75 22a19.5 19.5 0 0 0 3-.22 6.5 6.5 0 1 0 5.75-11.46ZM9.75 3.25c4.14 0 7.5 1.26 7.5 2.81s-3.36 2.82-7.5 2.82-7.5-1.27-7.5-2.82 3.36-2.81 7.5-2.81Zm-7.5 10.94v-2.34c1.29 1.33 4.41 2 7.5 2h.82A6.53 6.53 0 0 0 10 16.5a3.91 3.91 0 0 0 0 .5h-.25c-4.14 0-7.5-1.25-7.5-2.79Zm7.5 6.56c-4.14 0-7.5-1.26-7.5-2.81V15.6c1.29 1.33 4.41 2 7.5 2h.35a6.51 6.51 0 0 0 1.42 3.05c-.52.07-1.16.1-1.77.1Zm1.15-7.54H9.75c-4.14 0-7.5-1.25-7.5-2.79V8.29c1.64 1.25 4.64 1.83 7.5 1.83s5.86-.58 7.5-1.83v1.76a6.3 6.3 0 0 0-.75-.05 6.49 6.49 0 0 0-5.6 3.21Zm9.28 7.57v.1c0 .01-.05 0-.09 0l-1-1a4.15 4.15 0 0 1-2.56.87 4.37 4.37 0 0 1-3-1.25 4.26 4.26 0 0 1-1.24-3h1.11a3.14 3.14 0 0 0 1.57 2.73 3.11 3.11 0 0 0 1.58.42 3 3 0 0 0 1.69-.65l-1-1a.11.11 0 0 1 0-.1.1.1 0 0 1 .09 0H20a.16.16 0 0 1 .13.06.13.13 0 0 1 .05.13Zm-.54-4.34a3.11 3.11 0 0 0-1.56-2.55 3.11 3.11 0 0 0-1.58-.42 3 3 0 0 0-1.75.56l1 1a.11.11 0 0 1 0 .1.1.1 0 0 1-.09 0H13a.16.16 0 0 1-.13-.06.13.13 0 0 1 0-.13V12.18c0-.01.05 0 .09 0l1 1a4.15 4.15 0 0 1 2.56-.87 4.37 4.37 0 0 1 3 1.25 4.33 4.33 0 0 1 .9 1.44 4.41 4.41 0 0 1 .32 1.47h-1.1ZM4.12 10.12a.63.63 0 0 0-.62.63.63.63 0 1 0 .62-.63Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont229);
export default ForwardRef;
