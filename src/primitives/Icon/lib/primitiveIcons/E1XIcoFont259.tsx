import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont259 = (
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
    <path d="m13.6 18.53-4.33 1V5.73h.2l5.28-1.18v10.88a4.8 4.8 0 0 1 .92-.88V4.71l4.58 1v8.2a5.22 5.22 0 0 1 .92.45V5l-6.42-1.43L9.27 4.8 2.83 3.35V19l6.44 1.45 4.42-1a5.27 5.27 0 0 1-.09-.89Zm-5.27.76-4.58-1V4.5l4.58 1Zm10.21-4.92a4.19 4.19 0 1 0 4.19 4.19 4.19 4.19 0 0 0-4.19-4.19Zm2.63 6.28-.53.53-2.1-2.09-2.1 2.09-.52-.53L18 18.56l-2.09-2.1.52-.53 2.1 2.1 2.1-2.1.53.53-2.1 2.1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont259);
export default ForwardRef;
