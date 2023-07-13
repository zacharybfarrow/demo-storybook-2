import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont285 = (
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
    data-name="Layer 1"
    viewBox="0 0 24 24"
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
    <path d="M12 14a3.57 3.57 0 0 0 1.75-.4l-.15-.43a3.11 3.11 0 0 1-1.49.35h-.28a2.47 2.47 0 0 1-2.26-2.66v-.09a3.07 3.07 0 0 1 3-3.18h.33a2.28 2.28 0 0 1 2 2.41c0 1.15-.57 1.82-1.07 1.81-.33 0-.44-.36-.3-1.11l.33-1.78a2.38 2.38 0 0 0-1-.21 2.33 2.33 0 0 0-2.33 2.34s0 .07 0 .11a1.12 1.12 0 0 0 1.08 1.14 1.54 1.54 0 0 0 1.39-.88.38.38 0 0 0 0 .15.73.73 0 0 0 .74.73c.92 0 1.75-.88 1.75-2.35a1 1 0 0 0 0-.25 2.75 2.75 0 0 0-2.88-2.62A3.71 3.71 0 0 0 9 10.89a1.27 1.27 0 0 0 0 .2A3 3 0 0 0 12 14Zm1-3.55c-.11.61-.78 1.34-1.21 1.34s-.65-.32-.65-.75a1.7 1.7 0 0 1 1.57-1.78 1.93 1.93 0 0 1 .49.07Zm-.88 6.86-3.78-3.15 3.74 3.12Zm8-9.61V4.22h-5.18l-2.87-1.91-2.91 1.91H3.89v3.46L1.68 9.13v12.6h20.64V9.14Zm0 .76 1.37.91-1.38 1.13Zm-8-5.36 1.74 1.16h-3.57ZM4.51 4.86h15V11l-7.4 6.3-3.78-3.14L4.51 11Zm-.62 3.58v2L2.52 9.33ZM21.7 21.1H2.3V10l5.64 4.69 1.54 1.28 2.61 2.17L21.7 10Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont285);
export default ForwardRef;
