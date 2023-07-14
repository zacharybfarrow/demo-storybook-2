import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont06 = (
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
    <defs>
      <clipPath id="a">
        <path d="M0 0h24v24H0z" fill="none" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path
        d="M12 4 7 8.67V7H5v3.54l-1 .93V20h16v-8.53Zm7 15h-6v-4h-2v4H5v-7.09l7-6.54 7 6.54Z"
        fillRule="evenodd"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont06);
export default ForwardRef;
