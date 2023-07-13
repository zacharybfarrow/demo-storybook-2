import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts44 = (
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
    <path d="M16.29 11.45a2.16 2.16 0 0 1 0 .35c-.43 0-.59-.65-.86-1.24a7 7 0 0 1-2.69 1.12v-.2a.65.65 0 0 0-.33.69.75.75 0 0 0 .49.62 1.81 1.81 0 0 0 1 1.47v.64l-.29.07a1 1 0 0 0 1.93 0l-.29-.07v-.65a1.93 1.93 0 0 0 1-1.46.73.73 0 0 0 .5-.62.65.65 0 0 0-.39-.72m4.17-1.33v.35c-.43 0-.59-.65-.85-1.24a7.21 7.21 0 0 1-2.7 1.12v-.2a.65.65 0 0 0-.32.69.71.71 0 0 0 .48.61v-.28l.09.5c.09.27.25.58.53.58s.62-.29 1-.29c.41 0 .67.29 1 .29s.44-.31.53-.58l.09-.5v.28a.74.74 0 0 0 .49-.62.62.62 0 0 0-.38-.72M19.38 13a2.15 2.15 0 0 1-.68.18A2.15 2.15 0 0 1 18 13v.57l-.28.07a1 1 0 0 0 1.92 0l-.28-.07ZM16.72 15.41l.13.06-.13-.06M12.51 15.34l.12-.06-.12.06M12.83 15.21l.1-.04-.1.04M12.23 15.47l.12-.06-.12.06M16.43 15.28l.13.06-.13-.06M14.1 9.68l.2-.05-.2.05M13.22 15.08l.01-.01-.01.01M16.14 15.17l.1.04-.1-.04M17.21 15.71l.07.06-.07-.06M15.84 15.07l.02.01-.02-.01M11.79 15.77l.07-.05-.07.05M11.98 15.62l.1-.07-.1.07M16.98 15.55l.11.07-.11-.07M20.3 13.84l.11.04-.11-.04M20.6 13.95l.13.06-.13-.06M20 13.74l.02.01-.02-.01M20.89 14.08l.12.06-.12-.06M21.15 14.22l.1.07-.1-.07M17 13.88l.1-.04-.1.04M15.96 14.44l.06-.06-.06.06M16.39 14.14l.12-.06-.12.06M16.68 14l.12-.05-.12.05M16.15 14.29l.1-.07-.1.07" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts44);
export default ForwardRef;
