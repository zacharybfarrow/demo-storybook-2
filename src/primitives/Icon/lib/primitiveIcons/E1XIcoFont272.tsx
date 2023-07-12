import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont272 = (
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
      d="M4.58 6a1.49 1.49 0 1 0-1.49-1.46A1.49 1.49 0 0 0 4.58 6Zm3 2.23c0-1-2-1.49-3-1.49s-3 .5-3 1.49V9h5.97Zm-1.19 7.14v1.32H17v-1.32c0-1.76-3.52-2.65-5.29-2.65s-5.32.89-5.32 2.65Zm8-6.62a2.65 2.65 0 1 0-2.65 2.64 2.65 2.65 0 0 0 2.6-2.64ZM12 2a9.87 9.87 0 0 0-5.19 1.47 2.47 2.47 0 0 1 .25 1A8.9 8.9 0 0 1 12 3a9 9 0 1 1-9 9 8.76 8.76 0 0 1 .23-2h-1A10.2 10.2 0 0 0 2 12 10 10 0 1 0 12 2Z"
      style={{
        fill: "#231f20",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont272);
export default ForwardRef;
