import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon133 = (
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
    <path d="M2.91 17.887V4.747H2v13.14c0 .753.612 1.365 1.365 1.365l18.628-.04v-.91l-18.628.04a.455.455 0 0 1-.455-.455Zm18.635-13.14H18.61v.91h1.833L13.501 12.6l-2.36-2.36a.455.455 0 0 0-.643 0l-6.35 6.352.643.643 6.03-6.03 2.359 2.36a.455.455 0 0 0 .643 0l7.267-7.266v1.84H22V5.203a.455.455 0 0 0-.455-.455Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon133);
export default ForwardRef;
