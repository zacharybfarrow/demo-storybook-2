import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont82 = (
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
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm3.85 11.09a9.93 9.93 0 0 0 .47 1.16 1.49 1.49 0 0 0 .33.49l.15-.07a.85.85 0 0 0 .18-.33l.11-.3.27.18a.48.48 0 0 1 .25.39 1.16 1.16 0 0 1-.47.79 1.31 1.31 0 0 1-.83.42 1 1 0 0 1-.77-.52 5.41 5.41 0 0 1-.54-1.16 5.44 5.44 0 0 1-.88 1.18 1.62 1.62 0 0 1-1.09.51 1.19 1.19 0 0 1-.72-.23l-.23-.17.94-1 .18.19.16.07a.65.65 0 0 0 .41-.22 3.71 3.71 0 0 0 .6-.8l.25-.42v-.06l-.11-.3-.18-.46-.23-.54a1.08 1.08 0 0 0-.25-.42l-.1.07a1.25 1.25 0 0 0-.19.41l-.08.26-.25-.1-.2-.13a.39.39 0 0 1-.1-.26 1.4 1.4 0 0 1 .41-.88 1.15 1.15 0 0 1 .81-.49 1 1 0 0 1 .76.51 5.28 5.28 0 0 1 .53 1.14 6.38 6.38 0 0 1 .83-1.08 1.44 1.44 0 0 1 1-.5 1.31 1.31 0 0 1 .53.13l.31.14-.91 1h-.26a.66.66 0 0 0-.39.24 4.51 4.51 0 0 0-.64.9l-.08.14Zm-3.67-4.68L9.15 17l-2.66-5.59H4.75V10h2.47l1.86 3.88L11.41 7h7.84v1.41Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont82);
export default ForwardRef;
