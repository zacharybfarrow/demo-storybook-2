import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont77 = (
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
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M19.64 18.16H4.36V7.83h15.28v10.33ZM5.24 5.84h6.58l.69 1.39h-8Zm14.7 1.39h-6.77l-.91-1.82a.29.29 0 0 0-.26-.16H5.05a.29.29 0 0 0-.26.16l-1 2v11.04a.3.3 0 0 0 .3.3h15.85a.29.29 0 0 0 .29-.3V7.53a.3.3 0 0 0-.29-.3"
      style={{
        fillRule: "evenodd",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont77);
export default ForwardRef;
