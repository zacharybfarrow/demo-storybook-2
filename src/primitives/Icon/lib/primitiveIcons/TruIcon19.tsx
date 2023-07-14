import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon19 = (
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
    <path d="M15.85 7.904c0-2.124-1.727-3.85-3.85-3.85S8.15 5.78 8.15 7.903s1.727 3.85 3.85 3.85 3.85-1.727 3.85-3.85Zm-6.81 0c0-1.632 1.328-2.96 2.96-2.96s2.96 1.328 2.96 2.96-1.328 2.96-2.96 2.96-2.96-1.328-2.96-2.96Zm9.956 11.544-3.213-7.016a5.893 5.893 0 0 0 2.12-4.528C17.904 4.648 15.256 2 12 2S6.096 4.648 6.096 7.904c0 1.817.826 3.444 2.121 4.528l-3.213 7.016a.446.446 0 0 0 .56.603l2.64-.98.981 2.639a.445.445 0 0 0 .823.03l1.257-2.746-.49-1.07-1.13 2.467-.761-2.049a.445.445 0 0 0-.573-.262l-2.05.762 2.695-5.882c.398.24.827.436 1.28.578l3.756 8.202a.445.445 0 0 0 .823-.03l.981-2.64 2.64.981a.445.445 0 0 0 .56-.603ZM6.987 7.904C6.987 5.14 9.236 2.89 12 2.89s5.013 2.249 5.013 5.013-2.249 5.012-5.013 5.012-5.013-2.248-5.013-5.012ZM15.69 18.08a.446.446 0 0 0-.573.262l-.761 2.05-3.034-6.625a5.868 5.868 0 0 0 3.723-.807l2.694 5.882-2.049-.762Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon19);
export default ForwardRef;
