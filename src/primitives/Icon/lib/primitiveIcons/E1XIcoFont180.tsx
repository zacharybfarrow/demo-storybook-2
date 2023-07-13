import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont180 = (
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
    <path d="M6 7.7a1.9 1.9 0 1 0-1.9-1.9A1.9 1.9 0 0 0 6 7.7Zm10.8-1.2a5.62 5.62 0 0 0-5.74 5.5 5.62 5.62 0 0 0 5.74 5.5 5.61 5.61 0 0 0 5.73-5.5 5.61 5.61 0 0 0-5.73-5.5Zm3.5 8.29-.71.71-2.79-2.79L14 15.5l-.7-.71L16.09 12 13.3 9.21l.7-.71 2.8 2.79 2.79-2.79.71.71L17.5 12ZM7.2 8.9H4.7a1.22 1.22 0 0 0-1.2 1.2v5h1.2v5h2.5v-5h1.2v-5a1.15 1.15 0 0 0-1.2-1.2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont180);
export default ForwardRef;
