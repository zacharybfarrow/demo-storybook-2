import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon33 = (
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
    <path d="M20.641 3.44H3.36C2.609 3.44 2 4.05 2 4.799v11.74c0 .749.61 1.358 1.359 1.358h6.795v1.757H6.806v.906h10.388v-.906h-3.348v-1.757h6.795c.75 0 1.359-.61 1.359-1.358V4.799c0-.75-.61-1.359-1.359-1.359ZM12.94 19.654h-1.88v-1.757h1.88v1.757Zm8.154-3.115c0 .25-.203.452-.453.452H3.36a.453.453 0 0 1-.453-.452v-.603h16.823v-.906H2.906V4.8c0-.25.203-.453.453-.453H20.64c.25 0 .453.203.453.453v11.74Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon33);
export default ForwardRef;
