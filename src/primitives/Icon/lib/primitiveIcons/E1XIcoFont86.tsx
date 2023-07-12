import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont86 = (
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
      d="M7.61 6.59a1.82 1.82 0 1 0-1.82 1.8 1.79 1.79 0 0 0 1.82-1.76s.01-.03 0-.04ZM5.8 7.68a1.1 1.1 0 1 1 1.09-1.09 1.05 1.05 0 0 1-1 1.09Zm17 6.53V1.88H1.09V14.2h2.17V20a3.43 3.43 0 0 0-2.17 1.2v1a3.75 3.75 0 0 1 2.54-1.45 3.26 3.26 0 0 1 1 .18l.53.23-.06-.58v-.18a1.8 1.8 0 0 1 3.43-.76l.18.4.37-.26a2.61 2.61 0 0 1 1.45-.47 2.47 2.47 0 0 1 2 1l.37.48.26-.54a1.06 1.06 0 0 1 1.4-.51h.08L15 20l.18-.33a2.17 2.17 0 0 1 4.06 1.08v1.05l.65-.86a1.47 1.47 0 0 1 1.11-.58 1.76 1.76 0 0 1 .4.07l.3.06.14-.3a1.1 1.1 0 0 1 1-.61v-.67a1.77 1.77 0 0 0-1.45.76 2.24 2.24 0 0 0-.73 0V14.2h2.17Zm-17.4 4a2.67 2.67 0 0 0-1.1 1.81A1.11 1.11 0 0 0 4 20v-5.81h1.42v4.06Zm12.33-.35a2.32 2.32 0 0 0-.69-.07A2.85 2.85 0 0 0 14.75 19a1.81 1.81 0 0 0-1.89.52A3.25 3.25 0 0 0 9 19a2.56 2.56 0 0 0-2.1-1.12 2.52 2.52 0 0 0-.73.1v-3.76h11.59v3.69Zm2.2 2.14h-.07a3 3 0 0 0-1.37-1.81v-4h1.44V20ZM1.81 13.48V2.6h20.31v10.88Zm.72-.73h18.86V3.32H2.53ZM7.28 12l3.59-4.5 3.26 4.5ZM15 12l-1.11-1.55 2.75-4.28L20 12ZM3.23 4h17.42v7.6l-4-6.85-3.22 5-2.55-3.39L6.35 12H3.26Z"
      data-name="Group 4100"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont86);
export default ForwardRef;
