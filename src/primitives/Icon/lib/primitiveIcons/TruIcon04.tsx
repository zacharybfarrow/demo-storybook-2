import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon04 = (
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
    role="img"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m16.783 16.229-.68-.004-2.921 2.933a4.214 4.214 0 0 0 5.823-.153 4.23 4.23 0 0 0 1.22-2.757l-3.442-.02Zm3.442-.48a4.23 4.23 0 0 0-1.22-2.754 4.23 4.23 0 0 0-2.755-1.22v3.95h.352l-.003.003 3.626.02ZM12.167 9.45l2.714.905a.374.374 0 0 0 .441-.164l2.05-3.433c.197.07.406.116.628.116A1.875 1.875 0 1 0 16.125 5c0 .544.235 1.03.605 1.372l-1.897 3.177-2.714-.905a.375.375 0 0 0-.44.163l-2.06 3.431A1.858 1.858 0 0 0 9 12.125c-.287 0-.556.07-.799.185L6.3 9.775a.374.374 0 0 0-.622.032l-3 5a.375.375 0 1 0 .644.386l2.713-4.522 1.567 2.09A1.86 1.86 0 0 0 7.125 14a1.875 1.875 0 0 0 3.75 0c0-.547-.238-1.034-.611-1.377l1.903-3.172ZM18 3.875A1.127 1.127 0 0 1 19.125 5 1.127 1.127 0 0 1 18 6.125 1.127 1.127 0 0 1 16.875 5 1.127 1.127 0 0 1 18 3.875Zm-9 11.25A1.127 1.127 0 0 1 7.875 14 1.127 1.127 0 0 1 9 12.875 1.127 1.127 0 0 1 10.125 14 1.127 1.127 0 0 1 9 15.125Zm2.773 1.1a4.21 4.21 0 0 0 1.056 2.578l2.569-2.579h-3.625Zm.006-.5h3.971v-3.95a4.225 4.225 0 0 0-3.97 3.95Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon04);
export default ForwardRef;
