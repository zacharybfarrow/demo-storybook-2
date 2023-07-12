import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont58 = (
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
    id="E1X_ico_font-58_svg__Layer_1"
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
      <clipPath id="E1X_ico_font-58_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-58_svg__cls-2{clip-path:url(#E1X_ico_font-58_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-58_svg__ico_flag_0"
      className="E1X_ico_font-58_svg__cls-2"
    >
      <path
        d="M12 3.2a9.48 9.48 0 0 0-5-.39l-.65.13v-.29a.65.65 0 1 0-1.3 0v18.7a.65.65 0 1 0 1.3 0v-9l.91-.17a8.12 8.12 0 0 1 4.33.33 9.13 9.13 0 0 0 3.22.56 8.86 8.86 0 0 0 2.19-.24l1.5-.37a.65.65 0 0 0 .5-.63V3.72a.65.65 0 0 0-.26-.52.66.66 0 0 0-.56-.11l-1.5.37A7.88 7.88 0 0 1 12 3.2m5 1.52.69-.17v6.75l-1 .26A8 8 0 0 1 12 11.3a9.66 9.66 0 0 0-3.22-.57 10.36 10.36 0 0 0-1.83.17l-.7.1V4.26l.91-.17a8.12 8.12 0 0 1 4.33.33 9.49 9.49 0 0 0 5.5.28"
        className="E1X_ico_font-58_svg__cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont58);
export default ForwardRef;
