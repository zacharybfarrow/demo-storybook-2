import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont401 = (
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
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.5 9.5h5v-5h-5v5Zm-2 12h9v-9h-9v9Zm1-8h7v7h-7v-7Zm-1-2h9v-9h-9v9Zm1-8h7v7h-7v-7Zm1 16h5v-5h-5v5Zm9 1h2.333v-2.333H13.5V20.5Zm-1-18v9h9v-9h-9Zm8 8h-7v-7h7v7Zm-1-6h-5v5h5v-5Zm-1.333 11.333H20.5V13.5h-2.333v2.333ZM13.5 13.5v2.333h2.333V13.5H13.5Zm2.333 4.667h2.334v-2.334h-2.334v2.334Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont401);
export default ForwardRef;
