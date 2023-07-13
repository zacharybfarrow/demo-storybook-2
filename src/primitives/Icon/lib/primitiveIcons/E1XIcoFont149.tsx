import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont149 = (
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
    <path d="M12 11Zm4.15 6.57Zm-1.16 0ZM11 12.42Zm5.69.28 1.44.64-1.42.66v.82l2.44-1.12V13l-2.44-1.12Zm3.33.88Zm-9.23-7.77-2.91 8.6-2.33-4.85H2.47v1.7h2.17L8 18.19l3.75-10.68h8.84v-1.7Zm5.32 2.67Zm.06 2.3h-.94l-.75 1.38-.75-1.38h-.94L14 12.86l-1.3 2.19h1l.82-1.49.83 1.49h1l-1.34-2.19Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont149);
export default ForwardRef;
