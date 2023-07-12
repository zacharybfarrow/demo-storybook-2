import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont248 = (
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
    <path d="M18.56 14.37a4.19 4.19 0 1 0 4.19 4.19 4.18 4.18 0 0 0-4.19-4.19Zm2.62 6.28-.53.53-2.09-2.09-2.1 2.09-.53-.53L18 18.56l-2.1-2.1.53-.53 2.1 2.1 2.09-2.1.53.53-2.09 2.1ZM15 15.12V15h.13a4.92 4.92 0 0 1 1.5-1H15v-4h4v3.67a4.39 4.39 0 0 1 1 .19V4H4v16h9.84a4.39 4.39 0 0 1-.19-1H10v-4h4v1.61a5 5 0 0 1 1-1.49ZM15 5h4v4h-4ZM9 19H5v-4h4Zm0-5H5v-4h4Zm1-9h4v4h-4Zm0 9v-4h4v4Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont248);
export default ForwardRef;
