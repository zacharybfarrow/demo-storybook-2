import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont153 = (
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
    <path d="M21 9.41a.36.36 0 0 0-.07-.1h-.12l-3.32-4.8a1 1 0 0 0-.21-.21.44.44 0 0 0-.28-.08H7.12a.57.57 0 0 0-.25.06.35.35 0 0 0-.17.15l-3.61 4.8-.09.33A2.22 2.22 0 0 0 3.5 11a2 2 0 0 0 1.26.74V18a1.79 1.79 0 0 0 .53 1.28 1.75 1.75 0 0 0 1.29.53h10.89A1.81 1.81 0 0 0 19.28 18v-6.21a2.46 2.46 0 0 0 1.13-.74 1.91 1.91 0 0 0 .5-1.2.36.36 0 0 0 .07-.1.57.57 0 0 0 0-.3Zm-4.88 9.19h-2.35v-4.75h2.35Zm1.93-.6a.64.64 0 0 1-.19.45.55.55 0 0 1-.44.18h-.17v-5.45a.5.5 0 0 0-.17-.38.52.52 0 0 0-.38-.17h-3.44a.48.48 0 0 0-.37.17.5.5 0 0 0-.17.38v5.42H6.54a.51.51 0 0 1-.43-.19A.6.6 0 0 1 6 18v-6.3a2.13 2.13 0 0 0 .5-.25 1.69 1.69 0 0 0 .42-.38 1.77 1.77 0 0 0 .73.57 2.37 2.37 0 0 0 1 .19 2.17 2.17 0 0 0 1.68-.76 1.8 1.8 0 0 0 .74.57 2.36 2.36 0 0 0 .94.19 2.28 2.28 0 0 0 .93-.19 1.8 1.8 0 0 0 .71-.57 1.77 1.77 0 0 0 .73.57 2.17 2.17 0 0 0 .9.19 2.28 2.28 0 0 0 .93-.19 1.8 1.8 0 0 0 .71-.57 2.65 2.65 0 0 0 .53.42 2.2 2.2 0 0 0 .61.26Zm1.29-7.57a1 1 0 0 1-.73.3 1 1 0 0 1-.78-.34 1.13 1.13 0 0 1-.32-.8.57.57 0 0 0-.18-.33.53.53 0 0 0-.33-.12.57.57 0 0 0-.4.13.53.53 0 0 0-.19.33v.13a1.16 1.16 0 0 1-.32.8 1.09 1.09 0 0 1-.82.33 1 1 0 0 1-.77-.33 1.1 1.1 0 0 1-.32-.8V9.6a.51.51 0 0 0-.18-.4.58.58 0 0 0-.38-.15.66.66 0 0 0-.42.15.51.51 0 0 0-.17.4 1.14 1.14 0 0 1-.33.8 1.1 1.1 0 0 1-.8.34 1.13 1.13 0 0 1-.8-.32 1.06 1.06 0 0 1-.34-.82.52.52 0 0 0-.17-.38.59.59 0 0 0-.42-.17.6.6 0 0 0-.38.17.56.56 0 0 0-.17.38v.17a1.12 1.12 0 0 1-.31.8 1 1 0 0 1-.78.34 1.09 1.09 0 0 1-.82-.34 1.08 1.08 0 0 1-.31-.8V9.6a.56.56 0 0 0-.17-.37.52.52 0 0 0-.38-.17.55.55 0 0 0-.42.17.49.49 0 0 0-.17.38 1.16 1.16 0 0 1-.32.8 1 1 0 0 1-.77.33 1.06 1.06 0 0 1-.74-.27 1 1 0 0 1-.36-.65L7.29 5.4h9.34l3.07 4.33a1.09 1.09 0 0 1-.36.71Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont153);
export default ForwardRef;