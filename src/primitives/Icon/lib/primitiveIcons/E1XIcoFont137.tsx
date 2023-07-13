import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont137 = (
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
    <path d="M20.93 14.08a.57.57 0 0 0-.27-.28l-8.31-2.91a.93.93 0 0 0-1.11.49.74.74 0 0 0 0 .55l2.91 8.31a.44.44 0 0 0 .41.35.53.53 0 0 0 .49-.28l1.24-2.42 1.46 1.45a.79.79 0 0 0 1.18 0l.76-.76a.81.81 0 0 0 0-1.18L18.23 16l2.43-1.32c.34-.05.41-.33.27-.6Zm-3.74 1.38a.48.48 0 0 0-.2.69l.07.14 1.8 1.8-.42.56-1.8-1.8a.46.46 0 0 0-.69 0l-.07.14-1 2-2.42-6.92 6.92 2.42Zm-10 .42a1.39 1.39 0 0 1-1.38-1.39V7.57a1.39 1.39 0 0 1 1.34-1.39h6.93a1.39 1.39 0 0 1 1.38 1.39v4l.7.21V7.57a1.89 1.89 0 0 0-.63-1.46 2.32 2.32 0 0 0-1.45-.62H14a2.77 2.77 0 0 0-2.7-2.08H5.77A2.78 2.78 0 0 0 3 6.18v5.54a2.81 2.81 0 0 0 2.08 2.7v.07A1.88 1.88 0 0 0 5.7 16a2.35 2.35 0 0 0 1.45.62h5.2l-.21-.69ZM5.08 7.57v6.09a2 2 0 0 1-1.39-1.94V6.18a2 2 0 0 1 2.08-2.07h5.54a2 2 0 0 1 1.94 1.38h-6.1a1.9 1.9 0 0 0-1.45.62 2.3 2.3 0 0 0-.62 1.46Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont137);
export default ForwardRef;
