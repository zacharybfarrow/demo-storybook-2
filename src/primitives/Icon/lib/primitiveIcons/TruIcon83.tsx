import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon83 = (
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
    <path d="M17.77 17.387h.933v-.933h-.932v.933Zm1.963-3.21h-1.03v-1.694c0-.772-.629-1.4-1.401-1.4h-.778V7.74c0-3.165-2.575-5.74-5.74-5.74s-5.74 2.575-5.74 5.74v3.342h-.777c-.773 0-1.401.629-1.401 1.401V20.6c0 .773.628 1.401 1.4 1.401h13.036c.608 0 1.126-.39 1.32-.934H4.266a.468.468 0 0 1-.467-.467v-8.116c0-.257.21-.467.467-.467h13.035c.257 0 .467.21.467.467v1.695h-7.567c-.772 0-1.4.628-1.4 1.4v2.685c0 .772.628 1.4 1.4 1.4h9.531c.773 0 1.401-.628 1.401-1.4v-2.684c0-.773-.628-1.401-1.4-1.401Zm-4.143-3.095H5.978V7.74c0-2.65 2.156-4.806 4.806-4.806S15.59 5.09 15.59 7.74v3.342Zm4.61 7.18c0 .258-.21.468-.467.468h-9.53a.468.468 0 0 1-.468-.467v-2.684c0-.258.21-.467.467-.467h9.531c.258 0 .467.21.467.467v2.684Zm-8.967-.875h.933v-.933h-.933v.933Zm4.359 0h.932v-.933h-.932v.933Zm-2.18 0h.933v-.933h-.933v.933Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon83);
export default ForwardRef;
