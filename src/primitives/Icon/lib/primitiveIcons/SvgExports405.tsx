import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports405 = (
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
    <path d="M19.783 4.219C15.486-.078 8.52-.077 4.222 4.22c-4.297 4.298-4.296 11.265.002 15.561 4.297 4.296 11.262 4.296 15.56 0 4.288-4.3 4.288-11.261 0-15.562Zm-.77 14.792c-3.872 3.875-10.153 3.878-14.028.005C1.11 15.144 1.108 8.864 4.98 4.99s10.152-3.878 14.027-.005l.006.005c3.872 3.831 3.905 10.076.074 13.948l-.074.074Z" />
    <path d="M17.624 6.378c-.063-.063-.129-.12-.195-.179a1.084 1.084 0 0 0-1.58-1.154 7.935 7.935 0 0 0-9.47 12.564c.063.063.13.116.195.179a1.081 1.081 0 0 0 1.58 1.154 7.935 7.935 0 0 0 9.47-12.564Zm-.77 10.474a6.864 6.864 0 0 1-8.124 1.177 1.075 1.075 0 0 0-.33-.8 1.088 1.088 0 0 0-1.115-.255l-.132-.122a6.86 6.86 0 0 1 8.12-10.891 1.078 1.078 0 0 0 1.449 1.055l.132.122c2.535 2.653 2.415 6.946 0 9.714Z" />
    <path d="M15.468 8.533a4.903 4.903 0 0 0-8.265 2.473 1.081 1.081 0 0 0 0 1.984 4.903 4.903 0 1 0 8.265-4.457Zm-.77 6.163a3.819 3.819 0 0 1-5.393 0 3.776 3.776 0 0 1-1.011-1.828.661.661 0 0 0 .119-.1 1.088 1.088 0 0 0 0-1.54.84.84 0 0 0-.12-.096 3.812 3.812 0 0 1 6.405-1.828 3.815 3.815 0 0 1 0 5.392Z" />
    <path d="M13.389 10.613a1.964 1.964 0 1 0-2.781 2.774 1.964 1.964 0 0 0 2.78-2.774Zm-.77 2.004a.893.893 0 0 1-1.234 0A.873.873 0 0 1 12 11.129a.873.873 0 0 1 .618 1.488Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports405);
export default ForwardRef;
