import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts08 = (
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
    <path d="M16.57 12.2A7 7 0 0 0 17 9.81a6.88 6.88 0 0 0-13.75 0 6.81 6.81 0 0 0 .56 2.71 3.41 3.41 0 0 0-.92.85 1.49 1.49 0 0 0-.27.82v4.37h2.5a2.5 2.5 0 1 0 5 0h3.76a2.5 2.5 0 0 0 5 0h2.5v-3.48Zm-6.45-8a5.63 5.63 0 0 1 5.63 5.62 5.4 5.4 0 0 1-.3 1.72l-.78-.47h-.56a4 4 0 0 0 .21-1.25 4.2 4.2 0 1 0-8.1 1.5 12.77 12.77 0 0 0-1.31.57 5.5 5.5 0 0 1-.41-2.08 5.62 5.62 0 0 1 5.62-5.62Zm3 5.62a2.91 2.91 0 0 1-.29 1.25H7.47a2.91 2.91 0 0 1-.29-1.25 2.95 2.95 0 0 1 5.89 0Zm-5.45 10a1.25 1.25 0 1 1 1.26-1.25 1.25 1.25 0 0 1-1.31 1.24Zm8.76 0a1.25 1.25 0 1 1 1.24-1.25 1.26 1.26 0 0 1-1.29 1.24Zm3.74-2.5h-1.64a2.48 2.48 0 0 0-4.31 0H9.78a2.48 2.48 0 0 0-4.31 0H3.88V14.1l.23-.26a4.28 4.28 0 0 1 .93-.64 15.68 15.68 0 0 1 2-.87h7.23l5.79 3.48Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts08);
export default ForwardRef;
