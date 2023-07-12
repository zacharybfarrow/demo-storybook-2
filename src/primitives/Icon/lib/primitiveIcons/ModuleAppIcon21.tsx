import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgModuleAppIcon21 = (
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
    <defs>
      <clipPath id="module-app-icon-21_svg__a">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
    </defs>
    <path
      d="M16.34 19.62a2.85 2.85 0 1 1 2.85-2.84 2.84 2.84 0 0 1-2.85 2.84Zm3.77 0h-.51l-.16-.17a4 4 0 0 0 1-2.63 4.08 4.08 0 0 0-8.15-.11v.11a4.07 4.07 0 0 0 4.05 4.05 4 4 0 0 0 2.63-1l.17.16v.5l3.14 3.14.92-.92Z"
      style={{
        clipPath: "url(#module-app-icon-21_svg__a)",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgModuleAppIcon21);
export default ForwardRef;
