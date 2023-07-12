import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont171 = (
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
    <path d="M17.9 11.25a1 1 0 0 1 0-.25 5.42 5.42 0 0 1 1.4-3.49 3.62 3.62 0 0 0 .75-1.16A3.65 3.65 0 0 0 20.38 5v-.25a3.14 3.14 0 0 0-3.13-3.13H17a3.55 3.55 0 0 0-1.34.32 3.56 3.56 0 0 0-1.17.75l-.19.16a5.59 5.59 0 0 1-.73.5 4.94 4.94 0 0 1-2.57.77A5.42 5.42 0 0 1 7.51 2.7a3.56 3.56 0 0 0-1.17-.75A3.55 3.55 0 0 0 5 1.62h-.25a3.14 3.14 0 0 0-3.13 3.13V5a3.65 3.65 0 0 0 .32 1.35 3.62 3.62 0 0 0 .75 1.15l.16.19a5.59 5.59 0 0 1 .5.73A4.94 4.94 0 0 1 4.12 11a5.42 5.42 0 0 1-1.42 3.49 3.56 3.56 0 0 0-.75 1.17A3.55 3.55 0 0 0 1.62 17v.24a3.14 3.14 0 0 0 3.13 3.13H5a3.55 3.55 0 0 0 1.34-.32 3.56 3.56 0 0 0 1.17-.75l.19-.16a5.59 5.59 0 0 1 .73-.5 5.24 5.24 0 0 1 2.24-.7A5.69 5.69 0 0 0 16.25 22 5.62 5.62 0 0 0 22 16.52a5.55 5.55 0 0 0-4.1-5.27Zm-7.37 5.41a6.56 6.56 0 0 0-2.69.86 6.27 6.27 0 0 0-1.22.9 2.56 2.56 0 0 1-.78.5 2.28 2.28 0 0 1-.85.2h-.24a1.86 1.86 0 0 1-1.87-1.87V17a2.28 2.28 0 0 1 .2-.85 2.56 2.56 0 0 1 .5-.78 6.68 6.68 0 0 0 .9-1.22 6.43 6.43 0 0 0 .9-3.15 6.43 6.43 0 0 0-.9-3.16 6.27 6.27 0 0 0-.9-1.22 2.56 2.56 0 0 1-.5-.78 2.28 2.28 0 0 1-.2-.84v-.25a1.87 1.87 0 0 1 1.87-1.87H5a2.28 2.28 0 0 1 .85.2 2.56 2.56 0 0 1 .78.5 6.27 6.27 0 0 0 1.22.9 6.43 6.43 0 0 0 3.16.9 6.43 6.43 0 0 0 3.16-.9 6.27 6.27 0 0 0 1.22-.9 2.56 2.56 0 0 1 .78-.5 2.28 2.28 0 0 1 .85-.2h.24a1.87 1.87 0 0 1 1.87 1.87V5a2.28 2.28 0 0 1-.2.85 2.56 2.56 0 0 1-.5.78 6.27 6.27 0 0 0-.9 1.22 6.43 6.43 0 0 0-.9 3.16h-.38a5.62 5.62 0 0 0-5.73 5.5c0 .06.01.11.01.15Zm6.38.32v3.95h-1V17H12v-1h3.95v-4h1v4h3.95v1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont171);
export default ForwardRef;