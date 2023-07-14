import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon143 = (
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
    <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5Zm6.718 17.218A9.468 9.468 0 0 1 12 21.5a9.468 9.468 0 0 1-6.718-2.782A9.468 9.468 0 0 1 2.5 12a9.468 9.468 0 0 1 2.782-6.718A9.468 9.468 0 0 1 12 2.5a9.468 9.468 0 0 1 6.718 2.782A9.468 9.468 0 0 1 21.5 12a9.468 9.468 0 0 1-2.782 6.718Zm1.527-7.463a6.678 6.678 0 0 0-3.338-.862c-1.75.003-3.431.582-5.067 1.133-1.636.556-3.226 1.083-4.747 1.08a5.67 5.67 0 0 1-2.848-.733.5.5 0 0 0-.49.872 6.678 6.678 0 0 0 3.338.862c1.75-.003 3.431-.582 5.067-1.133 1.636-.556 3.226-1.083 4.747-1.08.96 0 1.895.2 2.848.733a.5.5 0 0 0 .49-.872Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon143);
export default ForwardRef;
