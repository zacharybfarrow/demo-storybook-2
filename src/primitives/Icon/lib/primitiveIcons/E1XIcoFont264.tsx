import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont264 = (
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
    <path d="m21.39 5.08-2.77 2.78v.38l3-3Zm-2.77 2.34Zm.52-3.37-.52.53V5l.84-.85Zm1.26.39-1.78 1.78v.38l2-2Zm.52.29L18.62 7v.38l2.53-2.53a1.88 1.88 0 0 0-.23-.12ZM19.53 9l2.8-2.79a1.88 1.88 0 0 0-.16-.23L19.31 8.8Zm-.47-.34L22 5.69l-.18-.21-3 3ZM21 10l2-2c0-.11 0-.22-.06-.33l-2.21 2.17Zm-.47-.35 2.35-2.34-.14-.31-2.48 2.49ZM20 9.31l2.6-2.61-.12-.26-2.7 2.71Zm-.2-5.11-1.18 1.2v.38l1.47-1.48Zm-1.26 10.17a4.19 4.19 0 1 0 4.19 4.19 4.19 4.19 0 0 0-4.19-4.19Zm2.63 6.28-.53.53-2.1-2.09-2.1 2.09-.52-.53L18 18.56l-2.09-2.1.52-.53 2.1 2.1 2.1-2.1.53.53-2.1 2.1Zm1-9.77.13.1a4.49 4.49 0 0 0 .29-.53ZM23 8.39l-1.79 1.8.22.16L23 8.78a1.93 1.93 0 0 0 0-.24Zm-1.1 2.3.93-.93a3.88 3.88 0 0 0 .11-.49l-1.26 1.26Zm-3.45 2.38a4.54 4.54 0 0 0 3.63-1.81l-3.8-2.77V4a4.54 4.54 0 0 0 .17 9.08ZM8.26 6.94H2.12v1.3h6.14Zm-6.13 3.42h8.09V9.05H2.13Zm3.63 8.08-3.22-.6L1 20h11.75v-3.53L9 15.39ZM8.82 4.91H2.13v1.31h6.69Zm-.56 6.17H2.12v1.3h6.14Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont264);
export default ForwardRef;
