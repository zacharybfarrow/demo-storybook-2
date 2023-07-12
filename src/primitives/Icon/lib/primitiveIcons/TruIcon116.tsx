import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon116 = (
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
    <path d="M11.541 15.84h.908V8.519h-.908v7.32Zm.006 2.072h.906v-.906h-.906v.906Zm10.261.707L13.32 4.246l-.527.893 8.234 13.941c.12.205.043.387.003.456s-.156.229-.394.229H3.364c-.238 0-.355-.16-.394-.229s-.118-.251.003-.456l9.292-15.724a1.35 1.35 0 0 0-1.437.64L2.192 18.62a1.347 1.347 0 0 0-.01 1.367c.245.43.687.687 1.182.687h17.272c.495 0 .937-.257 1.183-.687.245-.43.241-.941-.01-1.367Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon116);
export default ForwardRef;
