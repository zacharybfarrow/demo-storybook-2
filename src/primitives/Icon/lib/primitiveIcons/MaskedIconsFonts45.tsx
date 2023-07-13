import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts45 = (
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
    <path d="m16.72 15.41.13.06-.13-.06M12.51 15.34l.12-.06-.12.06M12.83 15.21l.1-.04-.1.04M12.23 15.47l.12-.06-.12.06M16.43 15.28l.13.06-.13-.06M14.1 9.68l.2-.05-.2.05M13.22 15.08l.01-.01-.01.01M16.14 15.17l.1.04-.1-.04M17.21 15.71l.07.06-.07-.06M15.84 15.07l.02.01-.02-.01M11.79 15.77l.07-.05-.07.05M11.98 15.62l.1-.07-.1.07M16.98 15.55l.11.07-.11-.07M20.3 13.84l.11.04-.11-.04M20.6 13.95l.13.06-.13-.06M20 13.74l.02.01-.02-.01M20.89 14.08l.12.06-.12-.06M21.15 14.22l.1.07-.1-.07M17 13.88l.1-.04-.1.04M15.96 14.44l.06-.06-.06.06M16.39 14.14l.12-.06-.12.06M16.68 14l.12-.05-.12.05M16.15 14.29l.1-.07-.1.07M14.78 9.59a3.58 3.58 0 0 0-.48 0h-.2a1.81 1.81 0 0 0-1.37 1.8v.2a7 7 0 0 0 2.69-1.12c.27.59.43 1.24.86 1.24a2.16 2.16 0 0 0 0-.35 1.57 1.57 0 0 0-1.51-1.86m5 2.67c-.36 0-.62-.29-1-.29-.41 0-.67.29-1 .29s-.44-.31-.53-.58l-.09-.5v.6s.14.72.4.89A2.53 2.53 0 0 0 18 13a2.15 2.15 0 0 0 .68.18 2.15 2.15 0 0 0 .68-.18 2.53 2.53 0 0 0 .57-.33c.26-.17.4-.89.4-.89v-.6l-.08.5c-.1.27-.26.58-.54.58m-.79-4a3.88 3.88 0 0 0-.48 0h-.2a1.81 1.81 0 0 0-1.37 1.8v.2a7.21 7.21 0 0 0 2.7-1.12c.26.59.42 1.24.85 1.24v-.35a1.58 1.58 0 0 0-1.52-1.86" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts45);
export default ForwardRef;
