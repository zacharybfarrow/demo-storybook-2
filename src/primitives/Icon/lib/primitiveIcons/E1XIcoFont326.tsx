import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont326 = (
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
    <path d="M11.995 2.007a9.98 9.98 0 0 0-8.647 14.988l-1.301 3.9A.833.833 0 0 0 3.1 21.947L7 20.647a9.992 9.992 0 1 0 4.995-18.64Zm0 18.32a8.294 8.294 0 0 1-4.444-1.296.833.833 0 0 0-.446-.129.816.816 0 0 0-.262.044l-2.692.897.898-2.691a.833.833 0 0 0-.086-.708 8.327 8.327 0 1 1 7.032 3.882Z" />
    <circle cx={11.94} cy={12} r={1.198} />
    <circle cx={7.149} cy={12} r={1.198} />
    <circle cx={16.731} cy={12} r={1.317} />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont326);
export default ForwardRef;
