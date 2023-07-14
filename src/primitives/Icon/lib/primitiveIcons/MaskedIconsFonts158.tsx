import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts158 = (
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
    <path d="M8.31 14.21z" fill="#00bf6f" />
    <path d="M12.3 20.48a12.18 12.18 0 0 1-5.13-1 4.68 4.68 0 0 1-1.49-1 1.77 1.77 0 0 1-.49-1.12 1.72 1.72 0 0 1 .49-1.12 5.71 5.71 0 0 1 2.38-1.39l-.74-.55c-.16.06-.34.12-.49.19a5.39 5.39 0 0 0-1.74 1.22 2.52 2.52 0 0 0-.69 1.65A2.47 2.47 0 0 0 5.09 19 6.61 6.61 0 0 0 8 20.64a14.22 14.22 0 0 0 4.31.63 14.86 14.86 0 0 0 2-.15 6.45 6.45 0 0 1-.38-.74 14.84 14.84 0 0 1-1.63.1Zm3.13-6.83-2.06 2.19a5.16 5.16 0 0 0-.7-.08v-2.69h-.79v2.69a5.14 5.14 0 0 0-.7.09l-2.32-2.22-.55.58 2 1.89a2.23 2.23 0 0 0-.31.15c-.53.28-.86.65-.86 1.07 0 .87 1.42 1.58 3.16 1.58a6.08 6.08 0 0 0 1.33-.15v-.19a4.9 4.9 0 0 1 .67-2.46s0 0-.06 0l.18-.19a5 5 0 0 1 1.19-1.27l.41-.43Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts158);
export default ForwardRef;
