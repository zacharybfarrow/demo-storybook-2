import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont366 = (
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
    data-name="Layer 1"
    viewBox="0 0 24 24"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.012 19.296h-.008a.996.996 0 1 0 .008 0Zm-.003 1.607h-.005a.597.597 0 1 1 .005 0ZM13.004 3h-2v.4h2ZM7.5 19h9V4h-9Zm.4-14.6h8.2v14.2H7.9ZM16.512 2H7.5a.996.996 0 0 0-1 .992V21a.996.996 0 0 0 .992 1H16.5a.996.996 0 0 0 1-.992V3a.994.994 0 0 0-.988-1Zm.588 19a.6.6 0 0 1-.595.6H7.5a.6.6 0 0 1-.6-.595V3a.6.6 0 0 1 .595-.6H16.5a.6.6 0 0 1 .6.595Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont366);
export default ForwardRef;
