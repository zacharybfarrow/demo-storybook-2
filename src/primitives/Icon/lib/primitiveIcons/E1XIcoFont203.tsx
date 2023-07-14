import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont203 = (
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
    <path d="m16.76 9.66-5.41-2.22c-.36-.14-.57 0-.41.38s.47 1.14.9 2c0 0-3.14.93-3.81 3.44-.74 3.3 2.7 5.15 3 4.77s-1.73-1.72-.62-2.89a10.48 10.48 0 0 1 3-1.67c.41 1 .71 1.82 1 2.44.16.42.39.49.56.07l2.25-5.5c.1-.41 0-.64-.46-.82ZM18 3.6H3.6v16.8h16.8V6Zm1.2 15.6H18V12h-.66l-.54 1.31v5.89H7.2v-6h.08v-.11A9.92 9.92 0 0 1 7.74 12H6v7.2H4.8V4.8h2.4v4.8h3.22l.39-.19-.44-1h-2V4.8h7.2v3.57l1.2.49V4.8h.7l1.7 1.7Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont203);
export default ForwardRef;
