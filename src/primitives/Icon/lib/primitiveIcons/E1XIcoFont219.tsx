import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont219 = (
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
    <path d="M18.92 13.29a.48.48 0 0 0-.74.62l1.11 1.23H13.2a.54.54 0 0 0-.37.18c-.68.8-.92.8-2.09.86h-.31a.48.48 0 0 0-.49.44l-.06 3.56a.48.48 0 0 0 .43.5.43.43 0 0 0 .43-.43l.12-3.2a3.11 3.11 0 0 0 2.52-1h6.9a.52.52 0 0 0 .43-.24.51.51 0 0 0-.06-.5Z" />
    <path d="M8.52 15.75a4.5 4.5 0 0 1-2.89-4.43 8.53 8.53 0 0 1 .43-2.52v-.25A.06.06 0 0 0 6 8.49a.06.06 0 0 0-.06-.06l-.06-.06-.06-.06-2.4-1.23 2.21-1.23.06-.07a.06.06 0 0 0 .06-.06L6 5.48a2.35 2.35 0 0 1 1.91-1.17h5a3.38 3.38 0 0 0-1.11 2.34v.18c0 .06.07.06.07.06a.06.06 0 0 0 .06.06l4.61 5.11c.06.12.25.12.37.12a.46.46 0 0 0 .31-.12.57.57 0 0 0 .06-.68l-4.49-5c.12-1.29 1.78-2.22 1.78-2.22a.44.44 0 0 0 .25-.49.54.54 0 0 0-.43-.37H7.91a3.44 3.44 0 0 0-2.59 1.5l-.18.2-2.89 1.65a.5.5 0 0 0-.25.43.62.62 0 0 0 .25.43L5 8.92a8.75 8.75 0 0 0-.37 2.46 5.38 5.38 0 0 0 3.26 5.17v3.63a.48.48 0 0 0 .43.5.53.53 0 0 0 .49-.43l.06-4a.54.54 0 0 0-.35-.5Z" />
    <circle cx={7.6} cy={6.34} r={0.74} />
    <path d="M21.69 10.65s-2.58-1.05-5.17-2a.57.57 0 0 0-.61.24.6.6 0 0 0 .24.62c1.6.55 3.14 1.17 4.13 1.6-2.9 1.17-8.06 3.14-9.42 3.14a3.14 3.14 0 0 1 0-6.28 3 3 0 0 1 .62.06.48.48 0 0 0 .52-.4.47.47 0 0 0-.37-.55 5.41 5.41 0 0 0-.8-.13 4.07 4.07 0 0 0 0 8.13c2 0 9.91-3.26 10.83-3.63A.47.47 0 0 0 22 11c0-.17-.12-.23-.31-.35Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont219);
export default ForwardRef;
