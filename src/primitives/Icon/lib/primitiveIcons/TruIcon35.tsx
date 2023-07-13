import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon35 = (
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
    <path d="M14.4 11.263a4.946 4.946 0 0 0 2.543-4.32A4.949 4.949 0 0 0 12 2C9.274 2 7.057 4.218 7.057 6.943S9.274 11.886 12 11.886c4.032 0 7.311 3.28 7.311 7.312v1.388c0 .24-.195.435-.434.435H5.123a.435.435 0 0 1-.434-.435v-1.388a7.32 7.32 0 0 1 4.235-6.63c-.33-.182-.64-.391-.931-.625a8.296 8.296 0 0 0-4.284 7.255v1.388c0 .78.635 1.414 1.414 1.414h13.754c.78 0 1.414-.634 1.414-1.414v-1.388c0-3.737-2.487-6.904-5.891-7.935Zm-6.364-4.32A3.969 3.969 0 0 1 12 2.98c2.186 0 3.964 1.778 3.964 3.964S14.186 10.907 12 10.907a3.969 3.969 0 0 1-3.964-3.964Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon35);
export default ForwardRef;
