import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts18 = (
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
    <path d="M17.08 17Zm-5.59-4.56ZM14.92 17Zm1.66.54Zm3.93-3.94ZM12.43 11Zm3 6.57Zm1.16-9ZM16 11.61A1.39 1.39 0 1 0 17.39 13 1.39 1.39 0 0 0 16 11.61Zm0 2.16a.77.77 0 1 1 .76-.77.77.77 0 0 1-.76.77Zm-.49 2.64Zm5-4a.57.57 0 0 0-.54-.5h-.52l-.21-.5.35-.39a.59.59 0 0 0 0-.74l-.78-.78a.53.53 0 0 0-.36-.13.56.56 0 0 0-.38.14l-.39.35-.5-.2v-.53a.65.65 0 0 0-.15-.36.62.62 0 0 0-.35-.18 4.22 4.22 0 0 0-1.16 0 .59.59 0 0 0-.35.18.65.65 0 0 0-.15.36v.53l-.5.2-.52-.44a.56.56 0 0 0-.38-.14.53.53 0 0 0-.36.13l-.78.78a.59.59 0 0 0 0 .74l.35.39-.21.5h-.52a.57.57 0 0 0-.54.5 4.22 4.22 0 0 0 0 1.16.57.57 0 0 0 .54.5h.52l.21.5-.35.39a.59.59 0 0 0 0 .74l.78.78a.53.53 0 0 0 .36.13.56.56 0 0 0 .38-.14l.39-.35.5.2v.53a.65.65 0 0 0 .15.36.59.59 0 0 0 .35.18 4.23 4.23 0 0 0 1.16 0 .62.62 0 0 0 .35-.18.65.65 0 0 0 .15-.36v-.53l.5-.2.39.35a.56.56 0 0 0 .38.14.53.53 0 0 0 .36-.13l.78-.78a.59.59 0 0 0 0-.74l-.35-.39.21-.5h.52a.57.57 0 0 0 .54-.5 4.22 4.22 0 0 0 0-1.16Zm-.6.92v.12h-.5a.61.61 0 0 0-.34.13.6.6 0 0 0-.21.28l-.19.48a.61.61 0 0 0-.06.25.74.74 0 0 0 .16.44l.32.35-.65.66-.36-.32a.61.61 0 0 0-.43-.16.74.74 0 0 0-.25.05l-.48.2a.64.64 0 0 0-.41.56v.5a4.16 4.16 0 0 1-.45 0h-.46v-.5a.64.64 0 0 0-.41-.56l-.48-.2a.74.74 0 0 0-.25-.05.65.65 0 0 0-.44.16l-.36.32-.65-.66.32-.35a.74.74 0 0 0 .16-.43.62.62 0 0 0-.06-.26l-.19-.48a.6.6 0 0 0-.21-.28.61.61 0 0 0-.35-.13h-.5a4.59 4.59 0 0 1 0-.46v-.46h.5a.64.64 0 0 0 .34-.13.6.6 0 0 0 .21-.28l.19-.48a.62.62 0 0 0 .06-.26.74.74 0 0 0-.16-.43L13 10.6l.65-.66.36.32a.61.61 0 0 0 .43.16.57.57 0 0 0 .25-.06l.48-.2a.64.64 0 0 0 .41-.56v-.5a4.59 4.59 0 0 1 .46 0h.46v.5a.64.64 0 0 0 .41.56l.48.2a.57.57 0 0 0 .25.06.61.61 0 0 0 .43-.16l.36-.32.65.66-.32.35a.74.74 0 0 0-.16.43.62.62 0 0 0 .06.26l.19.48a.6.6 0 0 0 .21.28.61.61 0 0 0 .34.13h.5a4.59 4.59 0 0 1 0 .46c.03.12.02.25.01.35Zm-4.49-4.85Zm1.07 1.11Zm.59-.59Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts18);
export default ForwardRef;
