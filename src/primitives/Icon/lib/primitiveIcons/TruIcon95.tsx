import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon95 = (
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
    <path d="M5.38 19.705a.433.433 0 0 1-.433-.433V10.53l-.866.69v8.052A1.3 1.3 0 0 0 5.38 20.57h8.996a7.957 7.957 0 0 1-.634-.866H5.38Z" />
    <path d="M21.392 13.546H19.92V9.56l1.541 1.227.54-.677-2.08-1.657v-.005h-.006L12.809 2.79a1.293 1.293 0 0 0-1.618 0L7.243 5.934V4.115a.433.433 0 0 0-.433-.433H4.514a.433.433 0 0 0-.433.433v4.338L2 10.11l.54.677 9.19-7.32a.43.43 0 0 1 .54 0l6.783 5.403v4.676h-5.036a.433.433 0 0 0-.433.433c0 3.596 1.28 6.038 3.915 7.464a.432.432 0 0 0 .412 0c2.634-1.426 3.914-3.868 3.914-7.464a.433.433 0 0 0-.433-.433ZM4.947 4.548h1.43v2.076l-1.43 1.139V4.548Zm12.758 16.017c-2.117-1.23-3.157-3.198-3.248-6.153h6.16l-2.912 2.913-1.232-1.232-.612.613 1.538 1.538a.433.433 0 0 0 .612 0l2.874-2.875c-.27 2.43-1.3 4.104-3.18 5.196Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon95);
export default ForwardRef;
