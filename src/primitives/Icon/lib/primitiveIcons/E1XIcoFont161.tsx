import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont161 = (
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
    <path d="M17.83 12.23a.88.88 0 0 0-.63.27l-.25.24L18.21 14l.26-.25a.88.88 0 0 0 .26-.64.86.86 0 0 0-.26-.63.93.93 0 0 0-.64-.25ZM2 2v20h20V2Zm7.5 1h5v6h-5Zm0 7h5v.06A5.57 5.57 0 0 0 9.63 15H9.5Zm-1 11H3v-5h5.5Zm0-6H3v-5h5.5Zm6 6h-5v-5h.13a5.57 5.57 0 0 0 4.87 4.94Zm-.18-2.3-2.32.68h-.1a.34.34 0 0 1-.24-.1.34.34 0 0 1-.09-.33l.69-2.34a.86.86 0 0 1 .2-.33L16.72 12a1.56 1.56 0 0 1 2.21 2.21l-4.27 4.29a.66.66 0 0 1-.34.2ZM21 21h-5.5a5.61 5.61 0 0 0 5.5-5Zm0-6a5.61 5.61 0 0 0-5.47-5H21Zm0-6h-5.5V3H21Zm-7.85 7.54 1.26 1.27 3.32-3.32-1.26-1.27Zm-.76 2 1.42-.42-1-1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont161);
export default ForwardRef;
