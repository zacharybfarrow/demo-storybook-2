import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont293 = (
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
    <path d="M6.39 15.37v1.32H14a5 5 0 0 1 2.37-2.53 8.27 8.27 0 0 0-4.65-1.44c-1.8 0-5.33.89-5.33 2.65ZM12 3a9 9 0 0 1 8.73 11.15 5.18 5.18 0 0 1 .89.57A10.21 10.21 0 0 0 22 12 10 10 0 0 0 12 2a9.87 9.87 0 0 0-5.19 1.47 2.47 2.47 0 0 1 .25 1A8.9 8.9 0 0 1 12 3Zm2.34 5.75a2.65 2.65 0 1 0-2.65 2.64 2.65 2.65 0 0 0 2.65-2.64ZM12 21a9 9 0 0 1-9-9 8.76 8.76 0 0 1 .23-2h-1A10.2 10.2 0 0 0 2 12a10 10 0 0 0 12.7 9.62 5.1 5.1 0 0 1-.57-.88A9.41 9.41 0 0 1 12 21Zm6.54-6.63a4.19 4.19 0 1 0 4.19 4.19 4.19 4.19 0 0 0-4.19-4.19Zm2.63 6.28-.53.53-2.1-2.09-2.1 2.09-.52-.53L18 18.56l-2.09-2.1.52-.53 2.1 2.1 2.1-2.1.53.53-2.1 2.1ZM4.58 6a1.49 1.49 0 1 0-1.49-1.46A1.49 1.49 0 0 0 4.58 6Zm3 2.23c0-1-2-1.49-3-1.49s-3 .5-3 1.49V9h5.97Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont293);
export default ForwardRef;
