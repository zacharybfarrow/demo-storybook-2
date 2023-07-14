import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont249 = (
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
    <path d="M20.46 16.07a.67.67 0 0 0-.48.2l-.19.18.95.95.19-.18a.67.67 0 0 0 .2-.48.66.66 0 0 0-.2-.48.72.72 0 0 0-.47-.19Zm-1.9-1.7a4.19 4.19 0 1 0 4.19 4.19 4.18 4.18 0 0 0-4.19-4.19Zm2.72 3.2-3.21 3.2a.44.44 0 0 1-.25.15l-1.75.51H16a.23.23 0 0 1-.17-.07.27.27 0 0 1-.07-.25l.51-1.76a1 1 0 0 1 .15-.25l3.2-3.2a1.17 1.17 0 0 1 1.66 1.66ZM15 15.12V15h.13a4.92 4.92 0 0 1 1.5-1H15v-4h4v3.67a4.39 4.39 0 0 1 1 .19V4H4v16h9.84a4.39 4.39 0 0 1-.19-1H10v-4h4v1.61a5 5 0 0 1 1-1.49ZM15 5h4v4h-4ZM9 19H5v-4h4Zm0-5H5v-4h4Zm1-9h4v4h-4Zm0 9v-4h4v4Zm6.94 5.3.95.95 2.49-2.49-.95-1Zm-.57 1.51 1.07-.31-.76-.75Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont249);
export default ForwardRef;
