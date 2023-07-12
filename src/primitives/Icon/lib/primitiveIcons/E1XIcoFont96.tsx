import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont96 = (
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
    viewBox="0 0 41.48 16"
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
    <path d="M28.54 7.18a1.32 1.32 0 0 0-.39-.46 1.11 1.11 0 0 0-.65-.18 1.12 1.12 0 0 0-.66.18 1.32 1.32 0 0 0-.39.46 1.74 1.74 0 0 0-.11.32v.36h2.37a3.25 3.25 0 0 0 0-.36 1.22 1.22 0 0 0-.17-.32Z" />
    <path d="M0 0v16h41.43V0Zm10.5 4.51h-4v2.1h3.42V8.1H6.54v3.46H4.88V3h5.62Zm5.7 7.05h-1.52V11a2.22 2.22 0 0 1-.65.46 2.28 2.28 0 0 1-.89.14 2.15 2.15 0 0 1-1.59-.55 1.72 1.72 0 0 1-.39-.62 2.45 2.45 0 0 1-.16-.76 2 2 0 0 1 .13-.7 1.55 1.55 0 0 1 .4-.58 2.08 2.08 0 0 1 .7-.39 2.78 2.78 0 0 1 1-.14h1.45v-.32a1 1 0 0 0-.27-.75 1.38 1.38 0 0 0-.89-.23 1.47 1.47 0 0 0-.68.13 1.59 1.59 0 0 0-.52.41l-1-1a2.46 2.46 0 0 1 1-.7 3.56 3.56 0 0 1 1.28-.19c1.78 0 2.66.74 2.66 2.21Zm3.24 0h-1.56V5.49h1.56Zm0-7.32h-1.6V3h1.6Zm4.38 7.32H23a2.09 2.09 0 0 1-.83-.15 1.74 1.74 0 0 1-.57-.41 1.47 1.47 0 0 1-.32-.57 2.06 2.06 0 0 1-.11-.65V3h1.56v6.68a.66.66 0 0 0 .13.42.53.53 0 0 0 .43.14h.6Zm6.38-2.64h-3.89a1.43 1.43 0 0 0 .35 1 1.29 1.29 0 0 0 1 .39 1.83 1.83 0 0 0 .81-.15 2.55 2.55 0 0 0 .6-.44l.95.92a6.2 6.2 0 0 1-.48.43 2.47 2.47 0 0 1-.52.31 3 3 0 0 1-.62.19 4.34 4.34 0 0 1-.76.06 3.89 3.89 0 0 1-1.07-.15 2 2 0 0 1-.92-.51A2.51 2.51 0 0 1 25 10a4.17 4.17 0 0 1-.25-1.57A4.37 4.37 0 0 1 25 7.07a2.77 2.77 0 0 1 .56-1 2.32 2.32 0 0 1 .86-.62 3.08 3.08 0 0 1 2.26 0 2.37 2.37 0 0 1 .86.63 2.62 2.62 0 0 1 .53 1 3.89 3.89 0 0 1 .18 1.21Zm6.42 2.64h-1.5V11a2 2 0 0 1-.69.51 2.24 2.24 0 0 1-.86.15 2.45 2.45 0 0 1-.87-.15 1.63 1.63 0 0 1-.66-.42 1.54 1.54 0 0 1-.35-.52 3.28 3.28 0 0 1-.19-.63 3.93 3.93 0 0 1-.09-.71V7.68A3.94 3.94 0 0 1 31.5 7a2.9 2.9 0 0 1 .19-.63A1.69 1.69 0 0 1 32 5.8a1.87 1.87 0 0 1 .66-.42 2.58 2.58 0 0 1 .86-.14 2.38 2.38 0 0 1 .84.14 1.7 1.7 0 0 1 .68.48V3h1.56Z" />
    <path d="M34.89 7.16a.91.91 0 0 0-.32-.38 1.19 1.19 0 0 0-1.12 0 1 1 0 0 0-.32.38 2.16 2.16 0 0 0-.14.57v1.41a2.16 2.16 0 0 0 .14.57.86.86 0 0 0 .32.38 1.19 1.19 0 0 0 1.12 0 .8.8 0 0 0 .32-.38 1.59 1.59 0 0 0 .11-.57 5.23 5.23 0 0 0 0-.71 5.18 5.18 0 0 0 0-.7 1.59 1.59 0 0 0-.11-.57ZM12.53 9.64a.65.65 0 0 0 .23.52 1.09 1.09 0 0 0 .72.19 2.41 2.41 0 0 0 .5 0 .92.92 0 0 0 .42-.25.67.67 0 0 0 .19-.3 1.72 1.72 0 0 0 .05-.49v-.39h-1.18q-.93 0-.93.72Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont96);
export default ForwardRef;
