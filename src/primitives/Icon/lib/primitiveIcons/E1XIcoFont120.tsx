import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont120 = (
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
      d="M14.65 17.51a2.72 2.72 0 1 1 2.71-2.72 2.72 2.72 0 0 1-2.71 2.72m3.62 0h-.48l-.17-.17a3.81 3.81 0 1 0-.42.43l.16.16v.48l3 3 .9-.9Z"
      style={{
        fillRule: "evenodd",
      }}
    />
    <path d="M10.72 7.77V3a.13.13 0 0 0-.13-.13h-3L7.21 2a.11.11 0 0 0-.11 0H4a.11.11 0 0 0-.07 0l-.44.87v4.8a.13.13 0 0 0 .13.13h7a.13.13 0 0 0 .1-.03ZM10 7.2H4.17V3.54H10Zm4.5 2.12h-3l-.4-.8a.12.12 0 0 0-.1-.07H8a.12.12 0 0 0-.12.07l-.44.87v4.86a.13.13 0 0 0 .13.13h3.23a4.13 4.13 0 0 1 .14-.7H8.1V10h5.84v.91a4.17 4.17 0 0 1 .71-.07V9.45a.13.13 0 0 0-.13-.13Zm-.58 10.84H8.1V16.5h3a3.8 3.8 0 0 1-.4-1.57H8a.12.12 0 0 0-.12.07l-.44.87v4.86a.13.13 0 0 0 .13.13h7a.13.13 0 0 0 .13-.13v-2a4.17 4.17 0 0 1-.71-.07ZM7.4 12.29v-.88H6.01V7.9h-.88v11.01H7.4v-.88H6.01v-5.74H7.4z" />
    <path
      d="M1.44 1.44h21.12v21.12H1.44z"
      style={{
        fill: "none",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont120);
export default ForwardRef;
