import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont331 = (
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
    <circle cx={7.686} cy={12.087} r={1.198} data-name="Ellipse 19" />
    <circle cx={11.978} cy={12.087} r={1.198} data-name="Ellipse 20" />
    <circle cx={16.27} cy={12.087} r={1.198} data-name="Ellipse 21" />
    <path
      d="M12 2a10 10 0 1 0 10 10A10.014 10.014 0 0 0 12 2Zm0 17.625a7.604 7.604 0 1 1 7.604-7.603A7.604 7.604 0 0 1 12 19.625Z"
      data-name="Path 2062"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont331);
export default ForwardRef;
