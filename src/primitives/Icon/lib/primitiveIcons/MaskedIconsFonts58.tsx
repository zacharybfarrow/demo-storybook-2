import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts58 = (
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
    <path d="M20.75 8.25V7h-2.49V3.25H17V7h-2.5V3.25h-1.24V7h-2.5V3.25H9.51V7H7V3.25H5.75V7H2v1.25h3.75V9.5H2v1.25h3.75V12H2v1.25h3.75v1.25H2v1.25h3.75V17H2v1.25h3.75v2.49H7v-2.48h2.51v2.49h1.25v-2.49h2.5v2.49h1.25v-2.49H17v2.49h1.25v-2.49h2.49V17h-2.48v-1.25h2.49V14.5h-2.49v-1.25h2.49V12h-2.49v-1.25h2.49V9.5h-2.49V8.25ZM9.51 17H7v-1.25h2.51Zm0-2.51H7v-1.24h2.51Zm0-2.5H7v-1.24h2.51Zm0-2.5H7V8.25h2.51ZM13.26 17h-2.5v-1.25h2.5Zm0-2.51h-2.5v-1.24h2.5Zm0-2.5h-2.5v-1.24h2.5Zm0-2.5h-2.5V8.25h2.5ZM17 17h-2.5v-1.25H17Zm0-2.51h-2.5v-1.24H17ZM17 12h-2.5v-1.25H17Zm0-2.5h-2.5V8.25H17Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts58);
export default ForwardRef;
