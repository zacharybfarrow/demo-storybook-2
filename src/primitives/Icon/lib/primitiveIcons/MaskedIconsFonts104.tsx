import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts104 = (
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
    <path d="M6.39 13.23a1.52 1.52 0 0 1 .1-.32 1.14 1.14 0 0 1 .15-.23 1 1 0 0 1 .36-.24 1.16 1.16 0 0 1 .47-.09.94.94 0 0 1 .72.26 1.47 1.47 0 0 1 .35.64h1.25A2.41 2.41 0 0 0 9 11.74a2.35 2.35 0 0 0-1.53-.51 2.45 2.45 0 0 0-1 .18 2.25 2.25 0 0 0-.74.5 1.84 1.84 0 0 0-.37.5 2.12 2.12 0 0 0-.19.57 4.67 4.67 0 0 0-.08.69v1.65a4.7 4.7 0 0 0 .08.68 2 2 0 0 0 .19.57 1.7 1.7 0 0 0 .37.5 2.42 2.42 0 0 0 .74.5 2.45 2.45 0 0 0 1 .18A2.35 2.35 0 0 0 9 17.24a2.43 2.43 0 0 0 .82-1.52h-1.3a1.41 1.41 0 0 1-.36.66 1 1 0 0 1-.72.25 1.16 1.16 0 0 1-.44-.09 1 1 0 0 1-.33-.24.91.91 0 0 1-.15-.23 1.52 1.52 0 0 1-.1-.32 4.93 4.93 0 0 1 0-.5v-1.52a4.93 4.93 0 0 1-.03-.5Zm7.76 1.22a1.53 1.53 0 0 0-.5-.32 2.88 2.88 0 0 0-.73-.18l-.76-.12a1.28 1.28 0 0 1-.34-.09l-.24-.15a.48.48 0 0 1-.14-.22.64.64 0 0 1 0-.24.78.78 0 0 1 .24-.57 1 1 0 0 1 .74-.24 2.59 2.59 0 0 1 .66.08 1.37 1.37 0 0 1 .65.36l.79-.78a2.47 2.47 0 0 0-.91-.58 3.64 3.64 0 0 0-1.16-.17 2.67 2.67 0 0 0-.93.15 1.9 1.9 0 0 0-.71.4 1.68 1.68 0 0 0-.44.61 2 2 0 0 0-.15.79 1.67 1.67 0 0 0 .46 1.26 1.5 1.5 0 0 0 .51.33 2.67 2.67 0 0 0 .73.19l.76.12a2 2 0 0 1 .36.08 1 1 0 0 1 .22.14.72.72 0 0 1 .2.53.67.67 0 0 1-.29.59 1.44 1.44 0 0 1-.85.21 2.89 2.89 0 0 1-.84-.12 1.59 1.59 0 0 1-.7-.42l-.81.81a2.49 2.49 0 0 0 1 .66 4.29 4.29 0 0 0 1.3.19 3.56 3.56 0 0 0 .94-.13 2.41 2.41 0 0 0 .75-.38 1.73 1.73 0 0 0 .5-.61 1.84 1.84 0 0 0 .18-.83 2.35 2.35 0 0 0-.12-.77 1.41 1.41 0 0 0-.37-.58Zm4.47-3.16-1.29 4.17L16 11.29h-1.3l2.12 6.4h.93l2.13-6.4Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts104);
export default ForwardRef;
