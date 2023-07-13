import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon96 = (
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
    <path d="m21.46 10.68.54-.677-2.08-1.657v-.004h-.006l-7.105-5.659a1.293 1.293 0 0 0-1.618 0L7.243 5.828v-1.82a.433.433 0 0 0-.433-.432H4.514a.433.433 0 0 0-.433.433v4.337L2 10.003l.54.678 9.19-7.32a.43.43 0 0 1 .54 0l6.783 5.402v6.998h-.92v-1.476a.433.433 0 0 0-.432-.433h-2.294a.433.433 0 0 0-.433.433v1.476h-2.256a.433.433 0 0 0-.433.433v4.974c0 .24.194.433.433.433h7.672c.239 0 .433-.194.433-.433v-4.974a.433.433 0 0 0-.433-.433h-.47V9.453l1.54 1.228ZM4.947 4.443h1.43v2.075l-1.43 1.14V4.441ZM15.84 14.718h1.428v1.043H15.84v-1.043Zm4.117 6.017H13.15v-4.108h6.806v4.108Z" />
    <path d="M4.947 19.165v-8.742l-.866.69v8.052a1.3 1.3 0 0 0 1.299 1.3h5.66v-.867H5.38a.433.433 0 0 1-.433-.433Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon96);
export default ForwardRef;
