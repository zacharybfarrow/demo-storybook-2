import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon130 = (
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
    <path d="M19.275 7.022a.456.456 0 0 0-.099-.497l-4.392-4.391A.456.456 0 0 0 14.462 2H6.058A1.37 1.37 0 0 0 4.69 3.368v17.264A1.37 1.37 0 0 0 6.058 22h11.819a1.37 1.37 0 0 0 1.368-1.368V8.676h-.912v11.956a.456.456 0 0 1-.456.456H6.058a.456.456 0 0 1-.456-.456V3.368c0-.252.205-.456.456-.456h7.948v3.024a1.37 1.37 0 0 0 1.368 1.368h3.48c.184 0 .35-.111.421-.282Zm-3.901-.63a.456.456 0 0 1-.456-.456v-2.38L16.37 5.01l1.383 1.383h-2.38Zm-1.842 8.928h1.098l.683-1.167h.032l.687 1.167h1.088v-.138l-1.205-1.84 1.077-1.61v-.143h-1.05l-.603 1.018h-.02l-.603-1.018H13.66v.144l1.082 1.61-1.21 1.839v.138Zm-2.76-.463h1.396l.219.463h1.007v-.133L11.7 11.551h-.448L9.54 15.187v.133h1.018l.213-.463Zm.698-1.717.389.901h-.773l.384-.901Zm-2.73 2.18v-2.878h.912v-.853H6.88v.853h.917v2.878h.944Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon130);
export default ForwardRef;
