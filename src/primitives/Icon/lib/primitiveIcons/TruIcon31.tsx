import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon31 = (
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
    <path d="M18.181 6.928a8.738 8.738 0 0 0-4.871-2.439c.158-.25.251-.546.251-.864 0-.896-.729-1.625-1.625-1.625s-1.624.729-1.624 1.625c0 .326.097.629.263.883A8.737 8.737 0 0 0 5.73 7.016a8.746 8.746 0 0 0-2.534 6.243c.03 4.246 3.077 7.777 7.09 8.573v-.878c-3.422-.755-6.029-3.722-6.222-7.33H6.07v-.856H4.066a7.88 7.88 0 0 1 2.02-4.88l1.418 1.418.606-.606-1.417-1.417a7.88 7.88 0 0 1 4.879-2.021v2.004h.856V5.262c1.942.102 3.756.9 5.151 2.276a7.889 7.889 0 0 1 2.356 5.23H17.93v.857h2.004a7.879 7.879 0 0 1-2.02 4.88l-1.418-1.418-.606.606 1.417 1.416a7.88 7.88 0 0 1-4.879 2.022v-2.004h-.856v2.862a8.879 8.879 0 0 0 .49.01 8.745 8.745 0 0 0 6.207-2.622c1.65-1.674 2.55-3.891 2.534-6.243s-.948-4.555-2.622-6.206Zm-6.245-2.535a.77.77 0 1 1 .002-1.538.77.77 0 0 1-.002 1.538Zm1.716 10.31 3.415-5.976a.428.428 0 0 0-.584-.584l-5.976 3.415a.428.428 0 0 0-.16.16l-3.414 5.975a.428.428 0 0 0 .584.584l5.976-3.415a.428.428 0 0 0 .16-.159Zm-5.196 2.051 2.357-4.125 1.768 1.768-4.125 2.357Zm2.963-4.73 4.125-2.358-2.357 4.125-1.768-1.767Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon31);
export default ForwardRef;
