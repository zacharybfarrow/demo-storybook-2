import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont46 = (
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
    <path d="M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10Zm0-18.55A8.55 8.55 0 1 0 20.55 12 8.56 8.56 0 0 0 12 3.45Z" />
    <circle cx={12} cy={8.6} r={1.16} />
    <path d="M11.1 10.65h1.8v5.92h-1.8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont46);
export default ForwardRef;
