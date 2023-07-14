import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts50 = (
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
    <path d="M19 16h-1.3v-2.63H19Zm1.37-4.4a.63.63 0 0 1-.62-.63.32.32 0 0 0-.63 0 .63.63 0 1 1-1.25 0 .31.31 0 0 0-.31-.31.31.31 0 0 0-.31.31A.63.63 0 1 1 16 11a.31.31 0 0 0-.62 0 .63.63 0 1 1-1.25 0 .31.31 0 0 0-.62 0 .63.63 0 0 1-.62.63.62.62 0 0 1-.62-.53l1.81-2.45h5.22l1.7 2.41a.63.63 0 0 1-.62.56" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts50);
export default ForwardRef;
