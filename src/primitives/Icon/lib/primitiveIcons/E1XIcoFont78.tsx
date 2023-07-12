import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont78 = (
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
      d="M0 0h24v24H0z"
      style={{
        fill: "none",
      }}
    />
    <path d="M12.61 19.94V14H11.4v5.95L9.64 18.2l-.85.86 2.79 2.77a.59.59 0 0 0 .85 0L15.21 19l-.87-.85ZM11.4 4.06V10h1.21V4.06l1.74 1.75.86-.81-2.78-2.83A.57.57 0 0 0 12 2a.61.61 0 0 0-.43.17L8.79 5l.86.86Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont78);
export default ForwardRef;
