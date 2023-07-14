import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont327 = (
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
    <path d="M12 2a10 10 0 1 0 10 10A10.004 10.004 0 0 0 12 2ZM3 12a8.985 8.985 0 0 1 14.993-6.696L5.303 17.992A8.953 8.953 0 0 1 3 12Zm9 9a8.953 8.953 0 0 1-5.993-2.304l12.69-12.689A8.985 8.985 0 0 1 12 21Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont327);
export default ForwardRef;
