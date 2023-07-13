import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts46 = (
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
    <path d="m16.72 15.41.13.06-.13-.06M12.51 15.34l.12-.06-.12.06M12.83 15.21l.1-.04-.1.04M12.23 15.47l.12-.06-.12.06M16.43 15.28l.13.06-.13-.06M14.1 9.68l.2-.05-.2.05M13.22 15.08l.01-.01-.01.01M16.14 15.17l.1.04-.1-.04M17.21 15.71l.07.06-.07-.06M15.84 15.07l.02.01-.02-.01M11.79 15.77l.07-.05-.07.05M11.98 15.62l.1-.07-.1.07M16.98 15.55l.11.07-.11-.07M20.3 13.84l.11.04-.11-.04M20.6 13.95l.13.06-.13-.06M20 13.74l.02.01-.02-.01M20.89 14.08l.12.06-.12-.06M21.15 14.22l.1.07-.1-.07M17 13.88l.1-.04-.1.04M15.96 14.44l.06-.06-.06.06M16.39 14.14l.12-.06-.12.06M16.68 14l.12-.05-.12.05M16.15 14.29l.1-.07-.1.07" />
    <path d="m17.21 15.71-.12-.09-.09-.07-.13-.08-.13-.06-.16-.07-.13-.06-.19-.07h-.1l-.28-.09-.38-.12a1 1 0 0 1-1.93 0l-.34.1-.29.09h-.1l-.2.07-.12.06-.16.07-.12.06-.15.08-.1.07-.12.1h-.07v.06a4.13 4.13 0 0 0 5.59 0v-.06l-.07-.06m4.23-1.27-.07-.06-.12-.09-.1-.07-.26-.01-.13-.06-.14-.08h-.13l-.19-.07h-.11l-.3-.18-.34-.1a1 1 0 0 1-1.92 0l-.34.1-.29.1h-.1l-.2.07-.13.05-.16.08-.12.06-.14.08-.1.06-.13.1-.06.06-.05.06a4.12 4.12 0 0 0 5.58 0v-.06" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts46);
export default ForwardRef;
