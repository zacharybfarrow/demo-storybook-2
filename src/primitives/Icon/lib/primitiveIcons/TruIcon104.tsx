import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon104 = (
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
    <path d="M16.702 11.082h-.777V7.74c0-3.165-2.575-5.74-5.74-5.74s-5.74 2.575-5.74 5.74v3.342h-.778c-.773 0-1.401.629-1.401 1.401V20.6c0 .773.628 1.401 1.4 1.401h13.036c.773 0 1.401-.628 1.401-1.401v-.76h-.934v.76c0 .258-.21.467-.467.467H3.667a.468.468 0 0 1-.467-.467v-8.116c0-.257.21-.467.467-.467h13.035c.258 0 .467.21.467.467v2.014h.934v-2.014c0-.772-.628-1.4-1.4-1.4Zm-1.711 0H5.378V7.74c0-2.65 2.156-4.806 4.807-4.806S14.99 5.09 14.99 7.74v3.342Zm1.978 5.14-1.014.33v-1.066h-.934v1.065l-1.013-.329-.289.888 1.014.33-.627.862.756.549.626-.862.626.862.756-.55-.626-.861 1.013-.33-.288-.888Zm4.765.888-.289-.888-1.013.33v-1.066h-.934v1.065l-1.013-.329-.289.888 1.013.33-.626.862.756.549.626-.862.626.862.756-.55-.626-.861 1.013-.33Zm-13.72-.888-1.013.33v-1.066h-.934v1.065l-1.013-.329-.289.888 1.014.33-.627.862.756.549.626-.862.627.862.755-.55-.626-.861 1.013-.33-.288-.888Zm4.478 0-1.014.33v-1.066h-.934v1.065l-1.013-.329-.289.888 1.014.33-.627.862.756.549.626-.862.627.862.755-.55-.626-.861 1.013-.33-.288-.888Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon104);
export default ForwardRef;
