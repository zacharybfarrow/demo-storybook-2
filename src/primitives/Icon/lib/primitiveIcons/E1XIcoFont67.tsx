import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont67 = (
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
    <g id="ico_print_0" className="cls-2">
      <path
        d="M3.41 17.38h2.2V21h12.78v-3.62h2.19A1.42 1.42 0 0 0 22 16V9.08a1.42 1.42 0 0 0-1.42-1.42h-2.19V3H5.61v4.66h-2.2A1.42 1.42 0 0 0 2 9.08V16a1.42 1.42 0 0 0 1.41 1.41m-.47-8.3a.47.47 0 0 1 .47-.47h17.17a.47.47 0 0 1 .47.47v.47a.47.47 0 0 1-.47.47H3.41a.47.47 0 0 1-.47-.47ZM6.55 4h10.9v3.66H6.55Zm-3.14 7h17.17a1.07 1.07 0 0 0 .47-.09v5.07a.47.47 0 0 1-.47.47h-2.19V15.3h.68a.47.47 0 1 0 0-.94H4.92a.47.47 0 0 0 0 .94h.68v1.13H3.41a.47.47 0 0 1-.47-.43v-5.11a1.56 1.56 0 0 0 .47.07m3.14 4.34h10.9V20H6.55Z"
        className="cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont67);
export default ForwardRef;
