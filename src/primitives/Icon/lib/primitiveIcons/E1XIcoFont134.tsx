import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont134 = (
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
    <path d="M20.93 8.55c-.13.33-.31.28-.44-.05-.19-.48-.43-1.13-.74-1.88a7.8 7.8 0 0 0-2.32 1.29c-.85.9.69 1.93.48 2.23S15.06 9 15.63 6.46c.51-1.94 2.94-2.66 2.94-2.66-.33-.66-.52-1.14-.69-1.53s0-.41.31-.3l4.18 1.71c.35.15.43.32.3.63ZM21.29 14.67a.77.77 0 0 0-.21-.41 15.58 15.58 0 0 0-2.17-2 14 14 0 0 0-5.66-2.88 9.74 9.74 0 0 0-3.65 0 11.58 11.58 0 0 0-3.18 1.12 17.22 17.22 0 0 0-4.24 3.14c-.23.23-.46.47-.67.72a.76.76 0 0 0 0 1.05 14 14 0 0 0 2.17 2 13.85 13.85 0 0 0 5.66 2.88 9.34 9.34 0 0 0 3.65.05 11.58 11.58 0 0 0 3.18-1.12A17.35 17.35 0 0 0 20.4 16c.23-.23.46-.46.67-.71a.81.81 0 0 0 .21-.41v-.12m-10 3.89a3.85 3.85 0 1 1 3.85-3.85 3.85 3.85 0 0 1-3.85 3.85m0-5.12a1.28 1.28 0 1 0 1.27 1.27 1.27 1.27 0 0 0-1.27-1.27" />
    <path
      d="M0 0h24v24H0z"
      style={{
        fill: "none",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont134);
export default ForwardRef;
