import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont261 = (
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
    role="img"
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
    <path d="M20.59 5.81h-9.8l-2.91 8.6-2.33-4.85H2.47v1.7h2.17L8 18.19l3.75-10.68h8.84Z" />
    <path
      d="M13.73 12.17A1 1 0 0 0 13 14a1.06 1.06 0 0 0 .75.31 1 1 0 0 0 .74-.31 1 1 0 0 0 .31-.74 1 1 0 0 0-1-1ZM16 15.88h2.93v-.58H16Zm2.93-2.66H16v.56h2.93ZM16 14.79h3.83v-.57H16Zm4-3.88h-7.49a1 1 0 0 0-.74.31 1.06 1.06 0 0 0-.31.75v4.6a1 1 0 0 0 .31.75 1 1 0 0 0 .74.3H20a1 1 0 0 0 .74-.3 1 1 0 0 0 .31-.75V12A1.06 1.06 0 0 0 20 10.91Zm.57 5.66a.58.58 0 0 1-.57.57h-7.49a.56.56 0 0 1-.4-.17.54.54 0 0 1-.17-.4v-.2h3.88v-.53q0-.52-.78-.78a4.19 4.19 0 0 0-1.31-.27 3.41 3.41 0 0 0-1 .14 4.36 4.36 0 0 0-.85.39V12a.57.57 0 0 1 .17-.41.56.56 0 0 1 .4-.17H20a.54.54 0 0 1 .4.17.57.57 0 0 1 .17.41ZM16 12.74h3.83v-.61H16Z"
      data-name="Path 79"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont261);
export default ForwardRef;
