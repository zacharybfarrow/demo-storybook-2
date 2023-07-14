import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont167 = (
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
    <path d="M19.67 12.11a8.05 8.05 0 0 0 .08-1.11A8.75 8.75 0 1 0 11 19.75h.6A5.79 5.79 0 0 0 16.25 22 5.62 5.62 0 0 0 22 16.52a5.41 5.41 0 0 0-2.33-4.41ZM3.5 11a7.5 7.5 0 0 1 15 0v.45a6.1 6.1 0 0 0-2.25-.45H16a5 5 0 1 0-5.45 5 5.44 5.44 0 0 0 0 .57 5.25 5.25 0 0 0 .39 2A7.52 7.52 0 0 1 3.5 11Zm7.34 3.73A3.74 3.74 0 1 1 14.75 11v.23a5.62 5.62 0 0 0-3.91 3.5ZM16.91 17v3.95h-1V17H12v-1h3.95v-4h1v4h3.95v1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont167);
export default ForwardRef;
