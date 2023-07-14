import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports379 = (
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
    <path d="M16.74 11.48c-.2 0-.39.038-.584.06V7.569c0-.554-.208-1.108-.624-1.454-.415-.347-.9-.624-1.454-.624h-.069c-.277-1.177-1.385-2.077-2.7-2.077h-5.54A2.778 2.778 0 0 0 3 6.184v5.539c0 1.316.9 2.354 2.077 2.7v.07c0 .554.208 1.107.623 1.454.416.346.9.623 1.454.623h4.344c-.002.058-.017.112-.017.17a5.26 5.26 0 1 0 5.26-5.26ZM5.077 7.57v6.093a2.017 2.017 0 0 1-1.385-1.939v-5.54c0-1.176.9-2.076 2.078-2.076h5.539c.9 0 1.662.554 1.938 1.384H7.154c-.554 0-1.107.208-1.454.624-.346.415-.623.9-.623 1.454Zm2.077 8.308a1.389 1.389 0 0 1-1.384-1.384V7.569c0-.762.623-1.385 1.384-1.385h6.924c.762 0 1.385.623 1.385 1.385v4.016l.115.034a5.247 5.247 0 0 0-4.01 4.258H7.154ZM17.3 17.284v3.953h-.997v-3.953H12.35v-.997h3.953v-3.952h.997v3.952h3.952v.997H17.3Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports379);
export default ForwardRef;
