import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon86 = (
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
    <path d="M12.435 20.252v-.87h-.87v.87h.87Zm3.106-11.624-5.308 5.309-1.774-1.774-.616.616 2.082 2.082a.434.434 0 0 0 .616 0l5.616-5.616-.616-.617Zm-4.758-4.863v.872h2.434v-.872h-2.434Zm6.477-1.689v18.617c0 .24-.195.436-.436.436H7.176a.436.436 0 0 1-.436-.436V3.307c0-.24.195-.436.436-.436h8.777V2H7.176c-.721 0-1.307.586-1.307 1.307v17.386c0 .72.586 1.307 1.307 1.307h9.648c.721 0 1.307-.586 1.307-1.307V3.307c0-.568-.364-1.05-.871-1.23Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon86);
export default ForwardRef;
