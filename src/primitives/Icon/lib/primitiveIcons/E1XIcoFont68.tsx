import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont68 = (
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
    <g id="ico_trash_delete_0" className="cls-2">
      <g className="cls-2">
        <path d="M20.71 4.58h-4.62V3.7a1.7 1.7 0 0 0-1.7-1.7H9.61a1.7 1.7 0 0 0-1.7 1.7v.87H3.29a.57.57 0 1 0 0 1.14h1.89V20a2.12 2.12 0 0 0 2.08 2h9.47a2.13 2.13 0 0 0 2.08-2.08V5.71h1.89a.57.57 0 1 0 0-1.14M9 3.7a.58.58 0 0 1 .57-.57h4.73a.58.58 0 0 1 .57.57v.87H9Zm8.64 16.17a1 1 0 0 1-.95 1H7.26a1 1 0 0 1-.95-.95V5.71h11.37Z" />
        <path d="M12 18a.58.58 0 0 0 .57-.57V9.08a.57.57 0 0 0-1.14 0v8.33A.56.56 0 0 0 12 18M14.88 18a.58.58 0 0 0 .57-.57V9.08a.57.57 0 0 0-1.14 0v8.33a.56.56 0 0 0 .57.57M9.12 18a.58.58 0 0 0 .57-.57V9.08a.57.57 0 0 0-1.14 0v8.33a.54.54 0 0 0 .57.57" />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont68);
export default ForwardRef;
