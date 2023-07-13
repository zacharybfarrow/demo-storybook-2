import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon72 = (
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
    <path d="M11.488 12.34c-.217.22-.459.415-.721.58a3.263 3.263 0 0 1 1.185 2.516v.649H5.414v-.649a3.273 3.273 0 0 1 3.269-3.269 2.584 2.584 0 0 0 2.581-2.581 2.584 2.584 0 0 0-2.581-2.582A2.584 2.584 0 0 0 6.1 9.586c0 .806.372 1.527.953 2.001a4.186 4.186 0 0 0-2.55 3.85v.662c0 .494.401.897.896.897h6.566a.898.898 0 0 0 .896-.897v-.663a4.17 4.17 0 0 0-1.374-3.096ZM7.012 9.586c0-.921.75-1.671 1.67-1.671.922 0 1.672.75 1.672 1.67 0 .922-.75 1.672-1.671 1.672-.922 0-1.671-.75-1.671-1.671Zm6.856 3.629h5.438v-.91h-5.438v.91Zm6.766-8.467H3.366C2.613 4.748 2 5.36 2 6.114v11.772c0 .754.613 1.366 1.366 1.366h17.268c.753 0 1.366-.612 1.366-1.366V6.114c0-.754-.613-1.366-1.366-1.366Zm.455 13.138a.456.456 0 0 1-.455.456H3.366a.456.456 0 0 1-.455-.456V6.114c0-.251.204-.456.455-.456h17.268c.251 0 .455.205.455.456v11.772Zm-7.221-7.113h5.438v-.91h-5.438v.91Zm0-2.442h5.438v-.91h-5.438v.91Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon72);
export default ForwardRef;
