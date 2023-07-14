import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon122 = (
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
    <path d="M22 16.987V6.102c0-.754-.613-1.367-1.367-1.367H3.367C2.613 4.735 2 5.348 2 6.102v11.796c0 .754.613 1.367 1.367 1.367h17.266c.594 0 1.1-.381 1.287-.911H3.367a.456.456 0 0 1-.456-.456V6.102c0-.251.204-.456.456-.456h17.266c.252 0 .456.205.456.456v10.885H22Zm-6.812-7.669h-.357v5.341h1.132V11.62l3.008 3.054h.342V9.341h-1.14v3.016l-2.985-3.039ZM6.845 13.74c-.517 0-1.049-.205-1.072-.692H4.687c0 1.163 1.102 1.687 2.165 1.687 1.049-.023 2.135-.403 2.135-1.656 0-1.246-.965-1.466-2.09-1.565-.554-.061-1.017-.13-1.017-.6 0-.41.44-.661.904-.661.456 0 .904.19.965.623h1.063c0-1.193-1.033-1.611-2.028-1.611-1.056 0-2.021.494-2.021 1.671 0 1.102.972 1.39 1.937 1.474.51.038 1.163.084 1.163.669 0 .554-.547.66-1.018.66Zm4.923 0c-.516 0-1.048-.205-1.07-.692H9.61c0 1.163 1.101 1.687 2.165 1.687 1.048-.023 2.135-.403 2.135-1.656 0-1.246-.965-1.466-2.09-1.565-.554-.061-1.018-.13-1.018-.6 0-.41.441-.661.905-.661.455 0 .904.19.964.623h1.064c0-1.193-1.033-1.611-2.028-1.611-1.057 0-2.021.494-2.021 1.671 0 1.102.972 1.39 1.937 1.474.509.038 1.162.084 1.162.669 0 .554-.547.66-1.018.66Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon122);
export default ForwardRef;
