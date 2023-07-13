import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont20 = (
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
      <clipPath id="E1X_ico_font-20_svg__a">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
    </defs>
    <path
      d="M18.19 4.5 14 9.88l-.21.27v6.78l-3 1.8v-8.6l-.24-.28L5.92 4.5Zm2.06-1H3.75l6 7v10l5-3v-7Z"
      style={{
        clipPath: "url(#E1X_ico_font-20_svg__a)",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont20);
export default ForwardRef;
