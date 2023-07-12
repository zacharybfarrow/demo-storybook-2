import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon139 = (
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
    <path d="M12 8.71a.575.575 0 0 0 .575-.575V3.9a.575.575 0 0 0-1.15 0v4.235c0 .317.257.575.575.575Zm2.941-3.08a.575.575 0 1 0-.482 1.045A5.866 5.866 0 0 1 12 17.87a5.85 5.85 0 0 1-4.151-1.72 5.866 5.866 0 0 1 1.693-9.477.575.575 0 1 0-.483-1.043A7.016 7.016 0 0 0 12 19.02a7.016 7.016 0 0 0 2.941-13.39Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon139);
export default ForwardRef;
