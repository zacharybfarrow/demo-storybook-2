import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont322 = (
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
    <path d="m21.87 9.612-9.475-7.58a.632.632 0 0 0-.79 0l-9.474 7.58a.632.632 0 0 0 .391 1.125h1.264v10.737a.632.632 0 0 0 .631.632h15.16a.632.632 0 0 0 .631-.632V10.737h1.263a.632.632 0 0 0 .398-1.125Zm-2.294-.139a.632.632 0 0 0-.631.632v10.738H5.049V10.105a.632.632 0 0 0-.632-.632h-.094l7.674-6.14 7.674 6.14Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont322);
export default ForwardRef;
