import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont49 = (
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
    <g id="ico_temporary_icon" className="cls-2">
      <path
        d="M11 7a1 1 0 0 0 1 1 1 1 0 0 0 1-1V3a1 1 0 0 0-1-1 1 1 0 0 0-1 1v2Zm-4.1 6a1 1 0 1 0 0-2H3.06A1 1 0 0 0 2 12a1 1 0 0 0 1.1 1h1.86Zm.79-3.86a1 1 0 1 0 1.39-1.41L7.71 6.36 6.34 5a1 1 0 1 0-1.4 1.4c.9.92 1.82 1.84 2.74 2.74m0 5.75c-.92.9-1.84 1.82-2.74 2.74A1 1 0 1 0 6.38 19c.45-.43.9-.88 1.35-1.33l1.37-1.36a1 1 0 0 0 0-1.46 1 1 0 0 0-1.44 0M20.94 11h-3.88A1 1 0 0 0 16 12a1 1 0 0 0 1.06 1h3.89A1 1 0 0 0 22 12a1 1 0 0 0-1.06-1m-3.37 5.24L16.2 14.9a1 1 0 1 0-1.39 1.41c.9.92 1.82 1.84 2.74 2.74a1 1 0 0 0 1.46 0 1 1 0 0 0-.07-1.44c-.45-.47-.9-.92-1.37-1.37M13 17.1a1 1 0 0 0-1-1.1 1 1 0 0 0-1 1.06V21a1 1 0 1 0 2 0v-2Z"
        className="cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont49);
export default ForwardRef;
