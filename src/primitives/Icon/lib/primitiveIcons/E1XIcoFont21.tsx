import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont21 = (
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
      d="M18 3.6H3.6v16.8h16.8V6ZM8.4 4.8h7.2v3.6H8.4Zm8.4 14.4H7.2v-6h9.6Zm2.4 0H18V12H6v7.2H4.8V4.8h2.4v4.8h9.6V4.8h.7l1.7 1.7Z"
      clipPath="url(#a)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont21);
export default ForwardRef;
