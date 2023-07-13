import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts114 = (
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
      d="M20.67 14h-.51v-1.5a2 2 0 1 0-4.05 0V14h-.5a.5.5 0 0 0-.51.5v3.55a.5.5 0 0 0 .51.5h5.06a.5.5 0 0 0 .51-.5v-3.53a.5.5 0 0 0-.51-.52Zm-3.54-1.5a1 1 0 0 1 2 0V14h-2Z"
      style={{
        fill: "#231f20",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts114);
export default ForwardRef;
