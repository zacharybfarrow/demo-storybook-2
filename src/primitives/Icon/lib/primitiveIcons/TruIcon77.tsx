import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon77 = (
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
    <path d="M10.815 18.682h5.839v-.907h-5.84v.907Zm8.421 1.051V3.36c0-.75-.61-1.36-1.36-1.36H6.124c-.75 0-1.36.61-1.36 1.36v17.28c0 .75.61 1.36 1.36 1.36h11.752c.59 0 1.093-.38 1.28-.907H6.125a.454.454 0 0 1-.453-.453V3.36c0-.25.203-.453.453-.453h11.752c.25 0 .453.203.453.453v16.373h.907Zm-2.582-6.08h-5.84v.907h5.84v-.906Zm0-4.121h-5.84v.907h5.84v-.907Zm-8.205 3.186c-.766 0-1.39.623-1.39 1.389s.624 1.39 1.39 1.39 1.39-.624 1.39-1.39-.624-1.39-1.39-1.39Zm0 1.871a.483.483 0 1 1 0-.965.483.483 0 0 1 0 .965Zm8.205-9.179h-5.84v.907h5.84V5.41Zm-8.205-.936a1.39 1.39 0 0 0 0 2.778c.766 0 1.39-.622 1.39-1.388s-.624-1.39-1.39-1.39Zm0 1.872a.483.483 0 1 1 0-.966.483.483 0 0 1 0 .966Zm0 2.25a1.39 1.39 0 1 0 1.39 1.39 1.39 1.39 0 0 0-1.39-1.39Zm0 1.872a.483.483 0 1 1 0-.966.483.483 0 0 1 0 .966Zm0 6.372c-.766 0-1.39.623-1.39 1.389s.624 1.389 1.39 1.389 1.39-.623 1.39-1.39-.624-1.388-1.39-1.388Zm0 1.871a.483.483 0 1 1 0-.966.483.483 0 0 1 0 .966Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon77);
export default ForwardRef;
