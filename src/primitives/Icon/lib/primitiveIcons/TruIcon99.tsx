import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon99 = (
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
    <path d="M21.167 18.837a3.053 3.053 0 0 1-3.05-3.049v-5.176c0-3.006-2.103-5.529-4.915-6.178v-.896A1.54 1.54 0 0 0 11.664 2a1.54 1.54 0 0 0-1.538 1.538v.952c-2.7.728-4.692 3.196-4.692 6.122v5.176a3.053 3.053 0 0 1-3.05 3.05v.895a3.95 3.95 0 0 0 3.946-3.945v-5.176a5.452 5.452 0 0 1 5.446-5.445 5.452 5.452 0 0 1 5.446 5.445v5.176a3.94 3.94 0 0 0 1.444 3.05H6.703a5.33 5.33 0 0 1-.8.895h3.482A2.282 2.282 0 0 0 11.664 22a2.282 2.282 0 0 0 2.28-2.267h7.223a.448.448 0 0 0 0-.896ZM12.306 4.294a6.387 6.387 0 0 0-.53-.024c-.255 0-.507.017-.754.047v-.779a.643.643 0 0 1 1.284 0v.756Zm-.642 16.81a1.385 1.385 0 0 1-1.383-1.37h2.766a1.385 1.385 0 0 1-1.383 1.37Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon99);
export default ForwardRef;
