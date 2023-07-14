import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports340 = (
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
    role="img"
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
    <path d="m12 5.9 1.007 2.55.424 1.074 1.105-.339 2.621-.802-1.366 2.377-.576 1.001.953.653 2.263 1.549-2.71.414-1.142.174.084 1.152.199 2.735-2.014-1.86-.848-.785-.848.784-2.014 1.86.2-2.734.084-1.152-1.142-.174-2.71-.414 2.262-1.549.953-.653-.576-1.001-1.366-2.377 2.621.802 1.105.339.424-1.075L12 5.9m0-3.404L9.83 7.99 4.183 6.26l2.943 5.123-4.874 3.337 5.84.893-.43 5.892L12 17.495l4.339 4.01-.43-5.892 5.84-.893-4.874-3.337 2.943-5.123-5.649 1.73Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports340);
export default ForwardRef;
