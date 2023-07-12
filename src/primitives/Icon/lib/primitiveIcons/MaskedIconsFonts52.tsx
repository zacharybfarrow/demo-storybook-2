import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts52 = (
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
    <path d="M18.45 10.52a4.31 4.31 0 0 0-.52.6 5.23 5.23 0 0 0-.41.67l-.13.2.1.31v.1c.09.27.2.55.31.82s.23.52.34.75a2.3 2.3 0 0 0 .23.37 1.54 1.54 0 0 0 .25.31l.24-.1.14-.22a1.17 1.17 0 0 0 .1-.26l.17-.44.41.34a1.36 1.36 0 0 1 .24.24.53.53 0 0 1 .1.34 1.44 1.44 0 0 1-.22.65 1.51 1.51 0 0 1-.46.48 2 2 0 0 1-.55.39 1.63 1.63 0 0 1-.65.19 1.26 1.26 0 0 1-.66-.24 1.4 1.4 0 0 1-.46-.51 7.59 7.59 0 0 1-.45-.8 6.82 6.82 0 0 1-.37-.94v.07a5.9 5.9 0 0 1-.56.9 7.83 7.83 0 0 1-.7.81 2.32 2.32 0 0 1-.72.53 2.59 2.59 0 0 1-.89.22 1.55 1.55 0 0 1-.53-.09 1.68 1.68 0 0 1-.5-.25l-.3-.14 1.37-1.47.31.34.2.1a1 1 0 0 0 .32-.12.78.78 0 0 0 .26-.22 4.86 4.86 0 0 0 .46-.53 6.3 6.3 0 0 0 .43-.63l.34-.62v-.06l-.14-.45-.27-.68-.28-.79a3.18 3.18 0 0 0-.16-.32 1 1 0 0 0-.22-.29l-.14.1a2.75 2.75 0 0 0-.17.29 1.7 1.7 0 0 0-.1.32l-.1.38-.41-.17-.31-.2a.48.48 0 0 1-.1-.17.76.76 0 0 1 0-.21 1.87 1.87 0 0 1 .19-.7 2.33 2.33 0 0 1 .42-.6 2 2 0 0 1 .5-.46 1.44 1.44 0 0 1 .6-.19 1.48 1.48 0 0 1 .67.22 1.38 1.38 0 0 1 .46.5 8.35 8.35 0 0 1 .43.77c.12.26.24.54.35.84a7 7 0 0 1 .53-.89c.2-.28.4-.54.6-.79a1.74 1.74 0 0 1 .61-.49 2.28 2.28 0 0 1 .82-.23 1.84 1.84 0 0 1 .41.05l.38.12.44.21-1.33 1.47H19a1 1 0 0 0-.32.12.92.92 0 0 0-.23.15Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts52);
export default ForwardRef;
