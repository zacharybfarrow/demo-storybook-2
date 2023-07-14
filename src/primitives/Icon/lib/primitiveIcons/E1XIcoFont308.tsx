import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont308 = (
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
    <path d="M17 1H2v22h20V7Zm-1 1h.67l4 5H16Zm5 20H3V2h12v6h6ZM12 8a5.86 5.86 0 0 0-3.62 1.19L7 7.78s-.09-.07-.13 0 0 .06 0 .13v3.78a.24.24 0 0 0 .25.25h3.78c.08 0 .13 0 .14-.05a.13.13 0 0 0-.05-.13l-1.47-1.44a4.39 4.39 0 0 1 4.71-.2 4.44 4.44 0 0 1 1.63 1.62 4.49 4.49 0 0 1 .58 2H18a5.93 5.93 0 0 0-.46-2.07 5.83 5.83 0 0 0-3.21-3.21A5.81 5.81 0 0 0 12 8Zm5 7.86h-3.82c-.08 0-.13 0-.14.05a.12.12 0 0 0 .05.13l1.39 1.39a4.39 4.39 0 0 1-4.71.2A4.44 4.44 0 0 1 8.14 16a4.39 4.39 0 0 1-.59-2.24H6a5.68 5.68 0 0 0 .47 2.33 5.83 5.83 0 0 0 3.21 3.21 6 6 0 0 0 5.95-.75L17 19.94s.09.07.13 0 .05-.06.05-.13v-3.73a.22.22 0 0 0-.07-.18.24.24 0 0 0-.11-.07Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont308);
export default ForwardRef;
