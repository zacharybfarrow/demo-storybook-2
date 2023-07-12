import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports402 = (
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
    <path d="M6.043 3.328h-.192l-1.361.827v.552l1.05-.624v2.986H4.46v.456h2.663V7.07h-1.08V3.33Zm.606 8.001c.222-.282.336-.558.336-.911 0-.33-.084-.594-.265-.798-.197-.222-.497-.366-.91-.366a1.26 1.26 0 0 0-1.248 1.145l.51.097c.065-.45.336-.762.737-.762.234 0 .396.078.504.203.102.12.156.277.156.481 0 .264-.066.455-.342.797l-1.655 2.052v.233h2.59v-.48H5.293l1.356-1.69Zm-.834 5.537a.777.777 0 0 0-.168.018l1.067-1.446v-.16H4.436v.479h1.51l-.952 1.306.21.283a.837.837 0 0 1 .372-.078c.497 0 .839.312.839.887 0 .576-.354.888-.84.888s-.761-.288-.833-.786l-.504.066c.072.732.641 1.2 1.338 1.2.797 0 1.354-.564 1.354-1.368 0-.773-.473-1.289-1.115-1.289ZM8.762 13.5h11v-3h-11v3Zm0 5.975h11v-3h-11v3Zm0-14.95v3h11v-3h-11Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports402);
export default ForwardRef;
