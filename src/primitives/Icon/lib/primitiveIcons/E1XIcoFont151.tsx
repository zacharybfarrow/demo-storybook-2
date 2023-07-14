import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont151 = (
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
    <path d="M16.11 17.52Zm-1.16 0Zm1.22-6.74h-.94l-.75 1.38-.75-1.38h-.94L14 12.86l-1.3 2.19h1l.82-1.49.83 1.49h1l-1.34-2.19ZM12 11Zm-1 1.42Zm-.23-6.61-2.91 8.6-2.31-4.85H2.47v1.7h2.17L8 18.19l3.75-10.68h8.84v-1.7ZM20 13.58Zm-3.45.77h2.66v-.72h-2.62Zm0-1.3h2.66v-.72h-2.62Zm-.48-4.57Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont151);
export default ForwardRef;
