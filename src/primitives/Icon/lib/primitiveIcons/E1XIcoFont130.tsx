import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont130 = (
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
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M13.66 8.36v-4.8a.13.13 0 0 0-.13-.13h-3l-.4-.81a.12.12 0 0 0-.13-.07H7a.12.12 0 0 0-.11.07l-.44.88v4.8a.13.13 0 0 0 .13.13h7a.13.13 0 0 0 .08-.07ZM13 7.79H7.11V4.13H13ZM10.42 15h7.05a.13.13 0 0 0 .13-.13V10a.18.18 0 0 0 0-.1h-3.09l-.2-.4-.2-.41A.14.14 0 0 0 14 9h-3.09a.14.14 0 0 0-.12.07l-.44.88v2H9V8.49h-.93v11h2.27v1.82a.13.13 0 0 0 .13.13h7a.13.13 0 0 0 .13-.13v-4.8a.13.13 0 0 0-.13-.13h-3l-.4-.8a.14.14 0 0 0-.12-.07h-3.04a.14.14 0 0 0-.12.07l-.44.88v2.11H9v-5.69h1.39v2c-.05.01-.02.04.03.12Zm.58-4.39h5.84v3.66H11Zm0 6.47h5.84v3.67H11Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont130);
export default ForwardRef;
