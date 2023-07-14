import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts134 = (
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
    <path d="m5 15.81-.63-.36a.35.35 0 0 0-.48.12.36.36 0 0 0 .13.49l.63.36a.35.35 0 1 0 .35-.61Zm1.87 1.09-.62-.37a.36.36 0 0 0-.36.62l.63.36a.37.37 0 0 0 .18 0 .35.35 0 0 0 .17-.66Zm-2.2-3.64-.67.37a.35.35 0 0 0-.13.48.35.35 0 0 0 .48.13l.65-.36a.36.36 0 0 0-.35-.62ZM3.24 14.5a.36.36 0 0 0-.49-.13l-.3.18a.35.35 0 0 0-.13.48.33.33 0 0 0 .13.13l.3.17a.31.31 0 0 0 .18.05.94.94 0 0 0 .31-.88ZM17.4 13l.31.17a.35.35 0 0 0 .47-.15.35.35 0 0 0-.12-.46l-.3-.18a.36.36 0 0 0-.36.62Zm-8.64 5-.63-.37a.36.36 0 0 0-.35.62l.62.36a.35.35 0 1 0 .36-.61Zm-2.64-4.8a.41.41 0 0 0 .18 0l.3-.2a.36.36 0 0 0-.35-.62l-.31.18a.36.36 0 0 0-.13.48.37.37 0 0 0 .31.15Zm11.65 3.38-.62.36a.35.35 0 0 0 .35.61l.63-.36a.35.35 0 1 0-.36-.61Zm1.88-1.08-.63.36a.35.35 0 1 0 .36.61l.62-.37a.35.35 0 1 0-.35-.61ZM19 13.92l.64.37a.41.41 0 0 0 .18.05.36.36 0 0 0 .35-.36.34.34 0 0 0-.17-.3l-.64-.37a.35.35 0 0 0-.48.15.34.34 0 0 0 .12.46Zm2.7.8a.33.33 0 0 0-.13-.13l-.3-.17a.51.51 0 1 0-.25 1h.07a.39.39 0 0 0 .18 0l.3-.18a.35.35 0 0 0 .11-.52Zm-9.52 5.09-.13.07-.13-.07a.35.35 0 0 0-.48.13.35.35 0 0 0 .12.48l.31.18a.36.36 0 0 0 .35 0l.31-.18a.35.35 0 0 0-.35-.61Zm-1.52-.73-.66-.37a.36.36 0 0 0-.48.13.35.35 0 0 0 .13.48l.63.37a.35.35 0 0 0 .35-.61Zm3.34-.35-.63.36a.35.35 0 0 0 .18.66.41.41 0 0 0 .18-.05l.62-.36a.35.35 0 0 0 .12-.48.34.34 0 0 0-.47-.13Zm1.87-1.08-.62.36a.35.35 0 0 0 .17.66.35.35 0 0 0 .18-.05l.62-.36a.35.35 0 1 0-.35-.61Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts134);
export default ForwardRef;
