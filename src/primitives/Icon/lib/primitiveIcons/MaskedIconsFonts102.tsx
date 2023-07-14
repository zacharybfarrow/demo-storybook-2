import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts102 = (
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
    id="Layer_1"
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
    <defs>
      <style>{".cls-1{fill-rule:evenodd}"}</style>
    </defs>
    <path
      d="M14.73 16.58 17.31 14l-2.58-2.58.8-.79L18.9 14l-3.37 3.38-.8-.8zM9.27 11.42 6.69 14l2.58 2.58-.8.8L5.1 14l3.37-3.37.8.79z"
      className="cls-1"
    />
    <path d="m9.395 19.8 4.143-11.963 1.058.366-4.142 11.963z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts102);
export default ForwardRef;
