import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont83 = (
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
    <path d="M16.51 11.84a.68.68 0 0 1 .39-.24h.26l.92-1-.32-.14a1.33 1.33 0 0 0-.53-.13 1.42 1.42 0 0 0-1 .49 6.82 6.82 0 0 0-.79 1.18 5.68 5.68 0 0 0-.51-1.07 1 1 0 0 0-.76-.51 1.13 1.13 0 0 0-.81.48 1.42 1.42 0 0 0-.41.88.4.4 0 0 0 .1.26l.2.14.26.09.07-.26a1.44 1.44 0 0 1 .19-.41l.1-.07a1 1 0 0 1 .26.42l.23.54s.07.17.17.46l.11.3v.06l-.25.42a3.82 3.82 0 0 1-.61.81.71.71 0 0 1-.41.22l-.15-.08-.22-.21-.94 1 .23.17a1.18 1.18 0 0 0 .72.22 1.64 1.64 0 0 0 1.09-.5 5.4 5.4 0 0 0 .9-1.22 6.13 6.13 0 0 0 .56 1.17 1 1 0 0 0 .77.51 1.29 1.29 0 0 0 .84-.41 1.18 1.18 0 0 0 .46-.79.48.48 0 0 0-.24-.4l-.27-.17-.11.3a.75.75 0 0 1-.18.33l-.15.06a1.23 1.23 0 0 1-.33-.48 9.85 9.85 0 0 1-.48-1.16l-.07-.2.08-.14a4.41 4.41 0 0 1 .63-.92Zm-5.25-6-2.91 8.6L6 9.56H2.94v1.7h2.17l3.33 6.93 3.78-10.68h8.84v-1.7Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont83);
export default ForwardRef;
