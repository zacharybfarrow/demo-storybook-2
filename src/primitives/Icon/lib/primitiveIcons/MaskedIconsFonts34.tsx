import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts34 = (
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
    <path d="M14.28 15.29a6.29 6.29 0 0 0 .72-1.38 6.44 6.44 0 0 0 .38-2.2 6.3 6.3 0 0 0-.21-1.64 6.42 6.42 0 0 0-.52-1.39 6.59 6.59 0 0 0-4.93-3.55A7.19 7.19 0 0 0 8.67 5a6.67 6.67 0 1 0 0 13.33 6.47 6.47 0 0 0 2.15-.33 6.64 6.64 0 0 0 3.46-2.71ZM8.67 7a2.17 2.17 0 0 1 0 4.34A2.21 2.21 0 0 1 6.5 9.21 2.17 2.17 0 0 1 8.67 7Zm0 9.33A4.77 4.77 0 0 1 4.58 14c.67-1 2.92-1.5 4.09-1.5s3.41.5 4.08 1.5a4.65 4.65 0 0 1-4.08 2.37Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts34);
export default ForwardRef;
