import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon120 = (
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
    <path d="M21.07 4.255c-.16 4.071-1.013 7.412-2.6 10.175-1.488 2.594-3.606 4.632-6.467 6.223-2.862-1.591-4.98-3.63-6.468-6.223C3.824 11.45 2.964 7.799 2.91 3.283h17.208l.907-.907H2.454A.454.454 0 0 0 2 2.829c0 4.89.899 8.832 2.748 12.053 1.613 2.809 3.915 4.996 7.039 6.688a.453.453 0 0 0 .432 0c3.124-1.692 5.426-3.88 7.039-6.688C21.044 11.77 21.94 7.984 22 3.325l-.93.93ZM9.444 10.533l-.641.642 2.167 2.167a.454.454 0 0 0 .642 0l5.847-5.847-.641-.642-5.527 5.527-1.847-1.847Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon120);
export default ForwardRef;
