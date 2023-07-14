import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon43 = (
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
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    role="img"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.525 9.73h2.958l-2.459 5.416h1.07L8.918 8.95v-.154H4.525v.934Zm8.401 1.842c.436-.263.744-.68.744-1.225 0-.925-.78-1.651-1.96-1.651-1.197 0-1.977.753-1.95 1.67 0 .544.29.952.717 1.206-.68.317-1.125.907-1.125 1.678 0 1.116.934 1.996 2.359 1.996 1.433 0 2.35-.88 2.35-2.014-.01-.762-.454-1.343-1.135-1.66ZM11.711 9.53c.553 0 1.016.327 1.016.862 0 .536-.445.862-1.025.862-.554 0-1.016-.335-1.016-.853 0-.535.444-.87 1.025-.87Zm0 4.827c-.726 0-1.325-.444-1.325-1.134 0-.717.59-1.188 1.316-1.188.735 0 1.333.453 1.333 1.17 0 .699-.598 1.152-1.324 1.152Zm8.87-8.89H3.42c-.783 0-1.42.637-1.42 1.42v10.226c0 .783.637 1.42 1.42 1.42h17.16c.783 0 1.42-.637 1.42-1.42V6.887c0-.783-.637-1.42-1.42-1.42Zm.472 11.646a.474.474 0 0 1-.473.474H3.42a.474.474 0 0 1-.473-.474V6.887c0-.261.212-.474.473-.474h17.16c.261 0 .473.213.473.474v10.226Zm-3.618-6.031c-.2 0-.39.045-.571.145l1.551-2.468h-1.17l-1.924 3.049a2.473 2.473 0 0 0-.408 1.315c0 1.416 1.043 2.114 2.35 2.114 1.315 0 2.359-.698 2.359-2.114 0-1.315-.935-2.068-2.187-2.041Zm-.172 3.257c-.762 0-1.316-.426-1.316-1.216s.545-1.225 1.316-1.225c.762 0 1.315.436 1.315 1.225s-.544 1.216-1.315 1.216Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon43);
export default ForwardRef;
