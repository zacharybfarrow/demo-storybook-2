import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont320 = (
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
    <path d="m2.75 3.5 6 7v10l5-3v-7l5.5-7ZM13 9.88l-.21.27v6.78l-3 1.8v-8.6l-.24-.28L4.92 4.5h12.27Zm8.54 5.71a4.19 4.19 0 1 0 0 5.93 4.19 4.19 0 0 0-.04-5.93Zm-2.59 3.34v3h-.74v-3h-3v-.75h3v-3h.74v3h3v.75Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont320);
export default ForwardRef;
