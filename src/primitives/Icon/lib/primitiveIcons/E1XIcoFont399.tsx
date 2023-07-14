import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont399 = (
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
    role="img"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.616 9.712a1.216 1.216 0 1 0-2.432 0 1.216 1.216 0 0 0 2.432 0Zm1.36 6.672v-3c0-1.384-1.232-2.136-2.568-2.136S4.84 12 4.84 13.384v3.008c-.004.3.236.548.536.552h.008c.304 0 .512-.248.512-.552V13.68c0-.096.176-.096.176 0v7.928a.608.608 0 1 0 1.216 0v-4.656a.12.12 0 1 1 .232 0v4.656a.608.608 0 1 0 1.216 0V13.68c0-.096.184-.096.184 0v2.704a.528.528 0 0 0 .52.552c.296 0 .536-.24.536-.536v-.016Zm2.496.48c-.08-.16-.32-.264-.496-.264h-.848c-.176 0-.416.104-.496.264-.344.672-.664 2.184-.664 2.184a.238.238 0 1 0 .448.16l.448-1.456v.496l-.68 2.168h.744v1.504c0 .156.124.284.28.288a.28.28 0 0 0 .28-.28v-1.432a.064.064 0 0 1 .128 0v1.424c0 .156.124.284.28.288a.28.28 0 0 0 .28-.288v-1.504h.744l-.68-2.168v-.496l.44 1.456a.24.24 0 1 0 .448-.16c.016.008-.312-1.504-.656-2.184Zm9.904-8.888L19.84 6.424V3h-2.208v2.08l-5.176-3.168a.864.864 0 0 0-.92 0l-9.92 6.064a.88.88 0 1 0 .912 1.504L12 3.696l9.456 5.784a.882.882 0 0 0 .92-1.504Zm-6.39 3.408a1.216 1.216 0 1 0-.002 0h.001Zm-3.778 4.4a.648.648 0 1 0-1.296 0 .648.648 0 0 0 1.296 0Zm5.68-3.568c-.144-.296-.592-.488-.92-.488h-1.584c-.328 0-.776.2-.92.488-.64 1.264-1.248 4.088-1.248 4.088a.443.443 0 0 0 .832.304l.832-2.72v.92l-1.28 4.056h1.384v2.816a.528.528 0 1 0 1.056 0v-2.672a.144.144 0 0 1 .12-.152.136.136 0 0 1 .12.15v2.674a.528.528 0 1 0 1.056 0v-2.816h1.384l-1.272-4.056v-.928l.824 2.72a.443.443 0 0 0 .832-.304c.032.008-.576-2.816-1.216-4.08Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont399);
export default ForwardRef;
