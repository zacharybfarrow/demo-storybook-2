import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont155 = (
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
    role="img"
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
    <path d="M14.54 3.17a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm0 5a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm-5.9 11.51 1.19.88 2.49-3.36a2 2 0 0 0-.36-3 2.06 2.06 0 0 0-2.05-.33h-.06l.51-.69-1.08-.8-3.73 5 1.19.88 1.62-2.18A3.74 3.74 0 0 1 9.43 15a1.19 1.19 0 0 1 1.37 0 1 1 0 0 1 .48.75 1.47 1.47 0 0 1-.35.84Zm12.93-2.14a3 3 0 0 0-3.32-.62l-2.9-2.63 2.39-2.82 3.15 3.44A.35.35 0 0 0 21 15v1a3.87 3.87 0 0 1 1 .62V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h11.23a4.36 4.36 0 0 1-.53-1H5a2 2 0 0 1-2-2v-.68L9.12 10l8.27 7.48-.06.05a3 3 0 1 0 4.24 0ZM9 8.53l-6 8.11V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8.54L17.71 10l-3.1 3.66Zm11.2 11.88v1.48h-1.5v-1.48h-1.47v-1.5h1.47v-1.47h1.5v1.47h1.48v1.5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont155);
export default ForwardRef;
