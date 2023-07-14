import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgModuleAppIcon16 = (
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
    <path d="M23 8.24v-.79a2.9 2.9 0 0 0-.08-.45c0-.13 0-.25-.06-.38s-.06-.27-.1-.41l-.09-.36-.15-.42c-.05-.11-.08-.23-.13-.34s-.13-.28-.2-.41A3.13 3.13 0 0 0 22 4.4l-.21-.4a2.82 2.82 0 0 0-.18-.29l-.32-.42c-.06-.08-.11-.16-.18-.24s-.34-.38-.52-.56l-.06-.06a7.88 7.88 0 0 0-.62-.55l-.23-.16-.43-.31-.31-.18-.39-.23-.34-.15-.38-.17c-.12-.05-.24-.08-.36-.12l-.39-.13-.36-.09-.4-.09L16 .2l-.46-.05h-1.19L14 .16l-.41.06-.37.06-.42.11-.36.09-.44.15-.33.13-.43.2c-.1.05-.2.09-.3.15s-.29.17-.43.26l-.27.16c-.17.11-.32.24-.48.36L9.57 2a6.87 6.87 0 0 0-.63.58 1.46 1.46 0 0 0-.16.19c-.13.14-.26.28-.38.43l-.21.29c-.09.12-.18.24-.26.37s-.13.22-.19.33-.15.24-.21.37-.1.23-.16.34-.11.25-.17.38l-.12.35-.08.44c0 .12 0 .23-.08.35s-.07.27-.09.41 0 .24 0 .35l-.06.43v1.68a7.38 7.38 0 1 0 8.7 7.19h.3l.45-.07.33-.05c.16 0 .31-.08.46-.12l.32-.08.47-.17.28-.1.47-.22.26-.13.46-.28.25-.15a4.7 4.7 0 0 0 .44-.34l.22-.16c.16-.14.31-.29.46-.44l.16-.14a6.53 6.53 0 0 0 .55-.63l.11-.16c.13-.17.25-.33.36-.5l.15-.26.25-.44c.05-.1.09-.2.13-.3s.13-.28.19-.42.07-.22.11-.32.1-.29.14-.43.05-.22.08-.33.07-.29.1-.43 0-.23.05-.34S23 9.16 23 9v-.71Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgModuleAppIcon16);
export default ForwardRef;
