import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts130 = (
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
    <path d="M21.69 10.65s-2.58-1.05-5.17-2L14 7.75 12.77 6.4c.12-1.29 1.78-2.22 1.78-2.22a.44.44 0 0 0 .25-.49.54.54 0 0 0-.43-.37H7.91A3.44 3.44 0 0 0 5.32 4.8l-.18.2-2.89 1.65a.5.5 0 0 0-.25.43.62.62 0 0 0 .25.43L5 8.92a8.75 8.75 0 0 0-.37 2.46 5.38 5.38 0 0 0 3.26 5.17v3.63a.48.48 0 0 0 .43.5h2a.43.43 0 0 0 .43-.43l.12-3.2a3.11 3.11 0 0 0 2.52-1h6.9a.52.52 0 0 0 .43-.24.51.51 0 0 0-.06-.5l-2.22-2.58c1.61-.62 2.92-1.16 3.26-1.29A.47.47 0 0 0 22 11c0-.17-.12-.23-.31-.35Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts130);
export default ForwardRef;
