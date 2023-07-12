import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports410 = (
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
    <path d="m16.156 12.804-1.305-2.282a3.183 3.183 0 1 0-5.513 3.182l1.304 2.283a15.9 15.9 0 0 0 6.045 5.957l.532-.959a14.817 14.817 0 0 1-5.625-5.543L10.29 13.16a2.087 2.087 0 0 1 3.613-2.087l1.304 2.282a10.62 10.62 0 0 0 5.72 4.732l.358-1.037a9.54 9.54 0 0 1-5.13-4.246Z" />
    <path d="m18.438 11.487-1.304-2.283a5.817 5.817 0 1 0-10.076 5.818l1.305 2.282a18.433 18.433 0 0 0 5.05 5.667l.653-.884a17.425 17.425 0 0 1-4.754-5.33l-1.305-2.283a4.722 4.722 0 0 1 8.165-4.715l1.304 2.282a7.979 7.979 0 0 0 4.536 3.63l.326-1.047a6.88 6.88 0 0 1-3.9-3.137Z" />
    <path d="m20.718 10.163-1.305-2.282A8.478 8.478 0 0 0 7.847 4.799a8.478 8.478 0 0 0-3.08 11.56L6.07 18.64a21.286 21.286 0 0 0 3.147 4.144l.79-.763a20.216 20.216 0 0 1-2.975-3.948L5.728 15.79a7.353 7.353 0 0 1 12.727-7.35l1.304 2.283a5.286 5.286 0 0 0 2.644 2.282l.405-1.02a4.148 4.148 0 0 1-2.09-1.823Z" />
    <path d="M3.436 17.115C.675 12.344 2.304 6.238 7.075 3.477a9.981 9.981 0 0 1 7.594-1 9.916 9.916 0 0 1 6.065 4.647l1.304 2.283.962-.548-1.304-2.283c-3.06-5.303-9.84-7.121-15.144-4.061l-.009.005c-5.3 3.062-7.117 9.84-4.056 15.143.468.811 1.037 1.56 1.692 2.23l.763-.79a10.046 10.046 0 0 1-1.506-1.988Z" />
    <path d="m13.877 14.122-1.305-2.283a.548.548 0 1 0-.949.548l1.305 2.282a13.369 13.369 0 0 0 6.24 5.544l.438-1.008a12.25 12.25 0 0 1-5.73-5.083Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports410);
export default ForwardRef;
