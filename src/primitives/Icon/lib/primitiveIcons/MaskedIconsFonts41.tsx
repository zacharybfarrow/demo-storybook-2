import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts41 = (
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
    <path d="M16.08 10.9a1.19 1.19 0 0 0-.43-.28 2 2 0 0 0-.63-.1h-1.94L12 15.86h2.23a2.09 2.09 0 0 0 .72-.12 1.85 1.85 0 0 0 .57-.36 1.73 1.73 0 0 0 .38-.56 1.86 1.86 0 0 0 .14-.73 1.06 1.06 0 0 0-.14-.58 1.38 1.38 0 0 0-.37-.35 2 2 0 0 0 .42-.3 1.77 1.77 0 0 0 .26-.35 1 1 0 0 0 .14-.37 1.69 1.69 0 0 0 0-.38 1.43 1.43 0 0 0-.07-.46 1.18 1.18 0 0 0-.2-.4Zm-1.25 3.84a.82.82 0 0 1-.62.25h-1l.28-1.4h1a.55.55 0 0 1 .42.15.61.61 0 0 1 .14.4.89.89 0 0 1-.22.6Zm.52-2.55a.55.55 0 0 1-.14.26.82.82 0 0 1-.25.19.89.89 0 0 1-.38.07h-.95l.27-1.31h.94a.7.7 0 0 1 .28 0 .43.43 0 0 1 .17.12.56.56 0 0 1 .09.17 1.23 1.23 0 0 1 0 .19.63.63 0 0 1-.03.31Zm4.1 2.36a.79.79 0 0 1-.21.24.75.75 0 0 1-.24.21.86.86 0 0 1-.36.07.72.72 0 0 1-.51-.19.69.69 0 0 1-.2-.53 2.45 2.45 0 0 1 .05-.49c0-.2.06-.41.1-.64s.09-.44.13-.61a2.48 2.48 0 0 1 .13-.43 1.44 1.44 0 0 1 .12-.3 1.57 1.57 0 0 1 .15-.19 1.31 1.31 0 0 1 .31-.23 1 1 0 0 1 .41-.08.71.71 0 0 1 .31.06.6.6 0 0 1 .22.16 1 1 0 0 1 .12.25 1.06 1.06 0 0 1 0 .31h1a2 2 0 0 0-.1-.65 1.4 1.4 0 0 0-.8-.87 1.75 1.75 0 0 0-.72-.13 2.5 2.5 0 0 0-.8.14 1.84 1.84 0 0 0-.71.47 1.75 1.75 0 0 0-.28.39 2.78 2.78 0 0 0-.21.46 4.94 4.94 0 0 0-.15.56q-.07.3-.15.69a6.15 6.15 0 0 0-.13.74v.46A1.73 1.73 0 0 0 17 15a1.58 1.58 0 0 0 .33.48 1.48 1.48 0 0 0 .51.32 1.85 1.85 0 0 0 .69.12 2.09 2.09 0 0 0 1.26-.41 2.4 2.4 0 0 0 .82-1.24h-1a1.28 1.28 0 0 1-.16.28Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts41);
export default ForwardRef;
