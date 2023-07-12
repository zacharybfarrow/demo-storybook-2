import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont190 = (
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
    <path d="M12 11Zm8.63-3.44V5.81h-9.8l-2.91 8.6-2.37-4.85H2.47v1.7h2.17L8 18.19l3.75-10.68ZM11 12.42Zm10.59.4-1.86-2.67a.3.3 0 0 0-.26-.13H14a.3.3 0 0 0-.25.12l-2 2.67-.06.18a1.25 1.25 0 0 0 1 1.23v3.46a1 1 0 0 0 1 1h6.07a1 1 0 0 0 1-1V14.2a1.24 1.24 0 0 0 .93-1.08.27.27 0 0 0-.08-.3ZM19 18h-1.3v-2.63H19Zm1.06-.34a.35.35 0 0 1-.35.34h-.09v-3a.31.31 0 0 0-.31-.32h-1.89a.31.31 0 0 0-.31.32v3h-3.44a.34.34 0 0 1-.34-.34v-3.49a1.23 1.23 0 0 0 .52-.35 1.25 1.25 0 0 0 1.87 0 1.25 1.25 0 0 0 .94.42 1.23 1.23 0 0 0 .93-.42 1.25 1.25 0 0 0 .94.42 1.22 1.22 0 0 0 .93-.42 1.28 1.28 0 0 0 .63.38Zm.31-4.06a.63.63 0 0 1-.62-.63.32.32 0 0 0-.63 0 .63.63 0 1 1-1.25 0 .31.31 0 0 0-.31-.31.31.31 0 0 0-.31.31A.63.63 0 1 1 16 13a.31.31 0 0 0-.62 0 .63.63 0 1 1-1.25 0 .31.31 0 0 0-.62 0 .63.63 0 0 1-.62.63.62.62 0 0 1-.62-.53l1.81-2.45h5.22l1.7 2.41a.63.63 0 0 1-.6.56Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont190);
export default ForwardRef;
