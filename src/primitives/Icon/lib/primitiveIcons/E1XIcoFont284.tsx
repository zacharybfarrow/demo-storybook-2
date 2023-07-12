import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont284 = (
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
    <path d="M21.94 10.29h-2.1V5.75A1.72 1.72 0 0 0 18.13 4H2.67A1.72 1.72 0 0 0 1 5.75v9.89a1.72 1.72 0 0 0 1.72 1.72h5.75v1.76h-2v.8h7.93v-.8h-2v-1.77h4.29v1.52a.82.82 0 0 0 0 .22 1 1 0 0 0 1 .82H22.44l.08-.05.07-.05.06-.06.06-.06.06-.06.05-.07v-.05l-.23-.12.25.08v-.2a1.23 1.23 0 0 0 0-.19v-7.75a1.48 1.48 0 0 0 0-.21 1 1 0 0 0-.9-.83Zm-10.4 8.82H9.26v-1.76h2.28Zm5.08-2.56H2.68a.92.92 0 0 1-.92-.92v-.48h14.87Zm.43-6.06-.06.05-.07.08-.07.09v.06l-.05.1V11.04a1.1 1.1 0 0 0 0 .18v3H1.76V5.75a.92.92 0 0 1 .92-.92h15.45a.92.92 0 0 1 .92.92v4.54H17.13Zm5.13 8.38v.06h-4.6a.24.24 0 0 1-.15-.13.11.11 0 0 0 0-.05v-.13h4.76Zm0-.93h-4.76v-5.68h4.76Zm0-6.46h-4.76v-.16l-.25-.1.26.06v-.05a.27.27 0 0 1 .16-.1H21.99a.24.24 0 0 1 .16.18ZM12 15.51H8.84v.8H12Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont284);
export default ForwardRef;
