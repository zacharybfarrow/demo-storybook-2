import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont265 = (
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
    <path d="m19.81 4.2-1.19 1.2v.38l1.47-1.48Zm.59.24-1.78 1.78v.38l2-2Zm-1.26-.39-.52.53V5l.84-.85Zm1.78.68L18.62 7v.38l2.53-2.53a1.88 1.88 0 0 0-.23-.12Zm-2.3 2.69Zm2.77-2.34-2.77 2.78v.38l3-3ZM8.82 4.91H2.13v1.31h6.69ZM21 10l2-2c0-.11 0-.22-.06-.33l-2.21 2.17Zm-.47-.35 2.35-2.34-.14-.31-2.48 2.49Zm-1-.65 2.8-2.79a1.88 1.88 0 0 0-.16-.23L19.31 8.8Zm.48.35 2.6-2.61-.12-.26-2.71 2.67Zm-1-.69L22 5.69l-.18-.21-3 3ZM16.93 19.3l.94.95 2.49-2.49-.94-1Zm5.23-8.42.13.1a4.49 4.49 0 0 0 .29-.53Zm-1.72 5.19a.69.69 0 0 0-.48.2l-.18.18.94.95.2-.18a.71.71 0 0 0 .19-.48.69.69 0 0 0-.19-.48.75.75 0 0 0-.48-.19Zm-1.9-1.7a4.19 4.19 0 1 0 4.19 4.19 4.19 4.19 0 0 0-4.19-4.19Zm2.72 3.2-3.2 3.2a.47.47 0 0 1-.25.15l-1.76.51H16a.26.26 0 0 1-.18-.07.27.27 0 0 1-.07-.25l.52-1.76a.64.64 0 0 1 .15-.25l3.19-3.2a1.17 1.17 0 0 1 1.66 1.66ZM23 8.39l-1.79 1.8.22.16L23 8.78a1.93 1.93 0 0 0 0-.24Zm-1.1 2.3.93-.93a3.88 3.88 0 0 0 .11-.49l-1.26 1.26Zm-19.77-.33h8.09V9.05H2.13Zm6.13-3.42H2.12v1.3h6.14Zm0 4.14H2.12v1.3h6.14Zm8.1 9.73 1.06-.31-.75-.75Zm-10.6-2.37-3.22-.6L1 20h11.75v-3.53L9 15.39Zm12.69-5.37a4.54 4.54 0 0 0 3.63-1.81l-3.8-2.77V4a4.54 4.54 0 0 0 .17 9.08Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont265);
export default ForwardRef;
