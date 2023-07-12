import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont260 = (
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
    <path d="m16.33 20.77 1.06-.31-.75-.76ZM9.27 19.5V5.73h.2l5.28-1.18v10.79a5 5 0 0 1 .92-.86V4.71l4.58 1v8.19a4.65 4.65 0 0 1 .92.46V5l-6.42-1.43L9.27 4.8 2.83 3.35V19l6.44 1.45 4.4-1a4.63 4.63 0 0 1-.1-.92Zm-.94-.21-4.58-1V4.5l4.58 1Zm8.57 0 1 .94 2.48-2.49-.94-.94Zm1.61-4.94a4.19 4.19 0 1 0 4.19 4.19 4.19 4.19 0 0 0-4.19-4.22Zm2.72 3.2L18 20.72a.47.47 0 0 1-.25.15l-1.75.52a.26.26 0 0 1-.18-.07.26.26 0 0 1-.06-.25l.51-1.75a.61.61 0 0 1 .15-.26l3.19-3.2a1.17 1.17 0 0 1 1.66 1.66ZM20.41 16a.69.69 0 0 0-.48.2l-.18.19.95.94.19-.18a.69.69 0 0 0 .19-.48.71.71 0 0 0-.19-.48.75.75 0 0 0-.48-.19Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont260);
export default ForwardRef;
