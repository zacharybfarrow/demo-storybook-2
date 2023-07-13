import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont228 = (
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
    <path d="M4.12 11.38a.63.63 0 0 0 .63-.63.63.63 0 1 0-.63.63Zm0 6.24a.63.63 0 0 0-.62.63.63.63 0 1 0 .62-.63Zm14.38-7.3V6.06C18.5 3.27 14 2 9.75 2S1 3.27 1 6.06v11.88C1 20.73 5.53 22 9.75 22a19.5 19.5 0 0 0 3-.22 6.5 6.5 0 1 0 5.75-11.46ZM9.75 3.25c4.14 0 7.5 1.26 7.5 2.81s-3.36 2.82-7.5 2.82-7.5-1.27-7.5-2.82 3.36-2.81 7.5-2.81Zm-7.5 7.19V8.29c1.64 1.25 4.64 1.83 7.5 1.83s5.86-.58 7.5-1.83v1.76a6.3 6.3 0 0 0-.75-.05 6.49 6.49 0 0 0-5.6 3.21H9.75c-4.14 0-7.5-1.25-7.5-2.79Zm0 3.75v-2.34c1.29 1.33 4.41 2 7.5 2h.82A6.53 6.53 0 0 0 10 16.5a3.91 3.91 0 0 0 0 .5h-.25c-4.14 0-7.5-1.25-7.5-2.79Zm7.5 6.56c-4.14 0-7.5-1.26-7.5-2.81V15.6c1.29 1.33 4.41 2 7.5 2h.35a6.51 6.51 0 0 0 1.42 3.05c-.52.07-1.16.1-1.77.1Zm7.78-3.23v4h-2v-4h-4v-2h4v-4h2v4h4v2Zm-13.41-2.4a.63.63 0 0 0 .63-.62.63.63 0 1 0-.63.62Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont228);
export default ForwardRef;
