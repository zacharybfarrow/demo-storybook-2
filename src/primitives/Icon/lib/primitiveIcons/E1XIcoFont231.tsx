import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont231 = (
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
    <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm7.46 3.25a7.5 7.5 0 0 0-6.71-6.71V2h-1.5v2.54a7.5 7.5 0 0 0-6.71 6.71H2v1.5h2.54a7.5 7.5 0 0 0 6.71 6.71V22h1.5v-2.54a7.5 7.5 0 0 0 6.71-6.71H22v-1.5ZM18 12.75a6 6 0 0 1-5.2 5.2 5.65 5.65 0 0 1-1.5 0 6 6 0 0 1-5.2-5.2A6.3 6.3 0 0 1 6 12a6.16 6.16 0 0 1 0-.75 6 6 0 0 1 5.2-5.2 5.65 5.65 0 0 1 1.5 0 6 6 0 0 1 5.2 5.2 6.16 6.16 0 0 1 .1.75 6.3 6.3 0 0 1 0 .75Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont231);
export default ForwardRef;
