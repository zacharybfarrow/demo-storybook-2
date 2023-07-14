import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts14 = (
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
    <path d="m22.49 10.13-10.29-7a.34.34 0 0 0-.34 0l-10.35 7a.31.31 0 0 0 .18.56h1.54v10.23h11.46v-6.67a.9.9 0 0 1-.34-.71v-1.29h5.38v.34h.13v1a.66.66 0 0 1-.41.63v6.69h1.32V10.69h1.54a.31.31 0 0 0 .18-.56Zm-9.68 3.35a.91.91 0 0 1-.27.65v3.16H5v-3.16a.6.6 0 0 1-.4-.58v-.95h.1v-.34h8.05v.34h.06ZM12 9.24a1.85 1.85 0 1 1 1.86-1.84A1.85 1.85 0 0 1 12 9.24Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts14);
export default ForwardRef;
