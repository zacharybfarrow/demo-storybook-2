import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts97 = (
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
    <path d="M10.33 11.78a4.85 4.85 0 0 0 1-1.29 2.88 2.88 0 0 0 .32-1.37 3.23 3.23 0 0 0-.26-1.29 3.16 3.16 0 0 0-.73-1 3.47 3.47 0 0 0-1.11-.67 4 4 0 0 0-1.4-.24 3.8 3.8 0 0 0-1.41.25 3.23 3.23 0 0 0-1.11.72A3.29 3.29 0 0 0 4.91 8a3.89 3.89 0 0 0-.26 1.44h2.57a3.65 3.65 0 0 1 0-.38 1.17 1.17 0 0 1 .27-.79 1 1 0 0 1 .75-.31.94.94 0 0 1 .4.04.87.87 0 0 1 .36.27 1 1 0 0 1 .2.34 1.4 1.4 0 0 1 .07.4 2.31 2.31 0 0 1-.06.47 3.2 3.2 0 0 1-.31.72 7.73 7.73 0 0 1-.75 1.09c-.34.42-.8.94-1.39 1.56l-2.29 2.33h7.29v-2H8.83ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 19a9 9 0 1 1 9-9 9 9 0 0 1-9 9Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts97);
export default ForwardRef;
