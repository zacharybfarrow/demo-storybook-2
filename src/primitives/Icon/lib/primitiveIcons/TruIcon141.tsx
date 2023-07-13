import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon141 = (
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
    <path d="M16.65 7.35a.575.575 0 0 0-.814 0L12 11.188 8.164 7.35a.575.575 0 0 0-.813.813L11.187 12 7.35 15.836a.575.575 0 0 0 .813.813L12 12.813l3.836 3.836a.575.575 0 0 0 .813-.813L12.813 12l3.836-3.836a.575.575 0 0 0 0-.813ZM12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5Zm6.718 17.218A9.468 9.468 0 0 1 12 21.5a9.468 9.468 0 0 1-6.718-2.782A9.468 9.468 0 0 1 2.5 12a9.468 9.468 0 0 1 2.782-6.718A9.468 9.468 0 0 1 12 2.5a9.468 9.468 0 0 1 6.718 2.782A9.468 9.468 0 0 1 21.5 12a9.468 9.468 0 0 1-2.782 6.718Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon141);
export default ForwardRef;
