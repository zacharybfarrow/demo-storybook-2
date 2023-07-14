import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont157 = (
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
    <path d="M19.22 4.78h-1.74L15.7 3.24a.59.59 0 0 0-.37-.13h-.46a1.92 1.92 0 0 0-3.52 0h-.46a.64.64 0 0 0-.37.13L8.74 4.78H7a.55.55 0 0 0-.51.55v13.89a.56.56 0 0 0 .56.56h12.17a.56.56 0 0 0 .56-.56V5.33a.56.56 0 0 0-.56-.55Zm-8.13-.56h.63a.56.56 0 0 0 .54-.41 1.11 1.11 0 0 1 .27-.49.71.71 0 0 1 .58-.21.71.71 0 0 1 .58.21 1 1 0 0 1 .27.49.56.56 0 0 0 .54.41h.63l.65.56h-5.33Zm7.58 14.45H7.56V5.89h11.11Zm-.54 2.22H5.33V7a.55.55 0 0 0-.54-.57h-.07a.56.56 0 0 0-.5.56v14.46a.56.56 0 0 0 .56.55h13.33a.55.55 0 0 0 .56-.55.54.54 0 0 0-.54-.56ZM12.44 16h1.5v-3h3v-1.5h-3v-3h-1.5v3h-3V13h3Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont157);
export default ForwardRef;
