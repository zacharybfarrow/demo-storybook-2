import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon23 = (
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
    <path d="M7.675 13.016c0 1.607 1.308 2.915 2.916 2.915s2.916-1.308 2.916-2.915V9.842c0-.915-.745-1.66-1.66-1.66s-1.66.745-1.66 1.66v3.368h1V9.842a.66.66 0 0 1 1.32 0v3.174c0 1.056-.86 1.916-1.916 1.916s-1.916-.86-1.916-1.916v-.442h-1v.442Zm1-3.174a3.177 3.177 0 0 1 2.422-3.082V5.74a4.178 4.178 0 0 0-3.422 4.103v1.232h1V9.842Zm5.66 5.543v1.564a5.412 5.412 0 0 0 1.684-3.925V9.842a4.178 4.178 0 0 0-3.422-4.103V6.76a3.177 3.177 0 0 1 2.422 3.082v3.182a4.4 4.4 0 0 1-.684 2.361ZM21.5 2.001h-3.435v1H21v2.934h1V2.5a.5.5 0 0 0-.5-.5ZM6.848 7.138a5.69 5.69 0 0 1 5-2.98 5.691 5.691 0 0 1 5.684 5.684v3.17c0 .1-.003.199-.008.298h1c.004-.1.008-.198.008-.298v-3.17a6.692 6.692 0 0 0-6.685-6.684 6.693 6.693 0 0 0-6.111 3.98h1.112ZM3 3.032h2.935v-1H2.5a.5.5 0 0 0-.5.5v3.435h1V3.032Zm0 15.033H2V21.5a.5.5 0 0 0 .5.5h3.435v-1H3v-2.935ZM21 21h-2.935v1H21.5a.5.5 0 0 0 .5-.5v-3.435h-1V21Zm-3.705-6.19c-.794 2.965-3.504 5.155-6.716 5.155h-.915v1h.915c3.767 0 6.928-2.633 7.746-6.155h-1.03Zm-4.46 3.155V16.84a4.4 4.4 0 0 1-2.244.613 4.434 4.434 0 0 1-4.429-4.429V9.842c0-.413.046-.815.13-1.204H5.273a6.69 6.69 0 0 0-.11 1.204v3.182a5.435 5.435 0 0 0 5.428 5.429c.8 0 1.56-.176 2.244-.488Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon23);
export default ForwardRef;
