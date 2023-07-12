import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts82 = (
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
    <path d="M4.3 9.73 7.37 5.4h9.34L20 9.82a1 1 0 0 1-.36.65 1.06 1.06 0 0 1-.74.27 1 1 0 0 1-.77-.33 1.16 1.16 0 0 1-.32-.8.49.49 0 0 0-.17-.38.55.55 0 0 0-.42-.17.52.52 0 0 0-.38.17.56.56 0 0 0-.17.37v.17a1.08 1.08 0 0 1-.31.8 1.09 1.09 0 0 1-.82.34 1 1 0 0 1-.78-.34 1.12 1.12 0 0 1-.31-.8V9.6a.56.56 0 0 0-.17-.38.6.6 0 0 0-.38-.17.59.59 0 0 0-.42.17.52.52 0 0 0-.17.38 1.06 1.06 0 0 1-.34.82 1.13 1.13 0 0 1-.8.32 1.1 1.1 0 0 1-.8-.34 1.14 1.14 0 0 1-.37-.8.51.51 0 0 0-.17-.4.66.66 0 0 0-.42-.15.58.58 0 0 0-.41.15.51.51 0 0 0-.17.4v.13a1.1 1.1 0 0 1-.32.8 1 1 0 0 1-.77.33 1.09 1.09 0 0 1-.82-.33 1.16 1.16 0 0 1-.32-.8V9.6a.53.53 0 0 0-.19-.33.57.57 0 0 0-.41-.13.53.53 0 0 0-.36.13.57.57 0 0 0-.18.33 1.13 1.13 0 0 1-.32.8 1 1 0 0 1-.78.34 1 1 0 0 1-.73-.3 1.09 1.09 0 0 1-.33-.71Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts82);
export default ForwardRef;
