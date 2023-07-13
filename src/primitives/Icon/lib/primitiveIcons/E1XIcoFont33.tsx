import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont33 = (
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
      <clipPath id="E1X_ico_font-33_svg__a">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
    </defs>
    <path
      d="M7.88 6.55 6.37 7.86 10 12l-3.6 4.11 1.51 1.32L12.63 12Zm5 0-1.51 1.31L15 12l-3.6 4.11 1.51 1.32L17.63 12Z"
      style={{
        clipPath: "url(#E1X_ico_font-33_svg__a)",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont33);
export default ForwardRef;
