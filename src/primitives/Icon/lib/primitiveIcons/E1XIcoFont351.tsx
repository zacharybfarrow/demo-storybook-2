import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont351 = (
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
    data-name="Layer 1"
    viewBox="0 0 24 24"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.771 11h1.315v2H6.771zM4.5 11h1.277v2H4.5zM11.024 7.524l-1.41 1.41L11.67 11H9.08v2h2.59l-2.042 2.042 1.42 1.41L15.5 12l-4.476-4.476z" />
    <path d="M13.5 5h5v14h-5v1h6V4h-6v1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont351);
export default ForwardRef;
