import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon58 = (
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
    <path d="M21.716 9.71a1.332 1.332 0 0 0-1.057-.516H5.498c-.615 0-1.15.417-1.3 1.013L2.893 15.39V4.898c0-.246.2-.447.447-.447h4.735c.124 0 .243.052.327.143l1.729 1.859c.252.271.61.427.981.427h8.36c.247 0 .447.2.447.447v.527h.894v-.527c0-.739-.602-1.34-1.34-1.34h-8.36a.448.448 0 0 1-.328-.143L9.057 3.986a1.344 1.344 0 0 0-.982-.428H3.34c-.739 0-1.34.601-1.34 1.34v14.203c0 .296.097.585.284.825.255.328.64.516 1.057.516H18.5c.616 0 1.15-.416 1.3-1.013l2.158-8.567a1.332 1.332 0 0 0-.243-1.151Zm-.624.934-2.157 8.567a.446.446 0 0 1-.433.338H3.34a.444.444 0 0 1-.433-.556l2.157-8.568a.446.446 0 0 1 .433-.337h15.161a.444.444 0 0 1 .433.556Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon58);
export default ForwardRef;
