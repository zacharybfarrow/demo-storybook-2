import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont333 = (
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
    <path d="M9.238 11.402a2.648 2.648 0 1 0 2.648-2.648 2.647 2.647 0 0 0-2.648 2.648Zm7.944 6.62c0-1.762-3.528-2.649-5.296-2.649-1.767 0-5.295.887-5.295 2.648v1.324h10.59ZM7.101 6.536v-.854a1.027 1.027 0 0 0-1.027-1.027H3.027A1.026 1.026 0 0 0 2 5.682V8.73a1.027 1.027 0 0 0 1.027 1.028h3.047A1.027 1.027 0 0 0 7.1 8.729v-.786Zm-3.917-.697h2.733v2.733H3.184ZM19.5 5.655a1.5 1.5 0 1 1-1.5 1.5 1.502 1.502 0 0 1 1.5-1.5m0-1a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5ZM19.919 11.131a.392.392 0 0 0-.555 0l-1.569 1.57.555.554.9-.9v.23a5.033 5.033 0 0 1-1.749 3.801 2.728 2.728 0 0 1 .436.654 5.807 5.807 0 0 0 2.097-4.454v-.23l.9.899.554-.555ZM5.076 12.356l.9.899.554-.555-1.569-1.569a.392.392 0 0 0-.554 0l-1.57 1.57.555.554.9-.9v.23a5.795 5.795 0 0 0 1.719 4.106 3.231 3.231 0 0 1 .52-.58 5.026 5.026 0 0 1-1.455-3.525Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont333);
export default ForwardRef;
