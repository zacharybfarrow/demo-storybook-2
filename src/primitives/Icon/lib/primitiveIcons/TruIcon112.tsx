import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon112 = (
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
    <path d="M21.932 9.641a1.306 1.306 0 0 0-1.26-.916H15.01l-1.75-5.384A1.306 1.306 0 0 0 12 2.425c-.585 0-1.08.36-1.26.916L8.99 8.725H3.328c-.585 0-1.08.36-1.26.916-.181.556.008 1.138.481 1.482l4.58 3.328-1.749 5.385c-.18.556.008 1.138.481 1.481.237.172.508.258.78.258.27 0 .542-.086.778-.258L12 17.99l4.58 3.328c.078.057.16.103.243.14l-.449-1.382-4.114-2.989a.442.442 0 0 0-.52 0L6.9 20.603a.429.429 0 0 1-.52 0 .429.429 0 0 1-.16-.494l1.85-5.69a.442.442 0 0 0-.161-.494l-4.84-3.517a.429.429 0 0 1-.161-.494.429.429 0 0 1 .42-.305h5.983a.442.442 0 0 0 .42-.305l1.849-5.69a.429.429 0 0 1 .42-.306c.075 0 .328.022.42.306l1.849 5.69c.06.182.229.305.42.305h5.983c.298 0 .397.234.42.305a.429.429 0 0 1-.16.494l-4.84 3.517a.441.441 0 0 0-.163.485l2.235 6.887c.454-.346.633-.916.456-1.461l-1.75-5.385 4.58-3.328c.474-.344.663-.926.482-1.482Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon112);
export default ForwardRef;
