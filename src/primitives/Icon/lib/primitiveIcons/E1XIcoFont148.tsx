import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont148 = (
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
    <path d="M15 17.52Zm1.16 0ZM14.45 17ZM12 11Zm2 4.55h.74l1.71-5.17h-.73Zm-3-3.13Zm.06 1.26 2.44 1.12V14l-1.44-.64 1.44-.64v-.82L11.08 13Zm5.69-1 1.45.64-1.43.68v.82l2.44-1.12V13l-2.44-1.12Zm3.27.88Zm-9.23-7.75-2.91 8.6-2.33-4.85H2.47v1.7h2.17L8 18.19l3.75-10.68h8.84v-1.7Zm5.32 2.67Zm-1.11 0Zm1.61.52Zm0 8Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont148);
export default ForwardRef;
