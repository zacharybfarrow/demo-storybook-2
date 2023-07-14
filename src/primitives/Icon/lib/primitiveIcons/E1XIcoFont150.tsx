import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont150 = (
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
    <path d="M15 17.52Zm-4-5.1ZM12 11Zm4.21-.17h-.94l-.75 1.38-.75-1.38h-.94L14 12.86l-1.3 2.19h1l.82-1.49.83 1.49h1l-1.34-2.19Zm-.06 6.74ZM10.79 5.81l-2.91 8.6-2.33-4.85H2.47v1.7h2.17L8 18.19l3.75-10.68h8.84v-1.7Zm5.32 2.67Zm3.89 5.1Zm-3.33.1 2.44 1.12V14l-1.45-.64 1.45-.64v-.82l-2.4 1.1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont150);
export default ForwardRef;
