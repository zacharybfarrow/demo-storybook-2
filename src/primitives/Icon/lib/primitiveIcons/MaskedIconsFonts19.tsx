import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts19 = (
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
    <path d="M4.06 13c-.12-.94-.29-2.42-.37-3.91a1.72 1.72 0 0 0 .68.14h.21a4.57 4.57 0 0 0 2.06 2.3A7.13 7.13 0 0 0 4.06 13Zm7.06-1.45a4.69 4.69 0 0 0 1.11-.82c0 .43.08.87.09 1.35a7.17 7.17 0 0 0-1.2-.52ZM5.75 3.91a.51.51 0 0 0 .31-.2c.5-.72 1.31-1 2.78-1A5.1 5.1 0 0 1 14 7.7a45.27 45.27 0 0 1-.42 5.3l-.34-.29A12.42 12.42 0 0 0 13 9.62a.33.33 0 0 0-.05-.22 6.55 6.55 0 0 0-1.68-3.12 7 7 0 0 0-5.1-1.84.46.46 0 0 0-.47.46A1.25 1.25 0 0 1 4.37 6a1.74 1.74 0 0 0-.56.1 2.61 2.61 0 0 1 1.94-2.19Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts19);
export default ForwardRef;
