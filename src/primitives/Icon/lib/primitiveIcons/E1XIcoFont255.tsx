import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont255 = (
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
    <path d="M10.41 17H8.89V7.2a2.81 2.81 0 0 0 1.38-2.42A2.78 2.78 0 1 0 6.11 7.2v9.74H4.58L7.5 22ZM9.16 4.78A1.67 1.67 0 1 1 7.5 3.11a1.67 1.67 0 0 1 1.66 1.67" />
    <path
      d="M13.59 7h1.52v9.8a2.81 2.81 0 0 0-1.38 2.42 2.78 2.78 0 1 0 4.16-2.42V7.06h1.53L16.5 2Zm1.25 12.19a1.67 1.67 0 1 1 1.66 1.67 1.67 1.67 0 0 1-1.66-1.67"
      data-name="ico_flow_one_to_one_0"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont255);
export default ForwardRef;
