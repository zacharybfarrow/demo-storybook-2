import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont76 = (
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
    <path d="m13.11 9.09.1.27.15-.24a4.07 4.07 0 0 1 .79-.89 4.41 4.41 0 0 1 2.75-.94v.79a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v.85a5.81 5.81 0 0 0-3.65 1.28 6.08 6.08 0 0 0-.66.65l-.07.08.06.09a5.73 5.73 0 0 1 .53 1.14Zm5-3.91h2.73v2.74h-2.76ZM21.7 15a1 1 0 0 0-.73-.3h-3a1 1 0 0 0-1 1v.79c-.23 0-.66-.05-.8-.08a4.89 4.89 0 0 1-.6-.14 3.94 3.94 0 0 1-1.63-1 3.75 3.75 0 0 1-1-1.74 18.05 18.05 0 0 1-.22-2.64 5.38 5.38 0 0 0-1.9-3.72A5.51 5.51 0 0 0 8.18 6a6.79 6.79 0 0 0-1.08-.12V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.71A4.57 4.57 0 0 1 9.61 8a4.32 4.32 0 0 1 1.68 3.7 6.42 6.42 0 0 0 1.2 4.09 5.66 5.66 0 0 0 4.18 2h.22v.86a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-.19-.65ZM5.92 8H3.18V5.18h2.74Zm14.9 10.65h-2.74v-2.82h2.73Zm-9.93-3.91-.1-.27-.15.24a4.08 4.08 0 0 1-.79.89 4.44 4.44 0 0 1-2.75.94v-.79a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.85a5.86 5.86 0 0 0 3.65-1.28 6 6 0 0 0 .66-.65l.07-.08-.06-.09a5.77 5.77 0 0 1-.43-1.14Zm-5 3.91H3.18v-2.82h2.74Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont76);
export default ForwardRef;
