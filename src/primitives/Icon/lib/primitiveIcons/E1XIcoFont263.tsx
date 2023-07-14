import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont263 = (
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
    <path d="m19.81 4.2-1.19 1.2v.38l1.47-1.48Zm-.67-.15-.52.53V5l.84-.85Zm-.52 3.37Zm2.3-2.69L18.62 7v.38l2.53-2.53a1.88 1.88 0 0 0-.23-.12Zm-.52-.29-1.78 1.78v.38l2-2Zm.08 5.21 2.35-2.34-.09-.31-2.48 2.49ZM21 10l2-2c0-.11 0-.22-.06-.33l-2.21 2.17Zm-1.47-1 2.8-2.79a1.88 1.88 0 0 0-.16-.23L19.31 8.8Zm-.47-.34L22 5.69l-.18-.21-3 3Zm1 .69 2.6-2.61-.12-.26-2.76 2.67Zm1.38-4.23-2.82 2.74v.38l3-3Zm-5.86 10.47a4.19 4.19 0 1 0 5.92 0 4.19 4.19 0 0 0-5.92 0Zm6.3 3.34h-3v3h-.74v-3h-3v-.75h3v-3h.74v3h3Zm.28-8 .13.1a4.49 4.49 0 0 0 .29-.53Zm-3.71 2.19a4.54 4.54 0 0 0 3.63-1.81l-3.8-2.77V4a4.54 4.54 0 0 0 .17 9.08Zm3.45-2.38.93-.93a3.88 3.88 0 0 0 .11-.49l-1.26 1.26ZM23 8.39l-1.79 1.8.22.16L23 8.78a1.93 1.93 0 0 0 0-.24Zm-20.87 2h8.09V9.05H2.13Zm6.69-5.48H2.13v1.31h6.69ZM5.76 18.44l-3.22-.6L1 20h11.75v-3.53L9 15.39Zm2.5-11.5H2.12v1.3h6.14Zm0 4.14H2.12v1.3h6.14Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont263);
export default ForwardRef;
