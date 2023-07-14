import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont23 = (
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
    <path
      d="M16.61 12.46h-5v1h5Zm1 2h-6v1h6Zm-2-4h-4v1h4Zm3 6h-7v1h7Zm-7 2v1h8v-1ZM8 4.61l-.07-.07-3.54 3.53.7.7L7.5 6.36v12.82h1V6.36l2.4 2.41.7-.7-3.54-3.53Z"
      clipPath="url(#a)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont23);
export default ForwardRef;
