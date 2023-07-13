import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont279 = (
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
      d="m8.18 9.92 1-.49a1 1 0 0 0 .49-1.16l-1.31-3.7A.94.94 0 0 0 7.64 4a3.22 3.22 0 0 0-2.85.84A2.68 2.68 0 0 0 3.9 7c.35 6 7.17 12.75 13.1 13.11a2.69 2.69 0 0 0 2.23-.85 3.13 3.13 0 0 0 .81-2.9.92.92 0 0 0-.63-.71l-3.7-1.29a.92.92 0 0 0-1.16.49l-.44 1a10.14 10.14 0 0 1-5.93-5.93Z"
      style={{
        fillRule: "evenodd",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont279);
export default ForwardRef;
