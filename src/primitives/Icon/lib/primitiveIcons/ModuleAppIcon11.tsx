import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgModuleAppIcon11 = (
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
    <path d="M4.8 8h3.73v-.53H4.8Zm0 2.13h3.73V9.6H4.8ZM11.2 16h3.2v-.53h-3.2Zm0 1.6h3.2v-.53h-3.2Zm0-3.73h3.2v-.54h-3.2Zm-6.4-8h3.73v-.54H4.8Zm0 5.86h3.73v-.53H4.8Zm0 4.27h3.73v-.53H4.8Zm0 1.6h3.73v-.53H4.8Zm0-3.73h3.73v-.54H4.8Zm11.73 0h3.2v-.54h-3.2Zm0 2.13h3.2v-.53h-3.2Zm0-5.87h3.2V9.6h-3.2Zm0 1.6h3.2v-.53h-3.2Zm0-6.4v.54h3.2v-.54Zm0 2.67h3.2v-.53h-3.2Zm-5.33 3.73h3.2v-.53h-3.2Zm5.33 5.87h3.2v-.53h-3.2Zm-5.33-7.47h3.2V9.6h-3.2Zm0-2.13h3.2v-.53h-3.2Zm0-2.13h3.2v-.54h-3.2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgModuleAppIcon11);
export default ForwardRef;
