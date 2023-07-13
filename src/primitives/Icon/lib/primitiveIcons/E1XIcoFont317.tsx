import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont317 = (
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
    <path d="m2.75 3.5 6 7v10l5-3v-7l5.5-7ZM13 9.88l-.21.27v6.78l-3 1.8v-8.6l-.24-.28L4.92 4.5h12.27Zm5.61 4.44a4.2 4.2 0 1 0 4.19 4.19 4.19 4.19 0 0 0-4.23-4.19Zm2.62 6.29-.53.53L18.57 19l-2.1 2.1-.53-.53 2.1-2.1-2.1-2.09.53-.53 2.1 2.1 2.09-2.1.53.53-2.1 2.09Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont317);
export default ForwardRef;
