import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont142 = (
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
    <path d="M6 18.05v1.57h12v-1.57Zm2.67-2a4.47 4.47 0 0 0 1.5.91 5 5 0 0 0 1.84.33 5.11 5.11 0 0 0 1.84-.29 4.53 4.53 0 0 0 1.49-.91 4.38 4.38 0 0 0 1-1.41 4.59 4.59 0 0 0 .37-1.85V4.38h-2.48v8.34a2.38 2.38 0 0 1-.6 1.73 2.15 2.15 0 0 1-1.63.62 2.13 2.13 0 0 1-1.62-.62 2.37 2.37 0 0 1-.59-1.73V4.38H7.28v8.43a4.59 4.59 0 0 0 .37 1.85 4.38 4.38 0 0 0 1.01 1.41Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont142);
export default ForwardRef;
