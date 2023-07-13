import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon134 = (
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
    <path d="M3.572 19.024a.39.39 0 0 1-.389-.389v-1.242a6.552 6.552 0 0 1 3.791-5.935 5.759 5.759 0 0 1-.833-.558 7.425 7.425 0 0 0-3.834 6.493v1.242c0 .698.568 1.266 1.265 1.266h8.225a5.648 5.648 0 0 1-.303-.877H3.572ZM21.693 14.64l-.62-.62-.74.742a4.372 4.372 0 0 0-4.377-1.395 7.452 7.452 0 0 0-4.08-3.077 4.427 4.427 0 0 0 2.275-3.866C14.151 3.984 12.167 2 9.727 2S5.303 3.985 5.303 6.424s1.985 4.425 4.424 4.425a6.538 6.538 0 0 1 5.38 2.826 4.387 4.387 0 0 0-2.474 3.943c0 2.416 1.965 4.382 4.381 4.382s4.382-1.966 4.382-4.382c0-.771-.201-1.497-.553-2.127l.85-.85ZM6.18 6.424c0-1.956 1.592-3.548 3.548-3.548s3.548 1.592 3.548 3.548-1.592 3.548-3.548 3.548S6.18 8.381 6.18 6.424Zm14.34 11.194c0 1.933-1.572 3.506-3.505 3.506s-3.505-1.573-3.505-3.506 1.572-3.505 3.505-3.505a3.5 3.5 0 0 1 2.698 1.27l-2.633 2.632-1.246-1.247-.62.62 1.556 1.556a.437.437 0 0 0 .62 0l2.803-2.803c.21.45.328.95.328 1.477Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon134);
export default ForwardRef;
