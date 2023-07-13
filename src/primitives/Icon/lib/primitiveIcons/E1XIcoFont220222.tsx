import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont220222 = (
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
    <path d="M19.75 12.17v-7l-3-3L14 3.57H9.75V2.32H6.37L2.25 6.43V18.2l1.62 1.62h2.86l3.6-1.2.83.41a5.74 5.74 0 0 0 5.09 3A5.62 5.62 0 0 0 22 16.52a5.4 5.4 0 0 0-2.25-4.35ZM3.5 7l3.38-3.43H8.5v6.57l-5 4Zm7 9.57a5.57 5.57 0 0 0 .07.83l-.17-.08-3.9 1.3H4.38l-.88-.89v-1.99l2.72-2.17h5.2a5.27 5.27 0 0 0-.9 2.95Zm.88-4.2h-3.6l2-1.58V4.82h4.52l2.2-1.12 2 2v.7ZM18.5 8v3.43a6 6 0 0 0-2.25-.43 5.82 5.82 0 0 0-1.62.23Zm-2.23 11.81a.66.66 0 0 1-.34.2l-2.33.68h-.09a.34.34 0 0 1-.24-.1.34.34 0 0 1-.09-.33l.69-2.34a.86.86 0 0 1 .2-.33l4.26-4.27a1.55 1.55 0 0 1 2.21 0 1.56 1.56 0 0 1 0 2.21Zm-2.27.06 1.42-.42-1-1Zm.76-2L16 19.12l3.32-3.32-1.26-1.27Zm4.68-4.31a.86.86 0 0 0-.63.27l-.25.24 1.26 1.27.26-.25a.88.88 0 0 0 .26-.64.9.9 0 0 0-.26-.64 1 1 0 0 0-.64-.27Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont220222);
export default ForwardRef;
