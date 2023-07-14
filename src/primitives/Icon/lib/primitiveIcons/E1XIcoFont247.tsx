import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont247 = (
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
    <path d="M15 15.12V15h.13a4.92 4.92 0 0 1 1.5-1H15v-4h4v3.67a4.39 4.39 0 0 1 1 .19V4H4v16h9.84a4.39 4.39 0 0 1-.19-1H10v-4h4v1.61a5 5 0 0 1 1-1.49ZM15 5h4v4h-4ZM9 19H5v-4h4Zm0-5H5v-4h4Zm1-9h4v4h-4Zm0 9v-4h4v4Zm11.5 1.59a4.19 4.19 0 1 0 0 5.93 4.19 4.19 0 0 0 0-5.93Zm-2.59 3.34v3h-.74v-3h-3v-.75h3v-3h.74v3h3v.75Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont247);
export default ForwardRef;
