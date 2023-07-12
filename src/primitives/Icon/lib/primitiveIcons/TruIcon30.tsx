import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon30 = (
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
    <path d="M3.825 7.126h.91v-.91h-.91v.91Zm1.82 0h.91v-.91h-.91v.91Zm13.635 0h.91v-.91h-.91v.91Zm-7.657 10.18 1.692-6.989h-.938l-1.692 6.99h.938Zm9.01-12.912H3.367C2.613 4.394 2 5.007 2 5.76v12.48c0 .753.613 1.366 1.367 1.366h16.355v-.91H3.367a.456.456 0 0 1-.456-.456V8.938H21.09v10.589c.53-.189.911-.694.911-1.287V5.76c0-.753-.613-1.366-1.367-1.366Zm.456 3.633H2.91V5.76c0-.251.204-.455.456-.455h17.266c.252 0 .456.204.456.455v2.267Zm-12.404 2.29L5.513 13.49a.456.456 0 0 0 0 .644l3.172 3.173.645-.644-2.851-2.851 2.85-2.85-.644-.645Zm6.63 6.99 3.172-3.173a.456.456 0 0 0 0-.644l-3.172-3.173-.645.644 2.851 2.851-2.85 2.85.644.645Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon30);
export default ForwardRef;
