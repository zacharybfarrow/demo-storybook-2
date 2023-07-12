import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont200 = (
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
    <path d="M19.94 7.24h-6.77l-.91-1.82a.29.29 0 0 0-.26-.17H5.05a.3.3 0 0 0-.26.17l-1 2v11.03a.3.3 0 0 0 .29.3h15.86a.3.3 0 0 0 .29-.3V7.53a.29.29 0 0 0-.29-.29ZM5.23 5.84h6.59l.69 1.4h-8Zm14.41 12.32H4.35V7.83h15.29Zm-8.33-1.42h1.41v-.9h-1.41Zm-2.44-4.59 1 1 1.45-1.45v1.82h1.41V11.7l1.43 1.44 1-1L12 9Zm2.44 3h1.41v-.93h-1.41Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont200);
export default ForwardRef;
