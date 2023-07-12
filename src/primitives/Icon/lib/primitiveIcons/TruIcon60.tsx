import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon60 = (
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
    <path d="M21.556 10.44h-.886V9.307h1.324v-.888H19.98l-7.53-5.997a1.324 1.324 0 0 0-1.658 0L7.109 5.355V3.912a.444.444 0 0 0-.444-.444H4.498a.444.444 0 0 0-.443.444v3.876L2 9.424l.553.694 1.56-1.242v9.291c0 .734.597 1.33 1.33 1.33h6.302v-.886H5.444A.444.444 0 0 1 5 18.167V8.17l2.075-1.653h.034V6.49l4.236-3.374c.162-.13.39-.13.552 0l6.659 5.303h-4.593V7.156h-.887v1.263h-1.258v.888h1.258V21.87h.887v-2.372h3.835c.734 0 1.331-.597 1.331-1.33v-1.144h-.887v1.143a.444.444 0 0 1-.444.444h-3.835V9.307h2.36v1.133h-.87a.444.444 0 0 0-.443.443v4.366c0 .245.199.444.444.444h6.102A.444.444 0 0 0 22 15.25v-4.366a.444.444 0 0 0-.444-.443ZM6.221 6.062l-1.28 1.02V4.355h1.28v1.706Zm10.99 3.245h2.571v1.133H17.21V9.307Zm3.902 5.499h-5.216v-3.479h5.216v3.479Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon60);
export default ForwardRef;
