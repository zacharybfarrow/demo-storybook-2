import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon12 = (
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
    <path d="M6.675 7.782 8.65 9.216l-.754 2.32a1.364 1.364 0 0 0 .503 1.55c.248.179.53.269.814.269.283 0 .567-.09.814-.27L12 11.651l1.974 1.434c.494.36 1.133.36 1.628 0 .494-.36.692-.967.503-1.548l-.754-2.32 1.974-1.435c.494-.359.692-.967.503-1.548s-.706-.957-1.317-.957h-2.44l-.754-2.32A1.364 1.364 0 0 0 12 2c-.611 0-1.128.376-1.317.957l-.754 2.32H7.49c-.61 0-1.128.376-1.317.957a1.364 1.364 0 0 0 .503 1.548ZM7.05 6.52a.448.448 0 0 1 .44-.319h2.774c.2 0 .378-.128.44-.318l.857-2.64A.448.448 0 0 1 12 2.923c.079 0 .343.023.439.32l.858 2.639c.061.19.239.318.439.318h2.775c.311 0 .415.245.439.32s.084.333-.168.516l-2.245 1.63a.462.462 0 0 0-.168.517l.858 2.64a.448.448 0 0 1-.168.515.448.448 0 0 1-.542 0l-2.246-1.63a.46.46 0 0 0-.542-.001l-2.246 1.631a.448.448 0 0 1-.542 0 .448.448 0 0 1-.168-.516l.858-2.64a.462.462 0 0 0-.168-.515L7.218 7.036a.448.448 0 0 1-.168-.517Zm14.012 5.795a1.404 1.404 0 0 0-.245-.112v3.711a.462.462 0 0 1-.24.405L12 21.012l-8.577-4.694a.461.461 0 0 1-.24-.405v-2.408c0-.237.158-.357.226-.397a.453.453 0 0 1 .457-.008l7.912 4.33a.461.461 0 0 0 .444 0l7.21-3.946v-1.052L12 16.499 4.31 12.29a1.373 1.373 0 0 0-1.372.024 1.373 1.373 0 0 0-.678 1.191v2.408c0 .507.276.972.72 1.215l8.798 4.815a.461.461 0 0 0 .444 0l8.798-4.815c.444-.243.72-.708.72-1.215v-2.408c0-.494-.253-.94-.678-1.191Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon12);
export default ForwardRef;
