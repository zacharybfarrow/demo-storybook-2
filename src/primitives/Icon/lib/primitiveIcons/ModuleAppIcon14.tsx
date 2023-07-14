import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgModuleAppIcon14 = (
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
    <path d="M12.27 17.06a4.34 4.34 0 0 0 2.06-1.59h-2.06Zm0-8.3v1.37h2a4 4 0 0 0-2-1.37Zm2.7 3h-2.7v2.14H15a4.59 4.59 0 0 0 0-2.17Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgModuleAppIcon14);
export default ForwardRef;
