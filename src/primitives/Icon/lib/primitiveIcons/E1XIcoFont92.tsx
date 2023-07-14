import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont92 = (
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
    <path d="M11.28 21.64H2.15V2.37a.25.25 0 0 0-.49 0v19.76h9.62a.25.25 0 1 0 0-.49ZM3.45 11.58h-.62v9.2h.62Zm5.39 1h-.61v8.22h.61Zm5.77 6.19a.46.46 0 0 0-.45.46.46.46 0 0 0 .91 0 .46.46 0 0 0-.46-.48Zm-4.54-4.47h-.61v6.5h.61ZM7.49 6.43h-.61v14.35h.61ZM6.14 2.26h-.61v18.52h.61ZM4.79 5.69h-.61v15.09h.61Zm8 14a.46.46 0 0 0-.46.46.46.46 0 0 0 .91 0 .46.46 0 0 0-.44-.49Zm7.27-4.09a1.37 1.37 0 1 0 1.36 1.37 1.36 1.36 0 0 0-1.35-1.4ZM18 13.36a.63.63 0 1 0 .63.62.62.62 0 0 0-.63-.62Zm3.64.62a.68.68 0 1 0 .68.68.68.68 0 0 0-.66-.66Zm-4.32 1.59a.46.46 0 0 0-.45.46.45.45 0 0 0 .45.45.46.46 0 0 0 .48-.48.47.47 0 0 0-.46-.43Zm4.41-9.21a3.9 3.9 0 1 0-3.9 3.9 3.91 3.91 0 0 0 3.92-3.9Zm-6.8 0a2.9 2.9 0 0 1 2.9-2.9A2.9 2.9 0 1 1 15 6.36Zm-.56 10.12a.68.68 0 1 0 .68.68.68.68 0 0 0-.66-.68Zm5.22-3.18a.46.46 0 0 0 .46.45.45.45 0 0 0 .45-.45.46.46 0 0 0-.45-.46.47.47 0 0 0-.44.46Zm-2.72 4.09a.91.91 0 1 0 .91.91.91.91 0 0 0-.89-.91Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont92);
export default ForwardRef;
