import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont32 = (
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
      <clipPath id="E1X_ico_font-32_svg__a">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
    </defs>
    <path
      d="m6.06 12.89-1.34-1.34-.53.53L6.06 14l3.38-3.37-.53-.63Zm0 4-1.34-1.34-.53.53L6.06 18l3.38-3.37-.53-.63Zm0-8L4.72 7.55l-.53.53L6.06 10l3.38-3.42L8.91 6ZM10.81 8v1h9V8Zm0 9h9v-1h-9Zm0-4h9v-1h-9Z"
      style={{
        clipPath: "url(#E1X_ico_font-32_svg__a)",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont32);
export default ForwardRef;
