import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont193 = (
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
    <path d="M22 8.67a.32.32 0 0 0-.26-.13h-2.51v-1a.29.29 0 0 0-.29-.29h-6.77l-.91-1.82a.29.29 0 0 0-.26-.18H4.05a.3.3 0 0 0-.26.17l-1 2v11.03a.3.3 0 0 0 .29.3H19.02a.32.32 0 0 0 .31-.23L22.06 9a.37.37 0 0 0-.06-.33ZM3.37 7.84l.86-2h6.59l1.13 2h6.69v.71H6.41a.32.32 0 0 0-.31.22l-2.74 8Zm15.38 10.28-15.17-.06 3.06-8.87h14.67Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont193);
export default ForwardRef;