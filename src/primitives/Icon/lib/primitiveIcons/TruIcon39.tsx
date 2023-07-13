import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon39 = (
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
    <path d="M17.571 17.023h.843v-.842h-.843v.842Zm.839-4.18h-.844l-.003 2.584h.843l.004-2.583Zm3.168-1.6h-.664v-4.96c0-.697-.568-1.265-1.265-1.265H3.265C2.567 5.018 2 5.586 2 6.283v10.295c0 .698.567 1.265 1.265 1.265h11.29a7.8 7.8 0 0 1-.57-.843H3.265a.422.422 0 0 1-.422-.422v-5.334h9.924c.085-.331.268-.623.517-.843H2.844V8.508H20.07v2.735h-5.672a.422.422 0 0 0-.421.421c0 3.501 1.246 5.878 3.81 7.267a.421.421 0 0 0 .402 0C20.753 17.542 22 15.165 22 11.664a.422.422 0 0 0-.422-.421ZM2.843 7.665V6.283c0-.232.19-.422.422-.422h16.384c.232 0 .421.19.421.422v1.382H2.843Zm15.145 10.412c-2.06-1.198-3.073-3.114-3.162-5.991h6.324c-.088 2.877-1.1 4.793-3.162 5.99Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon39);
export default ForwardRef;
