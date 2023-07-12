import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon84 = (
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
    <path d="M16.852 20.55v-.927H7.148v.927h9.704Zm3.758-17.1H3.39C2.624 3.45 2 4.074 2 4.84v12.466c0 .766.624 1.39 1.39 1.39h16.293v-.927H3.39a.464.464 0 0 1-.463-.463V4.84c0-.256.208-.464.463-.464h17.22c.255 0 .463.208.463.464v13.774c.54-.192.927-.705.927-1.31V4.842c0-.767-.624-1.39-1.39-1.39Z" />
    <path d="M10.632 13.376a.405.405 0 0 1-.405-.405V9.06a.405.405 0 0 1 .587-.362l3.894 1.955a.406.406 0 0 1 0 .725l-3.894 1.954a.405.405 0 0 1-.182.043Zm.406-3.657v2.595l2.584-1.298-2.584-1.297Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon84);
export default ForwardRef;
