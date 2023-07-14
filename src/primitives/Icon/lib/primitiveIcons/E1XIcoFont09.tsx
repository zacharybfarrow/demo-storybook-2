import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont09 = (
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
    <g id="ico_clear_1_24x24" className="cls-2">
      <path
        d="m15.5 14.79-.71.71L12 12.7l-2.8 2.8-.7-.71L11.3 12 8.5 9.2l.7-.7 2.8 2.8 2.79-2.8.71.7-2.8 2.8Z"
        className="cls-2"
        fillRule="evenodd"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont09);
export default ForwardRef;
