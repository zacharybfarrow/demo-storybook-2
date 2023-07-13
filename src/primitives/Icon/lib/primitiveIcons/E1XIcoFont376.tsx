import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont376 = (
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
    <path d="M12.416 2.035a2.5 2.5 0 0 0-2.917 2.466v.57a5.832 5.832 0 0 0-3.333 5.263v1.931c0 .413-.153.812-.431 1.117L4.23 15.049a2.167 2.167 0 0 0 1.606 3.618h2.829a3.333 3.333 0 0 0 6.666 0h2.829a2.167 2.167 0 0 0 1.606-3.62l-1.504-1.667a1.655 1.655 0 0 1-.431-1.115v-1.722a6.087 6.087 0 0 0-3.333-5.456V4.59a2.568 2.568 0 0 0-2.083-2.556Zm-.417 18.298a1.666 1.666 0 0 1-1.667-1.666h3.333A1.667 1.667 0 0 1 12 20.333Zm4.166-9.79v1.722c0 .826.307 1.623.86 2.236l1.507 1.666a.5.5 0 0 1-.371.833H5.837a.5.5 0 0 1-.37-.833l1.505-1.666c.554-.613.86-1.41.86-2.236v-1.93a4.166 4.166 0 0 1 2.777-3.923.835.835 0 0 0 .557-.786V4.501a.834.834 0 0 1 .979-.82.904.904 0 0 1 .687.91v1.042a.833.833 0 0 0 .544.78c1.642.611 2.79 2.309 2.79 4.13Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont376);
export default ForwardRef;
