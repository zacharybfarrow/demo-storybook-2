import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts51 = (
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
    <path
      d="M19.74 16h-.09v-3a.31.31 0 0 0-.31-.32h-1.92a.31.31 0 0 0-.31.32v3h-3.44a.34.34 0 0 1-.34-.34v-3.49a1.23 1.23 0 0 0 .52-.35 1.25 1.25 0 0 0 1.87 0 1.25 1.25 0 0 0 .94.42 1.23 1.23 0 0 0 .93-.42 1.25 1.25 0 0 0 .94.42 1.22 1.22 0 0 0 .93-.42 1.28 1.28 0 0 0 .63.38v3.48a.35.35 0 0 1-.35.34"
      style={{
        fill: "#555",
      }}
    />
    <path d="M19.74 16h-.09v-3a.31.31 0 0 0-.31-.32h-1.92a.31.31 0 0 0-.31.32v3h-3.44a.34.34 0 0 1-.34-.34v-3.49a1.23 1.23 0 0 0 .52-.35 1.25 1.25 0 0 0 1.87 0 1.25 1.25 0 0 0 .94.42 1.22 1.22 0 0 0 .93-.42 1.26 1.26 0 0 0 1.88 0 1.21 1.21 0 0 0 .62.38v3.48a.35.35 0 0 1-.35.34" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts51);
export default ForwardRef;
