import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont72 = (
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
    <g id="ico_chart_4_0" className="cls-2">
      <path
        d="M2.91 17.91a.91.91 0 1 0 .91.91.91.91 0 0 0-.91-.91m3.64-1.82a.91.91 0 1 0 .91.91.91.91 0 0 0-.91-.91m10.91-10a.91.91 0 1 0-.91-.91.91.91 0 0 0 .91.91M6.09 11.55a1.36 1.36 0 1 0 1.36 1.36 1.36 1.36 0 0 0-1.36-1.36m11.36-1.82a2.73 2.73 0 1 0 2.73 2.73 2.73 2.73 0 0 0-2.73-2.73m-6.36 3.64a1.82 1.82 0 1 0 1.82 1.82 1.82 1.82 0 0 0-1.82-1.82m2.27-8.07a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25m7.27 1.25A1.36 1.36 0 1 0 22 7.91a1.37 1.37 0 0 0-1.36-1.36M12 9.73a.91.91 0 1 0 .91.91.91.91 0 0 0-.91-.91"
        className="cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont72);
export default ForwardRef;
