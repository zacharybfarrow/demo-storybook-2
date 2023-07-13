import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont13 = (
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
      <clipPath id="E1X_ico_font-13_svg__a">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
    </defs>
    <path
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 3a3.25 3.25 0 1 1-3.25 3.25A3.25 3.25 0 0 1 12 5Zm0 14a7 7 0 0 1-6.14-3.64c1.08-1.48 4.35-2.23 6.14-2.23s5.07.75 6.14 2.23A7 7 0 0 1 12 19Z"
      style={{
        clipPath: "url(#E1X_ico_font-13_svg__a)",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont13);
export default ForwardRef;
