import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont56 = (
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
    <g id="ico_duplicate_0" className="cls-2">
      <path
        d="M13.11 2a1.93 1.93 0 0 0-1.36.52 2 2 0 0 0-.4.59h-.46a.56.56 0 0 0-.36.13L8.74 4.78H6.95a.55.55 0 0 0-.5.56v13.88a.56.56 0 0 0 .56.56h12.21a.56.56 0 0 0 .56-.56V5.33a.56.56 0 0 0-.56-.56h-1.74L15.7 3.24a.56.56 0 0 0-.36-.13h-.46a2 2 0 0 0-.4-.59A1.93 1.93 0 0 0 13.11 2m0 1.11a.72.72 0 0 1 .58.21 1.13 1.13 0 0 1 .27.49.56.56 0 0 0 .54.41h.63l.64.56h-5.32l.64-.56h.63a.56.56 0 0 0 .54-.41 1.14 1.14 0 0 1 .27-.49.72.72 0 0 1 .58-.21M7.56 5.89h11.11v12.78H7.56Zm-2.84.55a.56.56 0 0 0-.5.56v14.45a.56.56 0 0 0 .56.55h13.33a.56.56 0 1 0 0-1.11H5.33V7a.56.56 0 0 0-.54-.57h-.07"
        className="cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont56);
export default ForwardRef;
