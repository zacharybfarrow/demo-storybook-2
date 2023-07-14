import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont239 = (
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
    role="img"
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
    <path d="M22.18 2.75H1.82a.83.83 0 0 0-.82.83v16.84a.83.83 0 0 0 .82.83h20.36a.83.83 0 0 0 .82-.83V3.58a.83.83 0 0 0-.82-.83Zm-7 17.55h-6.4V14h6.43Zm-6.4-6.84V7.21h6.43v6.25ZM1.94 3.7h20.12v2.56H1.94ZM8.2 7.21v6.25H1.94V7.21ZM1.94 14H8.2v6.3H1.94Zm13.87 6.3V14h6.25v6.3Zm6.25-6.84h-6.25V7.21h6.25Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont239);
export default ForwardRef;
