import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont210 = (
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
    <path d="M20.16 16.42h-.42a.47.47 0 0 1-.29-.11.49.49 0 0 1-.18-.24l-.17-.41a.58.58 0 0 1 .09-.58l.27-.3-.55-.55-.3.27a.52.52 0 0 1-.36.13.57.57 0 0 1-.22 0l-.4-.17a.55.55 0 0 1-.24-.18.54.54 0 0 1-.11-.29v-.42h-.39a3.27 3.27 0 0 0-.39 0v.42a.54.54 0 0 1-.11.29.55.55 0 0 1-.24.18l-.4.17a.6.6 0 0 1-.22 0 .5.5 0 0 1-.36-.13l-.3-.27-.55.55.27.3a.58.58 0 0 1 .13.37.41.41 0 0 1 0 .21l-.16.41a.56.56 0 0 1-.18.24.49.49 0 0 1-.29.11h-.42v.1a2.48 2.48 0 0 0 0 .29 3.07 3.07 0 0 0 0 .38h.42a.57.57 0 0 1 .29.11.63.63 0 0 1 .18.24l.16.4a.44.44 0 0 1 0 .22.57.57 0 0 1-.13.36l-.27.3.55.55.3-.27a.55.55 0 0 1 .36-.13.47.47 0 0 1 .22.05l.4.17a.63.63 0 0 1 .24.18.57.57 0 0 1 .11.29v.42h.39a3.07 3.07 0 0 0 .38 0v-.42a.57.57 0 0 1 .11-.29.63.63 0 0 1 .24-.18L18 19a.44.44 0 0 1 .22-.05.57.57 0 0 1 .36.13l.3.27.55-.55-.27-.3a.52.52 0 0 1-.13-.36.57.57 0 0 1 0-.22l.17-.4a.55.55 0 0 1 .18-.24.54.54 0 0 1 .29-.11h.42a.41.41 0 0 1 0-.1 2.53 2.53 0 0 0 0-.28 3.53 3.53 0 0 0 0-.39ZM16.87 18A1.18 1.18 0 1 1 18 16.81 1.17 1.17 0 0 1 16.87 18Zm.37-6.38v-.85A2 2 0 0 0 18.5 10a2.22 2.22 0 0 0 .5-1.44l-.09-.33-3.61-4.8a.35.35 0 0 0-.17-.15.57.57 0 0 0-.25-.06H5a.44.44 0 0 0-.25.08 1 1 0 0 0-.21.21L1.09 8.85a1.91 1.91 0 0 0 .5 1.2 2.46 2.46 0 0 0 1.13.74V17a1.71 1.71 0 0 0 .53 1.28 1.71 1.71 0 0 0 1.28.53H12a5.22 5.22 0 1 0 5.29-7.18ZM2.66 9.44a1.09 1.09 0 0 1-.36-.71L5.37 4.4h9.34L18 8.82a1 1 0 0 1-.36.65 1.06 1.06 0 0 1-.74.27 1 1 0 0 1-.77-.33 1.16 1.16 0 0 1-.32-.8.49.49 0 0 0-.17-.38.55.55 0 0 0-.42-.17.52.52 0 0 0-.38.17.56.56 0 0 0-.17.37v.17a1.08 1.08 0 0 1-.31.8 1.09 1.09 0 0 1-.82.34 1 1 0 0 1-.78-.34 1.12 1.12 0 0 1-.31-.8V8.6a.56.56 0 0 0-.17-.38.6.6 0 0 0-.38-.17.59.59 0 0 0-.42.17.52.52 0 0 0-.17.38 1.06 1.06 0 0 1-.34.82 1.13 1.13 0 0 1-.8.32 1.1 1.1 0 0 1-.8-.34A1.14 1.14 0 0 1 9 8.6a.51.51 0 0 0-.17-.4.66.66 0 0 0-.42-.15.58.58 0 0 0-.41.15.51.51 0 0 0-.17.4v.13a1.1 1.1 0 0 1-.32.8 1 1 0 0 1-.77.33 1.09 1.09 0 0 1-.82-.33 1.16 1.16 0 0 1-.32-.8V8.6a.53.53 0 0 0-.19-.33.57.57 0 0 0-.41-.13.53.53 0 0 0-.36.13.57.57 0 0 0-.18.33 1.13 1.13 0 0 1-.32.8 1 1 0 0 1-.78.34 1 1 0 0 1-.7-.3Zm5.57 8.16H5.88v-4.75h2.35Zm3.32-.82a5.56 5.56 0 0 0 .08.82H9.28v-5.42a.5.5 0 0 0-.17-.38.48.48 0 0 0-.37-.17H5.33a.52.52 0 0 0-.33.17.5.5 0 0 0-.17.38v5.42h-.22a.55.55 0 0 1-.44-.18A.64.64 0 0 1 4 17v-6.25a2.2 2.2 0 0 0 .61-.26 2.65 2.65 0 0 0 .53-.42 1.8 1.8 0 0 0 .71.57 2.28 2.28 0 0 0 .93.19 2.17 2.17 0 0 0 .9-.19 1.77 1.77 0 0 0 .73-.57 1.8 1.8 0 0 0 .71.57 2.28 2.28 0 0 0 .93.19 2.36 2.36 0 0 0 .94-.19 1.8 1.8 0 0 0 .74-.57 2.17 2.17 0 0 0 1.68.76 2.37 2.37 0 0 0 1-.19 1.77 1.77 0 0 0 .73-.57 1.69 1.69 0 0 0 .42.38 2.13 2.13 0 0 0 .5.25v.92a5.22 5.22 0 0 0-4.51 5.16Zm9.13.52a.49.49 0 0 1-.16.29.52.52 0 0 1-.3.13h-.44l-.17.42.29.33a.49.49 0 0 1 0 .63l-.66.66a.51.51 0 0 1-.31.11.47.47 0 0 1-.32-.13l-.33-.29-.42.17v.44a.52.52 0 0 1-.13.31.54.54 0 0 1-.29.15h-.98a.54.54 0 0 1-.29-.15.42.42 0 0 1-.13-.31v-.44l-.42-.17-.34.3a.47.47 0 0 1-.32.13.51.51 0 0 1-.31-.11l-.66-.66a.49.49 0 0 1 0-.63l.3-.33-.29-.39h-.44a.54.54 0 0 1-.31-.13.54.54 0 0 1-.15-.29s0-.25 0-.49v-.49a.58.58 0 0 1 .15-.29.54.54 0 0 1 .31-.13H14l.17-.42-.3-.33a.51.51 0 0 1-.12-.32.53.53 0 0 1 .11-.31l.66-.66a.45.45 0 0 1 .3-.11.43.43 0 0 1 .32.12l.33.29.42-.17v-.44a.4.4 0 0 1 .13-.3.49.49 0 0 1 .29-.16s.25 0 .49 0h.49a.51.51 0 0 1 .42.46v.44l.42.17.33-.29a.49.49 0 0 1 .63 0l.66.66a.47.47 0 0 1 .11.31.46.46 0 0 1-.12.32l-.29.33.17.42h.44a.51.51 0 0 1 .46.43 4.5 4.5 0 0 1 0 .49v.49Zm-6.13 1.25Zm2.32-2.39a.65.65 0 1 0 .64.65.65.65 0 0 0-.64-.65Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont210);
export default ForwardRef;
