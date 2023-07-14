import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon126 = (
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
    <path d="M20.633 4.735H3.367C2.613 4.735 2 5.348 2 6.102v11.796c0 .754.613 1.367 1.367 1.367h16.355v-.911H17.24V15.86h3.85v3.325c.53-.188.911-.693.911-1.287V6.102c0-.754-.613-1.367-1.367-1.367ZM6.713 18.354H3.366a.456.456 0 0 1-.456-.456V15.86h3.801v2.494Zm0-3.405H2.91v-2.493h3.801v2.493Zm0-3.405H2.91V9.051h3.801v2.493Zm0-3.404H2.91V6.102c0-.251.204-.456.456-.456h3.345V8.14Zm4.807 10.214H7.624V15.86h3.896v2.494Zm0-3.405H7.624v-2.493h3.896v2.493Zm0-3.405H7.624V9.051h3.896v2.493Zm0-3.404H7.624V5.646h3.896V8.14Zm4.808 10.214h-3.897V15.86h3.897v2.494Zm0-3.405h-3.897v-2.493h3.897v2.493Zm0-3.405h-3.897V9.051h3.897v2.493Zm0-3.404h-3.897V5.646h3.897V8.14Zm4.76 6.809H17.24v-2.493h3.85v2.493Zm0-3.405H17.24V9.051h3.85v2.493Zm0-3.404H17.24V5.646h3.394c.252 0 .456.205.456.456V8.14Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon126);
export default ForwardRef;
