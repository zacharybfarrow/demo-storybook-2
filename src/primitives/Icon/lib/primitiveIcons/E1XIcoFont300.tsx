import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont300 = (
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
    <path d="m10.39 13.75.94.95 2.49-2.5-.94-.94Zm3.51-3.24a.69.69 0 0 0-.48.2l-.18.19.94.94.2-.18a.69.69 0 0 0 .19-.48.71.71 0 0 0-.19-.48.75.75 0 0 0-.48-.19Zm-4.08 4.75 1.06-.26-.75-.76Zm9.58-4.36a3.81 3.81 0 0 0-1.75-3 3.62 3.62 0 0 0-3.06-.29A5.26 5.26 0 0 0 10.08 5a5.35 5.35 0 0 0-5.3 5.05A4.55 4.55 0 0 0 6.24 19h11.52a4.25 4.25 0 0 0 4.56-4.08 4.12 4.12 0 0 0-2.92-4.02ZM17.76 18H6.24a3.6 3.6 0 0 1-.89-7.09.48.48 0 0 0 .37-.47A4.4 4.4 0 0 1 10.08 6 4.3 4.3 0 0 1 14 8.37a.48.48 0 0 0 .65.22 2.64 2.64 0 0 1 2.53.09 2.87 2.87 0 0 1 1.33 2.6.48.48 0 0 0 .4.47 3.18 3.18 0 0 1 2.48 3.13C21.36 16.62 20 18 17.76 18ZM12 8.81A4.19 4.19 0 1 0 16.19 13 4.2 4.2 0 0 0 12 8.81ZM14.72 12l-3.2 3.2a.56.56 0 0 1-.25.16l-1.76.51h-.06a.27.27 0 0 1-.25-.33l.52-1.75a.61.61 0 0 1 .15-.26l3.19-3.2A1.17 1.17 0 0 1 14.72 12Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont300);
export default ForwardRef;
