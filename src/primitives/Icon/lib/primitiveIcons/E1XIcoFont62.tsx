import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont62 = (
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
    <g id="ico_flow_one_to_one_0" className="cls-2">
      <path
        d="M19.19 9.14a2.78 2.78 0 0 0-2.42 1.39H7.19a2.78 2.78 0 1 0-2.42 4.17 2.81 2.81 0 0 0 2.42-1.39h9.58a2.78 2.78 0 1 0 2.42-4.17M4.78 13.58a1.67 1.67 0 1 1 1.67-1.67 1.67 1.67 0 0 1-1.67 1.67m14.42 0a1.67 1.67 0 1 1 1.67-1.67 1.67 1.67 0 0 1-1.67 1.67"
        className="cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont62);
export default ForwardRef;
