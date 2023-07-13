import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts32 = (
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
    id="masked_icons_fonts-32_svg__Layer_1"
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
    <defs>
      <style>{".masked_icons_fonts-32_svg__cls-1{fill:none}"}</style>
    </defs>
    <path
      d="M14.6 8.68h.41a6.64 6.64 0 0 1 5.16 2.07 4.61 4.61 0 0 0 .33-2 5.23 5.23 0 0 0-9-3.67 4.31 4.31 0 0 0-.39.48 6.69 6.69 0 0 1 3.49 3.12ZM15.12 10.07a6.3 6.3 0 0 1 .21 1.64 6.44 6.44 0 0 1-.38 2.2A5.2 5.2 0 0 0 19 12.38a3.43 3.43 0 0 0 .33-.33 4.63 4.63 0 0 0-.4-.48 5.18 5.18 0 0 0-3.81-1.5ZM10.82 18a5.05 5.05 0 0 0 .78 1 5.23 5.23 0 0 0 7.4 0 4.6 4.6 0 0 0 1.5-3.67 5.32 5.32 0 0 0-.38-1.94 6.67 6.67 0 0 1-4.44 2 7.22 7.22 0 0 1-1.4-.08A6.64 6.64 0 0 1 10.82 18Z"
      className="masked_icons_fonts-32_svg__cls-1"
    />
    <path d="M14.6 8.68a6.42 6.42 0 0 1 .52 1.39 5.18 5.18 0 0 1 3.81 1.49 4.63 4.63 0 0 1 .4.48 4.58 4.58 0 0 0 .84-1.34A6.64 6.64 0 0 0 15 8.63ZM20.5 15.29A4.6 4.6 0 0 1 19 19a5.23 5.23 0 0 1-7.4.06 5.05 5.05 0 0 1-.78-1 6 6 0 0 1-1.41.32A6.67 6.67 0 0 0 22 15.63V15a6.63 6.63 0 0 0-.86-3 6.68 6.68 0 0 1-1 1.34 5.32 5.32 0 0 1 .36 1.95Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts32);
export default ForwardRef;
