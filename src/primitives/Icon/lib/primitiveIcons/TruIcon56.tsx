import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon56 = (
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
    <path d="M12.496 5.792h-.992v4.227h.992V5.792Zm-.992 6.468h.992v-.991h-.992v.991Zm9.874-2.61-2.072-1.484V3.9a1.49 1.49 0 0 0-1.49-1.489H6.184a1.49 1.49 0 0 0-1.489 1.49v4.264L2.622 9.649c-.39.28-.622.732-.622 1.21v9.24a1.49 1.49 0 0 0 1.489 1.489h17.022A1.49 1.49 0 0 0 22 20.098V10.86c0-.48-.233-.932-.622-1.21Zm-2.072-.264 1.345.964-1.345.963V9.386Zm-14.612 0v1.927L3.35 10.35l1.345-.964ZM2.995 20.124l-.002-.025v-8.784l4.876 3.492.852-.61-3.034-2.173V3.9c0-.273.223-.496.496-.496h11.634c.273 0 .496.223.496.496v8.123l-4.31 3.086-1.136-.813a1.489 1.489 0 0 0-1.734 0l-8.138 5.827Zm1.047.471 7.67-5.49a.496.496 0 0 1 .577 0l7.669 5.49H4.042Zm16.965-.496-.002.025-6.15-4.403 6.152-4.406V20.1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon56);
export default ForwardRef;
