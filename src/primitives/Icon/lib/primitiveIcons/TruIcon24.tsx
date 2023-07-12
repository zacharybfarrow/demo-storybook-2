import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon24 = (
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
    <path d="M7.306 13.721H4.27v.911h3.037v-.91Zm0-2.209H4.27v.911h3.037v-.91Zm0-2.209H4.27v.912h3.037v-.912Zm13.327-.021h-1.52V7.204a.456.456 0 0 0-.456-.455h-.967v-1.72h-.911v1.72h-.967a.456.456 0 0 0-.456.455v2.078h-1.395c-.754 0-1.367.613-1.367 1.367v8.42h.911v-8.42c0-.252.204-.456.456-.456h6.672c.252 0 .456.204.456.456v9.355a.453.453 0 0 1-.456.455l-10.56-.015a.456.456 0 0 1-.455-.456V3.996c0-.753-.613-1.367-1.366-1.367H3.367C2.613 2.63 2 3.243 2 3.996v15.991c0 .754.613 1.367 1.367 1.367h4.34a2.713 2.713 0 0 1-.328-.911H3.367a.456.456 0 0 1-.456-.456V3.997c0-.252.204-.456.456-.456h4.885c.25 0 .455.204.455.455v15.992c0 .753.612 1.366 1.365 1.367l10.56.016h.001c.365 0 .708-.142.966-.4.259-.258.401-.602.401-.967v-9.355c0-.754-.613-1.367-1.367-1.367Zm-2.432 0h-1.934V7.66h1.934v1.622ZM4.269 19.05h3.037v-.911H4.27v.911Zm3.037-3.12H4.27v.911h3.037v-.911Zm7.513.911h4.916v-.911h-4.916v.911ZM7.306 7.095H4.27v.91h3.037v-.91ZM14.82 19.05h4.916v-.911h-4.916v.911Zm4.916-7.538h-4.916v.911h4.916v-.91ZM7.306 4.886H4.27v.91h3.037v-.91Zm7.513 9.746h4.916v-.91h-4.916v.91Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon24);
export default ForwardRef;
