import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont414 = (
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
    <path d="M19.619 4.38a.476.476 0 1 0 0 .953.476.476 0 0 0 0-.952Zm.952-1.428H3.43c-.81 0-1.429.62-1.429 1.429v15.238c0 .81.619 1.429 1.429 1.429H20.57c.81 0 1.429-.62 1.429-1.429V4.381c0-.81-.619-1.429-1.429-1.429Zm.477 16.667c0 .286-.19.476-.477.476H3.43c-.286 0-.477-.19-.477-.476V6.762h18.096v12.857Zm0-13.81H2.952V4.382c0-.286.19-.476.477-.476H20.57c.286 0 .477.19.477.476V5.81Zm-9.05 7.821h.016a1.876 1.876 0 1 0-1.876-1.876 1.868 1.868 0 0 0 1.86 1.876Zm.007-3.002h.009a1.126 1.126 0 1 1-.01 0Zm5.71-6.247c-.286 0-.477.19-.477.476s.19.476.476.476.476-.19.476-.476-.19-.476-.476-.476Zm-1.905 0c-.286 0-.477.19-.477.476s.19.476.477.476.476-.19.476-.476-.19-.476-.476-.476ZM12 18.73l3.128-5.295a3.65 3.65 0 0 0-.195-3.558 3.38 3.38 0 0 0-2.919-1.654 3.46 3.46 0 0 0-2.947 1.654 3.648 3.648 0 0 0-.194 3.558L12 18.73Zm-2.293-8.45a2.705 2.705 0 0 1 4.614 0 2.9 2.9 0 0 1 .167 2.793l-2.474 4.17-2.46-4.156c-.432-.9-.374-1.959.153-2.807Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont414);
export default ForwardRef;
