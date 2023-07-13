import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports411 = (
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
    <path d="m23 10.864-.414-.998-6.802 2.817 5.944-5.944-.763-.763-5.217 5.217 3.228-7.774-.997-.414-2.821 6.799V1.4h-1.08v7.366L10.865 1l-.998.414 2.817 6.802L6.74 2.272l-.763.763 5.217 5.217-7.774-3.225-.414.994 6.799 2.821H1.4v1.08h7.366L1 13.135l.414.998 6.802-2.817-5.944 5.944.763.763 5.217-5.217-3.225 7.777.994.41 2.821-6.801v8.406h1.08v-7.366L13.135 23l.998-.414-2.817-6.802 5.944 5.944.763-.763-5.217-5.217 7.767 3.219.41-.998-6.791-2.811h8.406v-1.08h-7.363L23 10.865Zm-10.998 4.239a3.11 3.11 0 1 1 3.107-3.108 3.11 3.11 0 0 1-3.107 3.114v-.006Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports411);
export default ForwardRef;
