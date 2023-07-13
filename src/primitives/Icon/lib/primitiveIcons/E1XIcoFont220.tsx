import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont220 = (
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
    <path d="m14 19.87 1.42-.42-1-1Zm5.44-6.33a.86.86 0 0 0-.63.27l-.25.24 1.26 1.27.26-.25a.88.88 0 0 0 .26-.64.9.9 0 0 0-.26-.64 1 1 0 0 0-.64-.25Zm-4.68 4.31L16 19.12l3.32-3.32-1.26-1.27ZM16.48 11l1-3.77L7.4 2.05 6.85 9.4H2.5V18h8.22a5.7 5.7 0 0 0 5.53 4A5.62 5.62 0 0 0 22 16.52 5.62 5.62 0 0 0 16.48 11Zm-6 5.49v.18H3.75v-6H8l.08-1.16L8.5 4 16 7.91l-.87 3.21a5.57 5.57 0 0 0-4.61 5.4Zm5.75 3.29a.66.66 0 0 1-.34.2l-2.33.68h-.09a.34.34 0 0 1-.24-.1.34.34 0 0 1-.09-.33l.69-2.34a.86.86 0 0 1 .2-.33l4.26-4.27a1.55 1.55 0 0 1 2.21 0 1.56 1.56 0 0 1 0 2.21Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont220);
export default ForwardRef;
