import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts145 = (
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
    <g data-name="ico actual v potential 16">
      <path
        d="m22.02 11.29-.14-.41-4.93 1.32-.13-7.29-.55.01.13 7.43-8.27-.83-.68-7.96h-.42l.55 7.97-5.47 1.88.15.55 5.33-1.88L7.28 18l.41-.01.45-6.05 8.27.82.13 7.97.55-.01-.13-7.97 5.06-1.46z"
        data-name="Group 2626"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts145);
export default ForwardRef;
