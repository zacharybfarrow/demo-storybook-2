import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont196 = (
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
    <path d="M19.94 7.24h-6.77l-.91-1.82a.29.29 0 0 0-.26-.17H5.05a.3.3 0 0 0-.26.17l-1 2v11.03a.3.3 0 0 0 .29.3h15.86a.3.3 0 0 0 .29-.3V7.53a.29.29 0 0 0-.29-.29ZM5.23 5.84h6.59l.69 1.4h-8Zm14.41 12.32H4.35V7.83h15.29ZM9.83 13.6h4.47v-1.3H9.83Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont196);
export default ForwardRef;
