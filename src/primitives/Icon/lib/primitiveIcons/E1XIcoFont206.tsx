import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont206 = (
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
    <path d="M21.55 4.73h-1.37V3.37a.46.46 0 0 0-.45-.46h-.23A12.22 12.22 0 0 0 12 5.52a12.22 12.22 0 0 0-7.5-2.61h-.23a.46.46 0 0 0-.45.46v1.36H2.45a.46.46 0 0 0-.45.46v14.54a.46.46 0 0 0 .45.46h6.28a5.92 5.92 0 0 1 2.16.41l.91.45a.43.43 0 0 0 .35 0l.9-.45a6.24 6.24 0 0 1 2.22-.41h6.28a.46.46 0 0 0 .45-.46V5.19a.46.46 0 0 0-.45-.46ZM2.91 19.28V5.64h.91v12.27a.46.46 0 0 0 .45.46h.2a11.26 11.26 0 0 1 4.43.91Zm8.64.43a12.37 12.37 0 0 0-6.82-2.25V3.82a11.38 11.38 0 0 1 6.82 2.49Zm.9 0V6.31a11.32 11.32 0 0 1 6.82-2.49v13.64a12.37 12.37 0 0 0-6.82 2.25Zm8.64-.43h-6a11.26 11.26 0 0 1 4.43-.91h.2a.46.46 0 0 0 .45-.46V5.64h.91Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont206);
export default ForwardRef;
