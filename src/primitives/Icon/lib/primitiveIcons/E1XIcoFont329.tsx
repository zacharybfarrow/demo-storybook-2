import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont329 = (
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
    <g data-name="Group 4218">
      <path
        d="M21.89 19.297 12.66 3.912a.77.77 0 0 0-1.32 0L2.11 19.297a.77.77 0 0 0 .66 1.165h18.46a.77.77 0 0 0 .66-1.165Zm-17.762-.374L12 5.803l7.872 13.12Z"
        data-name="Path 2057"
      />
      <path
        d="M11.23 9.692v3.847a.77.77 0 0 0 1.54 0V9.692a.77.77 0 1 0-1.54 0Z"
        data-name="Path 2058"
      />
      <path
        d="M12 15.077a.77.77 0 0 0-.77.77v.768a.77.77 0 0 0 1.54 0v-.769a.77.77 0 0 0-.77-.769Z"
        data-name="Path 2059"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont329);
export default ForwardRef;
