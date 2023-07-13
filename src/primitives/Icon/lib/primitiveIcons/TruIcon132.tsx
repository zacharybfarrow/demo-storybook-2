import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon132 = (
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
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.26 15.47h.92v-.92h-.92v.92Zm-.001-2.104h.922V5.929h-.922v7.437ZM10.719 2c-4.796 0-8.7 3.903-8.7 8.7s3.904 8.7 8.7 8.7 8.7-3.903 8.7-8.7S15.517 2 10.72 2Zm0 16.477c-4.288 0-7.777-3.489-7.777-7.777s3.489-7.778 7.778-7.778 7.777 3.49 7.777 7.778-3.489 7.777-7.777 7.777Zm7.426-.964c-.208.226-.426.444-.653.65L21.328 22l.652-.652-3.835-3.835Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon132);
export default ForwardRef;
