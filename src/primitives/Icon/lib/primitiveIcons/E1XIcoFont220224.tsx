import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont220224 = (
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
    <path d="M14.76 17.85 16 19.12l3.32-3.32-1.26-1.27Zm5.56-5a1.66 1.66 0 0 0-.21-.51 3.41 3.41 0 0 0-.92-.85 6.86 6.86 0 0 0-6.31-9.58A6.88 6.88 0 0 0 6 8.81a7 7 0 0 0 .43 2.39l-4.81 2.88v3.48h2.5a2.5 2.5 0 1 0 5 0h2.4A5.63 5.63 0 0 0 17.25 23 5.62 5.62 0 0 0 23 17.52a5.46 5.46 0 0 0-2.68-4.64Zm-7.44-9.66a5.62 5.62 0 0 1 5.62 5.62 5.5 5.5 0 0 1-.41 2.07 12.77 12.77 0 0 0-1.31-.57 4.19 4.19 0 1 0-8.1-1.5 4 4 0 0 0 .21 1.25h-.56l-.78.47a5.4 5.4 0 0 1-.3-1.72 5.63 5.63 0 0 1 5.63-5.62Zm2.94 5.62a2.91 2.91 0 0 1-.29 1.25h-5.31a2.91 2.91 0 0 1-.29-1.25 2.95 2.95 0 0 1 5.89 0Zm-9.2 10a1.25 1.25 0 1 1 1.26-1.25 1.25 1.25 0 0 1-1.26 1.25Zm5-2.5H8.78a2.48 2.48 0 0 0-4.31 0H2.88v-1.52l5.79-3.48h7.23a16 16 0 0 1 1.66.71h-.36a5.7 5.7 0 0 0-5.54 4.29Zm8.88-.77-4.27 4.27a.66.66 0 0 1-.34.2l-2.33.68h-.09a.34.34 0 0 1-.24-.1.34.34 0 0 1-.09-.33l.69-2.34a.86.86 0 0 1 .2-.33l4.26-4.27a1.55 1.55 0 0 1 2.21 0 1.56 1.56 0 0 1 .04 2.22Zm-1.1-2a.86.86 0 0 0-.63.27l-.25.24 1.26 1.27.26-.25a.88.88 0 0 0 .26-.64.9.9 0 0 0-.26-.64 1 1 0 0 0-.6-.25ZM14 19.87l1.42-.42-1-1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont220224);
export default ForwardRef;
