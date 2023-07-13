import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports342 = (
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
    <path d="m12 6.373.52 1.614.494 1.53 1.36-.855 1.437-.902-.639 1.57-.605 1.49 1.592.22 1.68.232-1.5.793-1.42.751 1.078 1.192 1.137 1.258-1.658-.356-1.57-.338.059 1.606.063 1.694-1.041-1.338L12 15.266l-.987 1.268-1.04 1.338.062-1.694.06-1.606-1.571.338-1.658.356 1.137-1.258 1.078-1.192-1.42-.751-1.5-.793 1.68-.232 1.592-.22-.605-1.49-.639-1.57 1.436.902 1.361.854.494-1.53.52-1.613m0-4.071-1.71 5.301-4.718-2.962 2.098 5.16-5.518.764 4.924 2.605-3.736 4.132 5.446-1.17-.206 5.566L12 17.302l3.42 4.397-.206-5.567 5.446 1.17-3.736-4.132 4.924-2.605-5.518-.763 2.098-5.16-4.718 2.961Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports342);
export default ForwardRef;
