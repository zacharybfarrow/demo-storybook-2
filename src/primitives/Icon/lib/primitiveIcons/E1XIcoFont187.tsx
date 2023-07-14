import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont187 = (
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
    <path d="M12 15.28a.55.55 0 0 0-.55.55.55.55 0 0 0 1.1 0 .55.55 0 0 0-.55-.55Zm0-7.65a.55.55 0 0 0-.55.54.55.55 0 1 0 1.1 0 .55.55 0 0 0-.55-.54Zm0 3.82a.55.55 0 1 0 .55.55.55.55 0 0 0-.55-.55ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2ZM8 13.25a.53.53 0 0 1 .16.39v3.28a.55.55 0 0 0 .55.55.55.55 0 1 1 0 1.09 1.65 1.65 0 0 1-1.64-1.64v-3.05L5.6 12.39a.56.56 0 0 1 0-.78l1.48-1.48V7.08a1.65 1.65 0 0 1 1.64-1.64.55.55 0 1 1 0 1.09.55.55 0 0 0-.55.55v3.28a.54.54 0 0 1-.16.39L6.76 12Zm4 4.22a1.64 1.64 0 1 1 1.64-1.64A1.65 1.65 0 0 1 12 17.47Zm0-3.83A1.64 1.64 0 1 1 13.64 12 1.65 1.65 0 0 1 12 13.64Zm0-3.83a1.64 1.64 0 1 1 1.64-1.64A1.64 1.64 0 0 1 12 9.81Zm6.4 2.58-1.48 1.48v3.05a1.65 1.65 0 0 1-1.64 1.64.55.55 0 1 1 0-1.09.55.55 0 0 0 .55-.55v-3.28a.53.53 0 0 1 .16-.39L17.24 12 16 10.75a.54.54 0 0 1-.16-.39V7.08a.55.55 0 0 0-.55-.55.55.55 0 1 1 0-1.09 1.65 1.65 0 0 1 1.64 1.64v3.05l1.48 1.48a.56.56 0 0 1-.01.78Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont187);
export default ForwardRef;
