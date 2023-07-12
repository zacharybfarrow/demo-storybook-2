import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont105 = (
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
    <path d="m19.81 4.2-1.19 1.2v.38l1.47-1.48Zm.59.24-1.78 1.78v.38l2-2Zm-1.78 3Zm.52-3.37-.52.53V5l.84-.85Zm1.78.68L18.62 7v.38l2.53-2.53a1.88 1.88 0 0 0-.23-.12Zm-.44 4.92 2.35-2.34-.09-.33-2.48 2.49Zm-1.42-1L22 5.69l-.18-.21-3 3ZM21 10l2-2c0-.11 0-.22-.06-.33l-2.21 2.17Zm-1-.69 2.6-2.61-.12-.26-2.7 2.71ZM19.53 9l2.8-2.79a1.88 1.88 0 0 0-.16-.23L19.31 8.8Zm1.86-3.88-2.77 2.74v.38l3-3Zm.77 5.8.13.1a4.49 4.49 0 0 0 .29-.53Zm-.26-.19.93-.93a3.88 3.88 0 0 0 .11-.49l-1.26 1.26Zm-11.23 7.71-5.54-.6L1 20h21.69v-3.53l-6-1.08ZM23 8.39l-1.79 1.8.22.16L23 8.78a1.93 1.93 0 0 0 0-.24ZM8.26 6.94H2.12v1.3h6.14Zm0 4.14H2.12v1.3h6.14Zm.56-6.17H2.13v1.31h6.69Zm-6.69 5.45h8.09V9.05H2.13Zm16.32 2.71a4.54 4.54 0 0 0 3.63-1.81l-3.8-2.77V4a4.54 4.54 0 0 0 .17 9.08Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont105);
export default ForwardRef;
