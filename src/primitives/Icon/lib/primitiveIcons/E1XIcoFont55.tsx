import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont55 = (
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
    <g id="ico_dn_reports_0" className="cls-2">
      <path
        d="M10.77 21.14h1.72a.25.25 0 0 0 .25-.25v-13a.25.25 0 0 0-.25-.25h-1.72a.25.25 0 0 0-.25.25v13a.25.25 0 0 0 .25.25m.24-13h1.23v12.51H11Zm5.15 13h1.72a.24.24 0 0 0 .25-.25V18.2a.24.24 0 0 0-.25-.25h-1.71a.25.25 0 0 0-.25.25v2.7a.25.25 0 0 0 .25.25m.24-2.7h1.23v2.21h-1.22Zm2.21 2.7h1.72a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.24h-1.71a.25.25 0 0 0-.25.24v1a.25.25 0 0 0 .25.25m.25-1h1.22v.49h-1.23Zm-5.4 1h1.72a.24.24 0 0 0 .24-.25v-8.84a.24.24 0 0 0-.24-.25h-1.73a.25.25 0 0 0-.25.25v8.84a.25.25 0 0 0 .25.25m.24-8.83h1.23v8.34h-1.22Zm-5.64 8.82h1.72a.25.25 0 0 0 .21-.24v-9.58a.25.25 0 0 0-.25-.24H8.07a.25.25 0 0 0-.24.24v9.58a.25.25 0 0 0 .24.25m.24-9.57h1.24v9.08H8.32Zm-2.94 9.56h1.72a.25.25 0 0 0 .25-.25v-3.68a.24.24 0 0 0-.25-.21H5.37a.24.24 0 0 0-.24.24v3.66a.24.24 0 0 0 .24.25m.25-3.68h1.23v3.19H5.62Zm16.07 4H2.55V2.25a.25.25 0 1 0-.49 0V22h19.63a.25.25 0 0 0 0-.49"
        className="cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont55);
export default ForwardRef;
