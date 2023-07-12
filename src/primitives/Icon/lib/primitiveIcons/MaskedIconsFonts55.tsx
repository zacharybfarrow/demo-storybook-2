import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts55 = (
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
    <path d="M12 2.77a9 9 0 0 1 3.65.75 9.29 9.29 0 0 1 3 2 9.45 9.45 0 0 1 2 3 9.35 9.35 0 0 1 0 7.29 9.24 9.24 0 0 1-5 5 9.26 9.26 0 0 1-7.3 0 9.24 9.24 0 0 1-5-5 9.35 9.35 0 0 1 0-7.29 9.45 9.45 0 0 1 2-3 9.29 9.29 0 0 1 3-2A9 9 0 0 1 12 2.77Zm6.79 6V7.48h-7.34l-2.2 6.43-1.73-3.62H5.21v1.32h1.63l2.48 5.23 2.86-8Zm-3.21 4.27.09-.13.27-.43c.1-.13.21-.26.32-.38a.46.46 0 0 1 .17-.14.66.66 0 0 1 .21-.08h.24l.85-.94-.3-.14-.24-.07a1.26 1.26 0 0 0-.27 0 1 1 0 0 0-.52.14 1.34 1.34 0 0 0-.42.33 3.73 3.73 0 0 0-.41.47l-.36.54v-.05c-.06-.17-.13-.35-.21-.53a3.53 3.53 0 0 0-.28-.5.89.89 0 0 0-.29-.32.87.87 0 0 0-.41-.14.91.91 0 0 0-.42.14 1.12 1.12 0 0 0-.33.32 1.36 1.36 0 0 0-.25.36 1.16 1.16 0 0 0-.12.45.51.51 0 0 0 0 .13.3.3 0 0 0 .07.11l.17.14.24.08.09-.24c0-.06 0-.12.07-.19a.87.87 0 0 1 .11-.18l.09-.07.13.19a1 1 0 0 1 .11.21l.2.5.17.44.11.29-.24.4a3.11 3.11 0 0 1-.25.38 3.45 3.45 0 0 1-.3.34.61.61 0 0 1-.17.15.65.65 0 0 1-.21.07l-.15-.06-.14-.19-.9.92.22.18a.92.92 0 0 0 .3.14 1.12 1.12 0 0 0 .35.06 1.4 1.4 0 0 0 .57-.13 1.64 1.64 0 0 0 .44-.33 5.59 5.59 0 0 0 .45-.52 3.6 3.6 0 0 0 .38-.6c.08.19.15.37.23.55a4.91 4.91 0 0 0 .28.5.85.85 0 0 0 .29.33.94.94 0 0 0 .43.16 1.25 1.25 0 0 0 .44-.13 1.49 1.49 0 0 0 .33-.27 1.14 1.14 0 0 0 .3-.32.84.84 0 0 0 .14-.42.37.37 0 0 0-.06-.21.45.45 0 0 0-.16-.15l-.26-.17-.11.28a.87.87 0 0 1-.07.17l-.09.14-.15.07a1.16 1.16 0 0 1-.16-.21c-.06-.08-.1-.17-.15-.25v.06l-.23-.55c-.08-.19-.15-.39-.23-.59Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts55);
export default ForwardRef;
