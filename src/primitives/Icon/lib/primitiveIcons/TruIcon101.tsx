import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon101 = (
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
    <path d="M12 5.456a4.237 4.237 0 0 0-4.232 4.232A4.237 4.237 0 0 0 12 13.92a4.237 4.237 0 0 0 4.232-4.232A4.237 4.237 0 0 0 12 5.456ZM8.706 10.14h1.351c.045 1.085.249 1.942.541 2.562a3.334 3.334 0 0 1-1.892-2.562Zm1.351-.906H8.706a3.334 3.334 0 0 1 1.892-2.563c-.292.62-.496 1.477-.54 2.563ZM12 12.99c-.33 0-.947-1.002-1.035-2.85h2.07c-.088 1.848-.706 2.85-1.035 2.85Zm-1.035-3.755c.088-1.848.706-2.85 1.035-2.85s.947 1.002 1.035 2.85h-2.07Zm2.437 3.468c.292-.62.496-1.477.54-2.562h1.352a3.334 3.334 0 0 1-1.892 2.562Zm.54-3.468c-.044-1.086-.248-1.943-.54-2.563a3.334 3.334 0 0 1 1.892 2.563h-1.351Zm6.7-5.795H3.358C2.609 3.44 2 4.05 2 4.799v11.74c0 .749.61 1.358 1.359 1.358h6.795v1.757H6.806v.906h10.388v-.906h-3.348v-1.757h6.795c.75 0 1.359-.61 1.359-1.358V4.799c0-.75-.61-1.359-1.359-1.359ZM12.94 19.654h-1.88v-1.757h1.88v1.757Zm8.154-3.115c0 .25-.203.453-.453.453H3.36a.453.453 0 0 1-.453-.453v-.603h16.823v-.906H2.906V4.8c0-.25.203-.453.453-.453H20.64c.25 0 .453.203.453.453v11.74Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon101);
export default ForwardRef;
