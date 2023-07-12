import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont357 = (
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
    data-name="Layer 1"
    viewBox="0 0 24 24"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.17 10.327h-2.14V8.981h2.14a.406.406 0 0 0 0-.813h-2.14V6.822h2.14a.406.406 0 0 0 0-.813h-2.14v-.442a1.024 1.024 0 0 0-1.021-1.023h-.442V2.406a.406.406 0 0 0-.813 0v2.138h-1.346V2.406a.406.406 0 0 0-.813 0v2.138h-1.347V2.406a.406.406 0 0 0-.813 0v2.138h-.441A1.024 1.024 0 0 0 7.97 5.567v.442H5.83a.406.406 0 0 0 0 .813h2.14v1.346H5.833a.406.406 0 0 0 0 .813H7.97v1.346H5.833a.406.406 0 0 0 0 .813H7.97v.441a1.025 1.025 0 0 0 1.023 1.024h.441v2.138a.406.406 0 1 0 .813 0v-2.138h1.347v4.168H7.524a.407.407 0 0 0-.407.406v2.091a1.395 1.395 0 1 0 .823.003l-.01-.003v-1.684h3.664v1.684a1.394 1.394 0 1 0 .823.003l-.01-.003v-1.684h3.664v1.684a1.395 1.395 0 1 0 .822.003l-.01-.003v-2.09a.407.407 0 0 0-.406-.407h-4.07v-4.168h1.346v2.138a.406.406 0 0 0 .813 0v-2.138h.442a1.024 1.024 0 0 0 1.022-1.024v-.44h2.139a.406.406 0 0 0 0-.814ZM8.106 20.604a.582.582 0 1 1-.582-.582.583.583 0 0 1 .582.582Zm8.373-.582a.582.582 0 1 1-.582.582.583.583 0 0 1 .582-.582Zm-3.896.582a.582.582 0 1 1-.582-.582.582.582 0 0 1 .582.582Zm2.635-9.023a.21.21 0 0 1-.21.21H8.996a.211.211 0 0 1-.21-.21V5.568a.211.211 0 0 1 .21-.21h6.013a.21.21 0 0 1 .21.21Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont357);
export default ForwardRef;
