import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts151 = (
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
    <path
      d="M14.73 12.17A1 1 0 0 0 14 14a1.06 1.06 0 0 0 .75.31 1 1 0 0 0 .74-.31 1 1 0 0 0 .31-.74 1 1 0 0 0-1-1ZM17 15.88h2.93v-.58H17Zm2.93-2.66H17v.56h2.93ZM17 14.79h3.83v-.57H17Zm4-3.88h-7.49a1 1 0 0 0-.74.31 1.06 1.06 0 0 0-.31.75v4.6a1 1 0 0 0 .31.75 1 1 0 0 0 .74.3H21a1 1 0 0 0 .74-.3 1 1 0 0 0 .31-.75V12A1.06 1.06 0 0 0 21 10.91Zm.57 5.66a.58.58 0 0 1-.57.57h-7.49a.56.56 0 0 1-.4-.17.54.54 0 0 1-.17-.4v-.2h3.88v-.53q0-.52-.78-.78a4.19 4.19 0 0 0-1.31-.27 3.41 3.41 0 0 0-1 .14 4.36 4.36 0 0 0-.85.39V12a.57.57 0 0 1 .17-.41.56.56 0 0 1 .4-.17H21a.54.54 0 0 1 .4.17.57.57 0 0 1 .17.41ZM17 12.74h3.83v-.61H17Z"
      data-name="Path 79"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts151);
export default ForwardRef;
