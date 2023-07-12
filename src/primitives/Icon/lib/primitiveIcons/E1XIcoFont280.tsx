import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont280 = (
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
    <path d="M18.57 14.32a4.2 4.2 0 1 0 4.19 4.19 4.19 4.19 0 0 0-4.19-4.19Zm2.62 6.29-.53.53L18.57 19l-2.1 2.1-.53-.53 2.1-2.1-2.1-2.09.53-.53 2.1 2.1 2.09-2.1.53.53-2.1 2.09Zm-.55-8.21-2.17 1.22h.07a5.16 5.16 0 0 1 1.37.21l1.17-.65a1.35 1.35 0 0 0 .69-1.18 1.44 1.44 0 0 0-.71-1.15.44.44 0 0 0-.6.18.44.44 0 0 0 .18.6.43.43 0 0 1 .24.37.44.44 0 0 1-.24.4Zm-8 4.54a1.05 1.05 0 0 1-1.2 0l-8-4.52a.44.44 0 0 1-.32-.42.43.43 0 0 1 .24-.37.44.44 0 0 0-.42-.78A1.28 1.28 0 0 0 2.25 12a1.31 1.31 0 0 0 .69 1.16l8 4.5a2 2 0 0 0 2.18 0l.68-.39a5.4 5.4 0 0 1 .58-1.35l-1.73 1s-.04.02-.06.02Zm0 4a1.09 1.09 0 0 1-1.2 0l-8-4.52a.44.44 0 0 1-.32-.42.43.43 0 0 1 .24-.37.45.45 0 0 0 .18-.6.47.47 0 0 0-.6-.18A1.29 1.29 0 0 0 2.25 16a1.31 1.31 0 0 0 .69 1.16l8 4.5a2 2 0 0 0 2.18 0l1.15-.66a5.3 5.3 0 0 1-.37-.8ZM2.92 9.05l8 4.5a1.92 1.92 0 0 0 2.18 0l8-4.5a1.32 1.32 0 0 0 .69-1.15 1.35 1.35 0 0 0-.69-1.16l-8-4.41a2 2 0 0 0-2.18 0l-8 4.41a1.31 1.31 0 0 0-.69 1.16 1.28 1.28 0 0 0 .69 1.15Zm.44-1.51 8-4.41a1.05 1.05 0 0 1 1.2 0l8 4.41a.44.44 0 0 1 .25.38.43.43 0 0 1-.25.38l-8 4.5a1.09 1.09 0 0 1-1.2 0l-8-4.53a.4.4 0 0 1 0-.73Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont280);
export default ForwardRef;