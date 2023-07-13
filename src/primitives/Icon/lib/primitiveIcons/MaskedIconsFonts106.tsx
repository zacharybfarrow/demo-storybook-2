import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts106 = (
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
    <path d="M4.16 15.43h5v-1h-5Zm3 1.75h-.91v2H5v-2.34h-.84v3.28h5v-1h-2Zm1.16-5.41H4.16v1h5V9.51h-.88Zm0-4.59H7.07v-2H6.2v2H5v-2.3h-.84v3.28h5V4.88h-.88ZM19.67 10h-8.43a1.06 1.06 0 0 0-1.06 1v8.44a1.05 1.05 0 0 0 1.06 1.05h8.43a1.05 1.05 0 0 0 1.06-1.05V11a1.06 1.06 0 0 0-1.06-1Zm-6.33 9.5h-2.1v-5.31h2.1Zm6.33 0H14.4v-5.31h5.27Zm0-6.33h-8.43V11h8.43Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts106);
export default ForwardRef;
