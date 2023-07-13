import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont103 = (
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
    <path d="M15.55 22a.54.54 0 0 1-.43-.22L11.68 17l-3.1 4.6a.52.52 0 0 1-.53.23.55.55 0 0 1-.43-.4L3.29 2.65a.53.53 0 0 1 .8-.57l16.38 10.14a.54.54 0 0 1 .25.53.55.55 0 0 1-.39.44L15 14.63l3.44 4.8a.53.53 0 0 1-.12.74l-2.46 1.73a.5.5 0 0 1-.31.1Zm-3.88-6.48a.53.53 0 0 1 .43.22l3.57 5 1.55-1.11-3.57-5a.53.53 0 0 1-.07-.49.52.52 0 0 1 .36-.33l4.93-1.33L4.61 3.65 8.38 20l2.85-4.25a.51.51 0 0 1 .43-.23Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont103);
export default ForwardRef;
