import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont395 = (
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
    <path d="M14.568 12.735h2.66a10.69 10.69 0 0 1-3.307-3.384h2.012a10.552 10.552 0 0 1-3.88-6.652A6.543 6.543 0 0 1 11.953 2a10.016 10.016 0 0 1-3.887 7.37h2.019a10.86 10.86 0 0 1-3.313 3.365h2.66s-1.713 2.842-4.254 3.79c1.761.468 3.6.572 5.403.307V22h2.836v-5.149a13.42 13.42 0 0 0 5.403-.307c-2.535-.947-4.253-3.809-4.253-3.809Zm-3.241 8.494v-4.574c.235-.058.457-.16.653-.3l-.098-.098h.196l-.098.098c.198.14.42.241.654.3l.039 4.574h-1.346Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont395);
export default ForwardRef;
