import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont318 = (
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
    <path d="m2.75 3.5 6 7v10l5-3v-7l5.5-7ZM13 9.88l-.21.27v6.78l-3 1.8v-8.6l-.24-.28L4.92 4.5h12.27Zm3.38 10.89 1.06-.31-.75-.75Zm.57-1.51.94.95 2.49-2.49-.94-.95Zm1.61-4.94a4.2 4.2 0 1 0 4.19 4.19 4.2 4.2 0 0 0-4.23-4.19Zm2.72 3.21L18 20.73a.54.54 0 0 1-.25.15l-1.75.51a.23.23 0 0 1-.18-.08.25.25 0 0 1-.07-.25l.52-1.75a.64.64 0 0 1 .15-.25l3.19-3.2a1.17 1.17 0 0 1 1.66 1.66ZM20.42 16a.65.65 0 0 0-.48.2l-.18.18.94.95.2-.19a.69.69 0 0 0 0-1 .7.7 0 0 0-.48-.14Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont318);
export default ForwardRef;
