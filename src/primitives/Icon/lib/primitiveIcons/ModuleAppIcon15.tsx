import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgModuleAppIcon15 = (
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
    <path d="M10.62 17.09a4.41 4.41 0 1 1 4.38-4.4 4.4 4.4 0 0 1-4.38 4.4Zm5.8 0h-.77l-.26-.26a6.16 6.16 0 0 0 1.55-4.08 6.32 6.32 0 1 0-12.63 0A6.29 6.29 0 0 0 10.59 19a6.12 6.12 0 0 0 4.08-1.55l.26.25v.78l4.86 4.86 1.42-1.43Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgModuleAppIcon15);
export default ForwardRef;
