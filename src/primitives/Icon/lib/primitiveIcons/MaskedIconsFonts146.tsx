import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts146 = (
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
    <g data-name="ico actual v potential 16">
      <g data-name="Group 2626">
        <path
          d="m7.45 4 9 1.36H17L21.76 4l-.3 6.88V11l.54 6.61-5.18 2.7-9.13-2.73-.42-.13-.27.14L2.36 20l.31-5.92v-.27l-.52-6.6L7.45 4M22.7 2.61l-6.16 1.62-9.38-1.36L1 6.69 1.71 14l-.42 7.85 6.14-3.27 9.4 3 6.17-3.3-.71-7.28Z"
          data-name="Path 1422"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts146);
export default ForwardRef;
