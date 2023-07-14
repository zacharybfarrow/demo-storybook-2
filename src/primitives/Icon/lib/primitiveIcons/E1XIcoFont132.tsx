import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont132 = (
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
    <path d="M3.2 5v14h17.6V5Zm12.1.85h4.4v3.51h-4.4Zm-11 0h4.4v3.51H4.3Zm4.4 12.34H4.27v-3.55H8.7Zm0-4.43H4.27v-3.52H8.7Zm5.5 4.43H9.8v-3.55h4.4Zm0-4.43H9.8v-3.52h4.4Zm0-4.4H9.8V5.81h4.4Zm5.53 8.83H15.3v-3.55h4.43Zm0-4.43H15.3v-3.52h4.43Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont132);
export default ForwardRef;
