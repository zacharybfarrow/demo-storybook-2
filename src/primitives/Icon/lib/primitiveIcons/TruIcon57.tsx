import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon57 = (
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
    <path d="m14.029 11.964-.515-.848a2.91 2.91 0 0 1-4.392-2.843 2.91 2.91 0 0 1 2.572-2.533c1.487-.154 2.853.857 3.17 2.354.046.215.048.469.007.754a.63.63 0 0 1-1.252-.106V7.49a.496.496 0 0 0-.496-.497H11.85c-.919 0-1.666.748-1.666 1.667v.104c0 .919.747 1.667 1.666 1.667h.104a1.66 1.66 0 0 0 1.192-.504 1.622 1.622 0 0 0 2.71-.938c.056-.4.05-.771-.02-1.101-.422-1.995-2.245-3.342-4.243-3.136a3.91 3.91 0 0 0-3.457 3.405 3.919 3.919 0 0 0 .956 3.062 3.904 3.904 0 0 0 4.938.745Zm-1.402-3.652v.452a.675.675 0 0 1-.674.674h-.104a.675.675 0 0 1-.674-.674V8.66c0-.372.302-.674.674-.674h.778v.326Zm8.75 1.337-2.071-1.483V3.9a1.49 1.49 0 0 0-1.49-1.489H6.184a1.49 1.49 0 0 0-1.489 1.49v4.264L2.622 9.649c-.39.28-.622.732-.622 1.21v9.24a1.49 1.49 0 0 0 1.489 1.489h17.022A1.49 1.49 0 0 0 22 20.098V10.86c0-.48-.233-.932-.622-1.21Zm-2.071-.263 1.345.964-1.345.963V9.386Zm-14.612 0v1.927L3.35 10.35l1.345-.964ZM2.995 20.124l-.002-.025v-8.784l4.874 3.49.852-.61-3.032-2.171V3.9c0-.273.223-.496.496-.496h11.634c.273 0 .496.223.496.496v8.123l-4.31 3.086-1.136-.813a1.488 1.488 0 0 0-1.734 0l-8.138 5.827Zm1.047.471 7.67-5.49a.496.496 0 0 1 .577 0l7.669 5.49H4.042Zm16.965-.496-.002.025-6.15-4.403 6.152-4.406V20.1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon57);
export default ForwardRef;
