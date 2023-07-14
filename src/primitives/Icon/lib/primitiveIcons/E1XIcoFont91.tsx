import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont91 = (
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
      d="M15.65 15.44 19.08 12l-3.43-3.44L16.7 7.5l4.5 4.5-4.5 4.5-1.05-1.06zM8.35 8.56 4.92 12l3.43 3.44-1.06 1.06-4.5-4.5 4.5-4.5 1.06 1.06z"
      className="cls-1"
    />
    <path d="m8.526 19.727 5.526-15.96 1.418.49-5.527 15.961z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont91);
export default ForwardRef;
