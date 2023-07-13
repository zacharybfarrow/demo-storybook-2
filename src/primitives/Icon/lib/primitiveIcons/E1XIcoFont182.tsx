import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont182 = (
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
    <path d="M19.94 17.77a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5Zm0 4a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5ZM13.38 6.86a2.5 2.5 0 1 0-2.5-2.5 2.51 2.51 0 0 0 2.5 2.5Zm0-4a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5ZM5.42 17a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5Zm0 4a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5ZM15.55 7.44a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5Zm0 4a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5ZM13.42 18a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5Zm0 4a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Zm5.81-14.8a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.5 2.54Zm0-4a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.46ZM10 11.61a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.5 2.5Zm0-4a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5Zm2.95 7.93a2.5 2.5 0 1 0-2.5 2.5 2.5 2.5 0 0 0 2.47-2.5ZM10.42 17a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5ZM6.6 13.74a2.5 2.5 0 1 0-2.5 2.5 2.5 2.5 0 0 0 2.5-2.5Zm-4 0a1.5 1.5 0 1 1 1.5 1.5 1.5 1.5 0 0 1-1.5-1.5Zm17.3 2.63a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.5 2.5Zm0-4a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5Zm-15-3.44a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.48 2.5Zm0-4a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.48-1.5Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont182);
export default ForwardRef;
