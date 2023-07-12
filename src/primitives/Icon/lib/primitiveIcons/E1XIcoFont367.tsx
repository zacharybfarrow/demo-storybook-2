import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont367 = (
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
    data-name="Layer 1"
    viewBox="0 0 24 24"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.043 9.913a.584.584 0 0 1 .645-.615c.467 0 .79.308 1.127 1.026L8.748 9.05A3.125 3.125 0 0 0 5.6 7.133a2.823 2.823 0 0 0-3.009 2.625q-.007.1-.006.2c0 3.266 4.054 2.912 4.054 4.625 0 .586-.38.804-.878.804-.952 0-1.478-.892-1.741-1.917L2 14.744a3.61 3.61 0 0 0 3.717 2.866c2.152 0 3.483-1.228 3.483-3.292 0-3.102-4.155-2.942-4.157-4.405Zm11.89-2.658H14.52a3.017 3.017 0 0 1 .055.571 2.817 2.817 0 0 1-.527 1.654h2.566a2.558 2.558 0 0 1 2.78 2.898 2.558 2.558 0 0 1-2.78 2.898h-3.64V10.36a2.867 2.867 0 0 1-2.4 0v7.134h6.36a4.765 4.765 0 0 0 5.064-5.122 4.76 4.76 0 0 0-5.064-5.117Zm-5.207 2h.047a1.41 1.41 0 0 0 1.435-1.384v-.05a1.435 1.435 0 0 0-2.867-.124q-.002.062 0 .124a1.41 1.41 0 0 0 1.385 1.434Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont367);
export default ForwardRef;
