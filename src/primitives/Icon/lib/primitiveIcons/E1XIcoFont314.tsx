import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont314 = (
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
    <path d="M12 7.56a1.28 1.28 0 1 0-1.28-1.28A1.28 1.28 0 0 0 12 7.56Zm4.66 1.37-3.59.5h-2.14l-3.59-.5a.65.65 0 0 0-.68.61.65.65 0 0 0 .48.78l3.72.53v2.34L8.85 18a.71.71 0 0 0 .38.92.73.73 0 0 0 .93-.39L12 14.12l1.84 4.44a.72.72 0 0 0 .92.39.71.71 0 0 0 .38-.92l-2-4.84v-2.34l3.72-.53a.66.66 0 0 0 .48-.78.65.65 0 0 0-.68-.61ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 19a9 9 0 1 1 9-9 9 9 0 0 1-9 9Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont314);
export default ForwardRef;
