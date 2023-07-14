import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgModuleAppIcon20 = (
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
      d="M9.17 14.18Zm3.95-2.92Zm2.23 4.81A7.35 7.35 0 0 0 8 9.2a9.08 9.08 0 0 0-.91.05l-.39.05.06.39a8.17 8.17 0 0 0 8 6.78h.54Zm-5.66-2.43a7.35 7.35 0 0 1-2-3.67L8 10a6.59 6.59 0 0 1 4.6 1.8 6.53 6.53 0 0 1 2 3.91 7.4 7.4 0 0 1-4.91-2.07Z"
      clipPath="url(#a)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgModuleAppIcon20);
export default ForwardRef;
