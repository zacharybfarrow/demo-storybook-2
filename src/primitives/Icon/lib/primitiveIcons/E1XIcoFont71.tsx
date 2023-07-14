import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont71 = (
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
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    role="img"
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
      <clipPath id="clip-path">
        <path d="M0 0h24v24H0z" fill="none" />
      </clipPath>
      <style>{".cls-2{clip-path:url(#clip-path)}"}</style>
    </defs>
    <g id="ico_chart_3_0" className="cls-2">
      <path
        d="M20 9.66a2 2 0 0 0-2 2.42l-1.49 1a2 2 0 0 0-2.94-.51L10.94 10a2 2 0 1 0-3.28.27L4.84 13a2 2 0 1 0 .65.48l2.8-2.72a2 2 0 0 0 2.13-.18l2.68 2.56a2 2 0 0 0-.25 1 2 2 0 1 0 4 0 1.93 1.93 0 0 0 0-.3l1.53-1A2 2 0 1 0 20 9.66M4 16a1.21 1.21 0 1 1 1.21-1.21A1.21 1.21 0 0 1 4 16m5.21-5.83A1.21 1.21 0 1 1 10.42 9a1.21 1.21 0 0 1-1.21 1.21m5.64 5.11a1.21 1.21 0 1 1 1.21-1.21 1.21 1.21 0 0 1-1.21 1.21M20 12.87a1.21 1.21 0 1 1 1.21-1.21A1.21 1.21 0 0 1 20 12.87"
        className="cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont71);
export default ForwardRef;
