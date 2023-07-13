import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon137 = (
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
    <path
      d="M11.544 16.594h.907v-.907h-.907v.907ZM19.02 4.89a9.927 9.927 0 0 0-7.093-2.88 9.937 9.937 0 0 0-7.052 2.98c-3.872 3.927-3.827 10.273.1 14.145a9.926 9.926 0 0 0 6.344 2.855v-.91a9.017 9.017 0 0 1-5.706-2.592c-3.57-3.52-3.611-9.29-.09-12.86a9.034 9.034 0 0 1 6.41-2.709H12c2.405 0 4.67.928 6.383 2.618a9.034 9.034 0 0 1 2.71 6.411 9.034 9.034 0 0 1-2.619 6.45 9.025 9.025 0 0 1-5.792 2.68v.912a9.928 9.928 0 0 0 6.44-2.955A9.937 9.937 0 0 0 22 11.942a9.937 9.937 0 0 0-2.98-7.052Zm-6.573 2.302h-.908v7.328h.908V7.192Z"
      style={{
        fill: "#004364",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon137);
export default ForwardRef;
