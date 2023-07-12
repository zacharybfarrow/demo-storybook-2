import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont41 = (
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
    <path d="m16.5 10.28-1.06-1.06L12 12.66 8.56 9.22 7.5 10.28l4.5 4.5ZM12 22A10 10 0 1 0 2 12a10 10 0 0 0 10 10Zm0-19a9 9 0 1 1-9 9 9 9 0 0 1 9-9Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont41);
export default ForwardRef;
