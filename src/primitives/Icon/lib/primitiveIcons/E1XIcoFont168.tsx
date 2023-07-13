import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont168 = (
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
    <path d="M19.75 12.17v-7l-3-3L14 3.57H9.75V2.32H6.37L2.25 6.43V18.2l1.62 1.62h2.86l3.6-1.2.83.41a5.74 5.74 0 0 0 5.09 3A5.62 5.62 0 0 0 22 16.52a5.4 5.4 0 0 0-2.25-4.35ZM3.5 7l3.38-3.43H8.5v6.57l-5 4Zm7 9.57a5.57 5.57 0 0 0 .07.83l-.17-.08-3.9 1.3H4.38l-.88-.89v-1.99l2.72-2.17h5.2a5.27 5.27 0 0 0-.9 2.95Zm.88-4.2h-3.6l2-1.58V4.82h4.52l2.2-1.12 2 2v.7ZM18.5 8v3.43a6 6 0 0 0-2.25-.43 5.82 5.82 0 0 0-1.62.23Zm1.41 11.24-.7.71-2.8-2.8L13.62 20l-.71-.71 2.8-2.79-2.8-2.8.71-.7 2.79 2.79 2.8-2.79.7.7-2.79 2.8Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont168);
export default ForwardRef;
