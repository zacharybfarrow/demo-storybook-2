import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont198 = (
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
    <path d="M13.09 15.27a.22.22 0 0 0 .22-.21v-3.17a.22.22 0 0 0-.43 0v3.17a.2.2 0 0 0 .21.21Zm-1.09 0a.23.23 0 0 0 .22-.21v-3.17a.22.22 0 0 0-.44 0v3.17a.21.21 0 0 0 .22.21Zm7.94-8h-6.77l-.91-1.82a.29.29 0 0 0-.26-.2H5.05a.3.3 0 0 0-.26.17l-1 2v11.03a.3.3 0 0 0 .29.3h15.86a.3.3 0 0 0 .29-.3V7.53a.29.29 0 0 0-.29-.29ZM5.23 5.84h6.59l.69 1.4h-8Zm14.41 12.32H4.35V7.83h15.29Zm-8.55-9a.64.64 0 0 0-.64.65v.33H8.69a.22.22 0 0 0 0 .43h.72V16a.82.82 0 0 0 .79.78h3.6a.82.82 0 0 0 .79-.79v-5.4h.72a.22.22 0 0 0 0-.43h-1.76v-.31a.64.64 0 0 0-.64-.65Zm3.07 1.41V16a.39.39 0 0 1-.36.38h-3.6a.39.39 0 0 1-.36-.38v-5.4Zm-1.05-.76v.33h-2.23v-.29a.22.22 0 0 1 .21-.22h1.8a.22.22 0 0 1 .22.22Zm-2.2 5.42a.22.22 0 0 0 .21-.21v-3.13a.22.22 0 0 0-.43 0v3.17a.2.2 0 0 0 .22.21Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont198);
export default ForwardRef;
