import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont17 = (
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
        <path d="M-.01-.01h24v24h-24z" fill="none" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path
        d="m14.77 8.55-3.43 3.44 3.43 3.45-1.06 1.06-4.5-4.51 4.5-4.49 1.06 1.05z"
        fillRule="evenodd"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont17);
export default ForwardRef;
