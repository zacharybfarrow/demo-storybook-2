import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon52 = (
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
    <path d="M12 2c-4.894 0-8.977 3.534-9.834 8.183h.926C3.936 6.038 7.609 2.908 12 2.908c5.013 0 9.092 4.079 9.092 9.092S17.013 21.092 12 21.092c-4.86 0-8.843-3.835-9.08-8.638h10.168l-2.293 2.293.642.643 3.068-3.069a.454.454 0 0 0 0-.642L11.437 8.61l-.642.643 2.293 2.293H2.01c-.007.15-.011.302-.011.454 0 5.514 4.486 10 10 10s10-4.486 10-10S17.514 2 12 2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon52);
export default ForwardRef;
