import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts164 = (
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
    <path d="m13.21 18.4-.21-.19-.22-.14-.28-.16-.26-.13-.32-.14-.27-.12-.39-.15-.26-.08-.57-.18-.7-.2a2 2 0 0 1-3.95 0l-.7.2H5l-.59.2-.2.07-.42.16-.25.1-.33.16-.21.11-.29.17-.21.13-.25.2-.14.12-.1.12a8.44 8.44 0 0 0 11.45 0l-.09-.12-.15-.13m8.69-2.6-.14-.13-.25-.19-.22-.14-.3-.16-.26-.13-.32-.15-.27-.11-.4-.15-.21-.08-.54-.19-.7-.21a2 2 0 0 1-3.95 0l-.7.21-.6.2-.2.07-.41.15-.25.11-.34.16-.24.12-.3.17-.2.13-.26.2-.13.12-.1.11a8.41 8.41 0 0 0 11.45 0l-.1-.11" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts164);
export default ForwardRef;
