import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont39 = (
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
    <g id="ico_menu_more_horizontal" className="cls-2">
      <path
        d="M12 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2m6 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2M6 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2"
        className="cls-2"
        fillRule="evenodd"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont39);
export default ForwardRef;
