import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon117 = (
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
    <path d="M10.72 2c-4.797 0-8.7 3.903-8.7 8.7s3.903 8.7 8.7 8.7 8.7-3.903 8.7-8.7S15.516 2 10.72 2Zm0 16.477c-4.29 0-7.778-3.489-7.778-7.777s3.489-7.778 7.778-7.778 7.777 3.49 7.777 7.778-3.489 7.777-7.777 7.777Zm7.425-.964c-.208.226-.426.444-.653.65L21.328 22l.652-.652-3.835-3.835Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon117);
export default ForwardRef;
