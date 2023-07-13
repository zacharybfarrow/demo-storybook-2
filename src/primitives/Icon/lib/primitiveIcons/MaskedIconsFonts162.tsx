import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts162 = (
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
    <path d="M11.34 9.66c0 .23 0 .47-.08.72-.88 0-1.21-1.33-1.75-2.55C7.61 9.45 4 10.13 4 10.13v-.41a1.33 1.33 0 0 0-.66 1.42 1.5 1.5 0 0 0 1 1.26 3.75 3.75 0 0 0 2 3v1.32l-.58.15a2 2 0 0 0 3.94 0l-.58-.15V15.4a3.92 3.92 0 0 0 2-3 1.46 1.46 0 0 0 1-1.27 1.3 1.3 0 0 0-.78-1.48m8.54-2.73a5.88 5.88 0 0 1-.07.71c-.88 0-1.21-1.32-1.75-2.54-1.91 1.61-5.53 2.3-5.53 2.3v-.41a1.34 1.34 0 0 0-.65 1.42 1.49 1.49 0 0 0 1 1.26V9.1l.17 1c.19.54.51 1.19 1.1 1.19s1.26-.6 2.1-.6c.85 0 1.37.6 2.1.6s.91-.65 1.11-1.19l.16-1v.57a1.47 1.47 0 0 0 1-1.26 1.29 1.29 0 0 0-.79-1.48m-2.22 5.9a3.94 3.94 0 0 1-1.38.39 4 4 0 0 1-1.38-.39V14l-.59.15a2 2 0 0 0 3.95 0l-.55-.15Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts162);
export default ForwardRef;
