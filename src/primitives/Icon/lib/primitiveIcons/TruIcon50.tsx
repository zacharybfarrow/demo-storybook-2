import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon50 = (
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
    <path d="M8.397 14.086v3.416h-.863v.912h8.932v-.912h-.863v-3.416a.456.456 0 0 0-.456-.455h-2.719l-.004-.661a1.393 1.393 0 0 0 .694-2.11l-.768-1.107a.455.455 0 0 0-.749 0l-.769 1.108a1.4 1.4 0 0 0 0 1.585c.17.244.406.421.68.518 0 .175.002.393.005.667H8.853a.456.456 0 0 0-.456.455Zm3.184-2.706.395-.569.394.569a.48.48 0 0 1-.789.547.483.483 0 0 1 0-.547Zm-2.273 3.162h5.384v2.96H9.308v-2.96ZM20.633 4.417h-2.889V3.346h-.91v1.07H7.166v-1.07h-.911v1.07h-2.89C2.614 4.417 2 5.03 2 5.784v13.505c0 .753.613 1.366 1.367 1.366h16.355v-.91H3.367a.456.456 0 0 1-.456-.456V8.39H21.09v12.184c.53-.189.911-.694.911-1.287V5.783c0-.753-.613-1.366-1.367-1.366Zm.456 3.063H2.91V5.783c0-.25.204-.455.456-.455h2.889v1.07h.91v-1.07h9.667v1.07h.911v-1.07h2.89c.25 0 .455.204.455.455V7.48Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon50);
export default ForwardRef;
