import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon54 = (
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
    <path d="M15.374 7.304h3.48a.456.456 0 0 0 .322-.779l-4.392-4.391A.456.456 0 0 0 14.462 2H6.058A1.37 1.37 0 0 0 4.69 3.368v17.264A1.37 1.37 0 0 0 6.058 22h11.819a1.37 1.37 0 0 0 1.368-1.368V8.676h-.912v11.956a.456.456 0 0 1-.456.456H6.058a.456.456 0 0 1-.456-.456V3.368c0-.252.205-.456.456-.456h7.948v3.024a1.37 1.37 0 0 0 1.368 1.368Zm0-.912a.456.456 0 0 1-.456-.456v-2.38L16.37 5.01l1.383 1.383h-2.38Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon54);
export default ForwardRef;
