import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont118 = (
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
    viewBox="0 0 38 7"
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
      <clipPath id="a">
        <path d="M0 0h38v7H0z" fill="none" />
      </clipPath>
    </defs>
    <g data-name="DragBar Base vert 1" clipPath="url(#a)">
      <path
        d="M3 4v3H0a3.5 3.5 0 0 0 3-3Zm0-1a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v1a3.5 3.5 0 0 0 3 3H3Z"
        data-name="Union 9"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont118);
export default ForwardRef;
