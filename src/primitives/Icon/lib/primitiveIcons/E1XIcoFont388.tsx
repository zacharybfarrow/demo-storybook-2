import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont388 = (
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
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.383 7.663h.001-.001Zm-4.37 1.525-.07.004a.609.609 0 0 0-.539.604l.003.048v1.417H2.55l-.011.001a.609.609 0 0 0-.539.605l.004.071c.037.31.299.538.605.538l.047-.002h.751v1.636a.61.61 0 0 0 .61.609h.002a.61.61 0 0 0 .6-.61V9.727a.609.609 0 0 0-.605-.538Zm2.15-.735a.61.61 0 0 0-.61.61v5.833a.61.61 0 0 0 1.219 0V9.063a.609.609 0 0 0-.61-.61Zm9.632-.79h.001-.001Zm5.596 3.817h-.762V9.843a.61.61 0 0 0-1.218 0v4.267a.609.609 0 1 0 1.218 0v-1.412h.762v-.205.205a.609.609 0 0 0 0-1.218Zm-5.06-3.27-.002-.012a.61.61 0 0 0-.534-.535l-.071-.004a.609.609 0 0 0-.605.539l-.001.011v2.986h-6.2V8.21l-.001-.011a.61.61 0 0 0-.534-.535l-.071-.004a.609.609 0 0 0-.605.539l-.001.011v7.523a.61.61 0 0 0 .6.609h.003a.61.61 0 0 0 .61-.61v-3.317h6.199v3.318a.61.61 0 0 0 .6.609h.004a.61.61 0 0 0 .609-.61V8.21Zm1.54.196-.07.005a.609.609 0 0 0-.54.604l.004.048v5.833c0 .337.272.61.609.61h.003a.61.61 0 0 0 .6-.61v-5.94l-.001-.011a.61.61 0 0 0-.605-.539Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont388);
export default ForwardRef;
