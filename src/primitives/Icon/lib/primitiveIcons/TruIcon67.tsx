import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon67 = (
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
    <path d="M19.392 19.266h-.58v-4.094h.58c.753 0 1.367-.613 1.367-1.367s-.614-1.367-1.367-1.367H18.9c-.003-3.168-2.153-5.842-5.07-6.646V4.127a.444.444 0 0 0-.444-.444h-.942V2h-.888v1.683h-.942a.444.444 0 0 0-.443.444V5.79a6.923 6.923 0 0 0-4.94 5.316h.908C6.75 8.434 9.144 6.432 12 6.432a6.02 6.02 0 0 1 6.012 6.006H4.608c-.753 0-1.367.614-1.367 1.367s.614 1.367 1.367 1.367h.58v4.094h-.58c-.753 0-1.367.613-1.367 1.367S3.855 22 4.608 22h14.784c.753 0 1.367-.613 1.367-1.367s-.614-1.367-1.367-1.367ZM11.058 5.61V4.57h1.884v1.04a6.923 6.923 0 0 0-1.884-.002Zm6.866 13.657h-2.296v-4.094h2.296v4.094Zm-6.368-4.094v4.094H9.26v-4.094h2.296Zm.888 0h2.296v4.094h-2.296v-4.094Zm-8.315-1.367a.48.48 0 0 1 .48-.479h14.783a.48.48 0 0 1 0 .958H4.608a.48.48 0 0 1-.479-.479Zm1.947 1.367h2.296v4.094H6.076v-4.094Zm13.316 5.94H4.608a.48.48 0 0 1 0-.958h14.784a.48.48 0 0 1 0 .958Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon67);
export default ForwardRef;
