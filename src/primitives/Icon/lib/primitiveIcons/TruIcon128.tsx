import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon128 = (
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
    <path d="m19.717 19.098-.919-.918c3.482-3.81 3.356-9.743-.35-13.397A9.596 9.596 0 0 0 11.594 2 9.601 9.601 0 0 0 4.78 4.88c-3.741 3.794-3.698 9.925.097 13.667a9.634 9.634 0 0 0 6.785 2.778 9.655 9.655 0 0 0 5.474-1.696l-.632-.632a8.78 8.78 0 0 1-4.842 1.45 8.76 8.76 0 0 1-6.169-2.525c-3.45-3.402-3.49-8.976-.087-12.426a8.73 8.73 0 0 1 6.258-2.618c2.323 0 4.512.897 6.168 2.53 3.36 3.313 3.483 8.686.345 12.15l-1.674-1.673a6.394 6.394 0 0 0 1.59-4.22c0-3.546-2.885-6.43-6.43-6.43s-6.43 2.884-6.43 6.43a6.437 6.437 0 0 0 6.43 6.43c1.134 0 2.2-.296 3.125-.814l-.65-.65a5.517 5.517 0 0 1-2.476.586 5.558 5.558 0 0 1-5.552-5.552c0-3.062 2.49-5.553 5.552-5.553s5.553 2.491 5.553 5.553c0 1.373-.504 2.629-1.333 3.599l-1.74-1.741c.388-.518.62-1.162.62-1.858 0-1.71-1.39-3.1-3.1-3.1-1.708 0-3.099 1.39-3.099 3.1s1.39 3.099 3.1 3.099c.696 0 1.34-.231 1.857-.62l5.576 5.575V22h.878v-2.024h2.024v-.878h-2.281Zm-6.205-6.205-1.54-1.539-.62.621 1.539 1.539a2.208 2.208 0 0 1-1.229.372c-1.224 0-2.22-.997-2.22-2.221s.996-2.221 2.22-2.221c1.225 0 2.222.996 2.222 2.22 0 .455-.138.877-.372 1.229Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon128);
export default ForwardRef;
