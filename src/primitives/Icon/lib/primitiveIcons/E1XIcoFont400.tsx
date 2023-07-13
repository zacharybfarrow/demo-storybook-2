import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont400 = (
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
    <path d="M12 5.808A1.704 1.704 0 1 0 12 2.4a1.704 1.704 0 0 0 0 3.408Zm3.592 3.424c0-1.936-1.72-2.984-3.6-2.984S8.4 7.304 8.4 9.232v4.208a.76.76 0 0 0 .76.776c.424 0 .712-.344.712-.776V9.656c0-.136.248-.136.248 0v11.096a.856.856 0 0 0 1.712.001v-6.521a.16.16 0 0 1 .32 0v6.52a.856.856 0 0 0 1.712.001V9.656c0-.136.256-.136.256 0v3.784c0 .424.296.776.72.776a.752.752 0 0 0 .744-.776l.008-4.208Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont400);
export default ForwardRef;
