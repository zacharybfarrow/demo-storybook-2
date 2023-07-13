import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont126 = (
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
      d="M1.44 1.44h21.12v21.12H1.44z"
      style={{
        fill: "none",
      }}
    />
    <path d="M17.06 18.16h.72v-.23l-.17-.16a4.51 4.51 0 0 1-.55.39ZM3.2 4.08v14.08h9.88a3.94 3.94 0 0 1-1-.85H9.8v-3.55h1.49a3.4 3.4 0 0 1 .36-.88H9.8V9.36h4.4V11a4 4 0 0 1 .86-.1h.24V9.36h4.43v3.52h-1.26a4.28 4.28 0 0 1 .36.88h.9v3.55h-1.67l.17.17h.48l.65.65h1.44V4.08Zm1.1.85h4.4v3.55H4.3Zm4.4 12.38H4.26v-3.55H8.7Zm0-4.43H4.26V9.36H8.7Zm5.5-4.4H9.8V4.93h4.4Zm5.53 0H15.3V4.93h4.43Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont126);
export default ForwardRef;
