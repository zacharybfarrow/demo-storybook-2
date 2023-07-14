import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon15 = (
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
    <path d="M20.633 4.417h-2.889V3.346h-.91v1.07H7.166v-1.07h-.911v1.07h-2.89C2.614 4.417 2 5.03 2 5.784v13.505c0 .753.613 1.366 1.367 1.366h16.355v-.91H3.367a.456.456 0 0 1-.456-.456V8.39H21.09v12.184c.53-.189.911-.694.911-1.287V5.783c0-.753-.613-1.366-1.367-1.366Zm.456 3.063H2.91V5.783c0-.25.204-.455.456-.455h2.889v1.07h.91v-1.07h9.667v1.07h.911v-1.07h2.89c.25 0 .455.204.455.455V7.48ZM8.526 14.642l-.645.645 2.177 2.176a.456.456 0 0 0 .644 0l5.872-5.872-.644-.644-5.55 5.55-1.854-1.855Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon15);
export default ForwardRef;
