import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon37 = (
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
    <path d="M3.72 19.024a.39.39 0 0 1-.388-.389v-1.242a6.552 6.552 0 0 1 3.79-5.935 5.76 5.76 0 0 1-.833-.558 7.425 7.425 0 0 0-3.834 6.493v1.242c0 .698.568 1.266 1.266 1.266h8.225a5.648 5.648 0 0 1-.303-.877H3.72ZM17.163 13.237c-.365 0-.719.045-1.058.13a7.452 7.452 0 0 0-4.081-3.077A4.427 4.427 0 0 0 14.3 6.424C14.3 3.984 12.315 2 9.876 2S5.45 3.985 5.45 6.424s1.985 4.425 4.425 4.425a6.538 6.538 0 0 1 5.38 2.826 4.387 4.387 0 0 0-2.475 3.943c0 2.416 1.966 4.382 4.382 4.382s4.382-1.966 4.382-4.382-1.966-4.381-4.382-4.381ZM6.328 6.424c0-1.956 1.591-3.548 3.548-3.548s3.548 1.592 3.548 3.548-1.592 3.548-3.548 3.548-3.548-1.591-3.548-3.548Zm10.835 14.7c-1.933 0-3.505-1.573-3.505-3.506s1.572-3.505 3.505-3.505 3.505 1.573 3.505 3.505-1.572 3.506-3.505 3.506Z" />
    <path d="M17.601 15.484h-.876v1.696h-1.697v.877h1.697v1.696h.876v-1.696h1.697v-.877H17.6v-1.696z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon37);
export default ForwardRef;
