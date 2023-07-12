import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon94 = (
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
    <path d="M13.584 13.087h2.735c.239 0 .433-.194.433-.433V9.919a.433.433 0 0 0-.433-.433h-2.735a.433.433 0 0 0-.433.433v2.735c0 .24.194.433.433.433Zm.433-2.735h1.869v1.869h-1.87v-1.87ZM7.681 13.087h2.735c.24 0 .433-.194.433-.433V9.919a.433.433 0 0 0-.433-.433H7.681a.433.433 0 0 0-.433.433v2.735c0 .24.194.433.433.433Zm.433-2.735h1.87v1.869h-1.87v-1.87ZM7.248 18.512c0 .239.194.433.433.433h2.735c.24 0 .433-.194.433-.433v-2.736a.433.433 0 0 0-.433-.433H7.681a.433.433 0 0 0-.433.433v2.736Zm.866-2.303h1.87v1.87h-1.87v-1.87Z" />
    <path d="M19.92 8.915V8.91h-.006l-7.105-5.658a1.293 1.293 0 0 0-1.618 0L7.243 6.396V4.577a.433.433 0 0 0-.433-.433H4.514a.433.433 0 0 0-.433.433v4.338L2 10.572l.54.677 9.19-7.32a.431.431 0 0 1 .54 0l6.783 5.403v10.402a.433.433 0 0 1-.433.433h-1.868v-4.39a.433.433 0 0 0-.433-.434h-2.735a.433.433 0 0 0-.433.433v4.39H5.38a.433.433 0 0 1-.433-.432v-8.742l-.866.69v8.052a1.3 1.3 0 0 0 1.299 1.299h13.24a1.3 1.3 0 0 0 1.3-1.3v-9.711l1.54 1.227.54-.677-2.08-1.657ZM6.376 7.085l-1.43 1.14V5.01h1.43v2.076Zm9.509 13.082h-1.87v-3.958h1.87v3.958Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon94);
export default ForwardRef;
