import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont386 = (
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
    <path d="M5.84 13.046 3.338 7.77a11.996 11.996 0 0 0 7.7-2.827l.457 1.805 1.011-.266-.674-2.589a.544.544 0 0 0-.854-.26 11.577 11.577 0 0 1-8.455 3.082.544.544 0 0 0-.484.745l2.854 6.03a4.633 4.633 0 0 0 4.177 2.644h.049V15.09a3.578 3.578 0 0 1-3.28-2.045Zm3.85-1.754c.164-.024.33-.026.494-.008l.115-1.039a2.996 2.996 0 0 0-3.296 3.41l1.033-.152a1.952 1.952 0 0 1 1.654-2.21ZM5.454 9.18l.174 1.027A2.594 2.594 0 0 0 7.59 8.522l-.99-.327c-.19.503-.622.874-1.147.985Zm16.46 1.67a.544.544 0 0 0-.452-.24 15.92 15.92 0 0 1-4.861-.713 16.05 16.05 0 0 1-4.182-2.577.544.544 0 0 0-.495-.109c-.413.12-.239-.147-2.175 7.243a4.894 4.894 0 0 0 9.136 3.328h.021c3.263-6.9 3.23-6.59 3.007-6.933Zm-6.705 1.032-.544.903a1.74 1.74 0 0 0-1.631 0l-.544-.886a2.719 2.719 0 0 1 2.719-.017Zm2.099 4.303a2.795 2.795 0 1 1-5.172-2.122c.816 1.43 3.59 2.458 5.248 1.914a2.79 2.79 0 0 1-.076.208Zm.18-1.812a1.707 1.707 0 0 0-1.268-1.044l.147-1.033c.96.157 1.761.814 2.104 1.723l-.984.354Zm-7.222-6.966a1.631 1.631 0 0 1-1.49.005l-.544.903a2.6 2.6 0 0 0 2.578-.022l-.544-.886Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont386);
export default ForwardRef;
