import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont304 = (
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
    <path d="M20 9Zm1.29-4.75Zm-.69 3.48Zm0-3.49ZM9.44 16.11l7.06-3.44-7-3.44Zm8.87-8.92A1.18 1.18 0 1 0 17.14 6a1.17 1.17 0 0 0 1.17 1.19Zm0-1.83a.65.65 0 1 1-.65.65.66.66 0 0 1 .65-.65Zm1.09 5.54a4.62 4.62 0 0 0-.3-1.23.58.58 0 0 0 .12-.3v-.44l.42-.18L20 9a.51.51 0 0 0 .32.12.45.45 0 0 0 .34-.12l.66-.66a.48.48 0 0 0 0-.62L21 7.41l.2-.41h.44a.42.42 0 0 0 .3-.13.49.49 0 0 0 .16-.29 4.75 4.75 0 0 0 0-.49V5.6a.49.49 0 0 0-.1-.37.52.52 0 0 0-.3-.13h-.44L21 4.64l.29-.33a.48.48 0 0 0 0-.62L20.67 3a.45.45 0 0 0-.31-.11A.51.51 0 0 0 20 3l-.33.3-.42-.17v-.45a.52.52 0 0 0-.13-.3.43.43 0 0 0-.29-.15 3 3 0 0 0-1 0 .43.43 0 0 0-.29.15.46.46 0 0 0-.13.3v.45l-.42.17-.4-.3a.51.51 0 0 0-.32-.12A.45.45 0 0 0 16 3l-.66.66a.49.49 0 0 0-.1.3.44.44 0 0 0 .12.32l.29.33-.17.42-.48.07a.51.51 0 0 0-.46.42s0 .25 0 .49a4.75 4.75 0 0 0 0 .49.49.49 0 0 0 .16.29.4.4 0 0 0 .3.13h.44l.17.43a3.77 3.77 0 0 0-1 .19A5.26 5.26 0 0 0 10.08 5a5.35 5.35 0 0 0-5.3 5.05A4.55 4.55 0 0 0 6.24 19h11.52a4.25 4.25 0 0 0 4.56-4.08 4.12 4.12 0 0 0-2.92-4.02Zm-4-4.48L15 6.4a3.1 3.1 0 0 1 0-.4 2.46 2.46 0 0 1 0-.28v-.1h.42a.57.57 0 0 0 .29-.11.55.55 0 0 0 .18-.24l.17-.4a.47.47 0 0 0 .05-.22.52.52 0 0 0-.11-.38L15.72 4l.55-.55.3.27a.51.51 0 0 0 .36.14.63.63 0 0 0 .22 0l.4-.16a.61.61 0 0 0 .24-.17.57.57 0 0 0 .11-.3v-.41a2.91 2.91 0 0 1 .38 0h.38v.41a.57.57 0 0 0 .11.3.61.61 0 0 0 .24.17l.4.16a.59.59 0 0 0 .22 0 .57.57 0 0 0 .36-.13l.3-.27.61.54-.27.3a.52.52 0 0 0-.13.36.6.6 0 0 0 0 .22l.17.4a.55.55 0 0 0 .18.24.54.54 0 0 0 .29.11h.42a3.47 3.47 0 0 1 0 .38 2.62 2.62 0 0 1 0 .29v.1h-.42a.54.54 0 0 0-.29.12.47.47 0 0 0-.18.23l-.17.4a.52.52 0 0 0 0 .21.54.54 0 0 0 .13.37l.27.3-.55.55-.3-.27a.52.52 0 0 0-.58-.09l-.4.17a.55.55 0 0 0-.24.18.54.54 0 0 0-.11.29 3.45 3.45 0 0 0-1.07-1 3.67 3.67 0 0 0-1.53-.49.39.39 0 0 0-.05-.2l-.17-.4a.47.47 0 0 0-.18-.23.58.58 0 0 0-.28-.12ZM17.76 18H6.24a3.6 3.6 0 0 1-.89-7.09.48.48 0 0 0 .37-.47A4.4 4.4 0 0 1 10.08 6 4.3 4.3 0 0 1 14 8.37a.48.48 0 0 0 .65.22 2.64 2.64 0 0 1 2.53.09 2.87 2.87 0 0 1 1.33 2.6.48.48 0 0 0 .4.47 3.18 3.18 0 0 1 2.48 3.13C21.36 16.62 20 18 17.76 18Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont304);
export default ForwardRef;
