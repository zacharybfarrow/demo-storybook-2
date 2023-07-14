import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon69 = (
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
    role="img"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.693 10.342a3.046 3.046 0 1 0-4.706-3.112 3.033 3.033 0 0 0-3.974 0 3.052 3.052 0 0 0-2.989-2.451 3.046 3.046 0 0 0-1.717 5.563A5.033 5.033 0 0 0 2 15.063v2.03h.834v-2.03c0-2.31 1.88-4.19 4.19-4.19.76 0 1.453-.279 1.987-.74a3.054 3.054 0 0 0 1.271 1.92 5.033 5.033 0 0 0-3.306 4.72v1.197c0 .69.56 1.251 1.251 1.251h7.546c.69 0 1.251-.561 1.251-1.251v-1.196a5.02 5.02 0 0 0-2.105-4.086c-.216.2-.451.379-.704.531a4.19 4.19 0 0 1 1.975 3.555v1.196c0 .23-.187.417-.417.417H8.227a.418.418 0 0 1-.417-.417v-1.196c0-2.31 1.88-4.19 4.19-4.19a3.052 3.052 0 0 0 2.988-2.45c.534.46 1.229.74 1.988.74 2.31 0 4.19 1.879 4.19 4.19v2.03H22v-2.03a5.033 5.033 0 0 0-3.307-4.722Zm-11.669-.303c-1.22 0-2.213-.993-2.213-2.213s.993-2.213 2.213-2.213 2.213.993 2.213 2.213-.992 2.213-2.213 2.213ZM12 11.75c-1.22 0-2.213-.992-2.213-2.212S10.78 7.324 12 7.324s2.213.992 2.213 2.213S13.22 11.75 12 11.75Zm2.763-3.923c0-1.22.992-2.213 2.213-2.213s2.213.993 2.213 2.213-.993 2.213-2.213 2.213-2.213-.993-2.213-2.213Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon69);
export default ForwardRef;
