import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon89 = (
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
    <path d="M21.867 12.564a1.255 1.255 0 0 0-.233-1.448l-2.229-2.229A10.403 10.403 0 0 0 12 5.82c-2.797 0-5.427 1.09-7.404 3.067l-2.23 2.23a1.254 1.254 0 0 0 0 1.771l2.23 2.23A10.44 10.44 0 0 0 12 18.18a10.44 10.44 0 0 0 7.405-3.062L21 13.523l-.59-.59-1.596 1.594c-3.757 3.757-9.87 3.757-13.628 0l-2.229-2.23a.418.418 0 0 1 0-.59l2.23-2.23A9.573 9.573 0 0 1 12 6.656a9.573 9.573 0 0 1 6.814 2.823l3.053 3.086ZM8.687 12c0 1.827 1.486 3.314 3.313 3.314s3.314-1.487 3.314-3.314S13.827 8.686 12 8.686 8.686 10.173 8.686 12Zm5.791 0c0 1.367-1.111 2.478-2.478 2.478S9.522 13.367 9.522 12 10.633 9.522 12 9.522s2.478 1.111 2.478 2.478Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon89);
export default ForwardRef;
