import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon53 = (
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
    <path d="M3.723 19.02a.39.39 0 0 1-.39-.389V17.39a6.55 6.55 0 0 1 3.79-5.933 5.757 5.757 0 0 1-.832-.559 7.423 7.423 0 0 0-3.833 6.492v1.242c0 .698.567 1.265 1.265 1.265h8.22a5.644 5.644 0 0 1-.301-.876H3.723ZM17.162 13.239c-.364 0-.718.045-1.056.13a7.45 7.45 0 0 0-4.082-3.08A4.426 4.426 0 0 0 14.3 6.422C14.3 3.984 12.315 2 9.876 2S5.453 3.984 5.453 6.423s1.984 4.424 4.423 4.424c2.23 0 4.2 1.12 5.382 2.828a4.386 4.386 0 0 0-2.477 3.944c0 2.416 1.965 4.381 4.38 4.381s4.381-1.965 4.381-4.38-1.965-4.381-4.38-4.381ZM6.329 6.423c0-1.956 1.591-3.547 3.547-3.547s3.547 1.591 3.547 3.547-1.59 3.547-3.547 3.547S6.33 8.38 6.33 6.423Zm10.833 14.7c-1.933 0-3.505-1.571-3.505-3.504s1.572-3.504 3.505-3.504 3.504 1.572 3.504 3.504-1.572 3.505-3.504 3.505Z" />
    <path d="M16.724 15.375h.876v2.859h-.876zM16.753 19.075h.818v.818h-.818z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon53);
export default ForwardRef;
