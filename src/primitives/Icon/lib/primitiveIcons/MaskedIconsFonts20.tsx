import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts20 = (
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
    <path d="M13.21 17.14Zm3.43 4.56Zm-2.49-6Zm3 6.57Zm.1-1.11Zm-.1-7.93ZM13.79 20.87a1.06 1.06 0 0 1-.24-.64 19.73 19.73 0 0 1-4.79.62 20.71 20.71 0 0 1-6.05-1v-1.91A5.87 5.87 0 0 1 6 12.79c.32 2.46 1.44 4.12 2.78 4.12s2.41-1.7 2.71-4.2a5.84 5.84 0 0 1 2.29 1.94l.65-.65A46.72 46.72 0 0 0 15 7.7a6.08 6.08 0 0 0-6.18-6A4.15 4.15 0 0 0 5.33 3c-1.09.3-2.69 1.32-2.69 4.69A49.56 49.56 0 0 0 3.12 14a6.62 6.62 0 0 0-1.4 4v2.18a.53.53 0 0 0 .36.42 20.36 20.36 0 0 0 6.73 1.18A20.5 20.5 0 0 0 14 21ZM4.06 13c-.12-.94-.29-2.42-.37-3.91a1.72 1.72 0 0 0 .68.14h.21a4.57 4.57 0 0 0 2.06 2.3A7.13 7.13 0 0 0 4.06 13Zm4.7 3c-.76 0-1.61-1.37-1.84-3.59a6.31 6.31 0 0 1 3.68-.05C10.38 14.61 9.49 16 8.76 16Zm2.36-4.44a4.69 4.69 0 0 0 1.11-.82c0 .43.08.87.09 1.35a7.17 7.17 0 0 0-1.2-.53ZM5.75 3.91a.51.51 0 0 0 .31-.2c.5-.72 1.31-1 2.78-1A5.1 5.1 0 0 1 14 7.7a45.27 45.27 0 0 1-.42 5.3l-.34-.29A12.42 12.42 0 0 0 13 9.62a.33.33 0 0 0-.05-.22 6.55 6.55 0 0 0-1.68-3.12 7 7 0 0 0-5.1-1.84.46.46 0 0 0-.47.46A1.25 1.25 0 0 1 4.37 6a1.74 1.74 0 0 0-.56.1 2.61 2.61 0 0 1 1.94-2.19ZM4.37 7a2.23 2.23 0 0 0 2.22-1.6 5.82 5.82 0 0 1 4 1.56A5.72 5.72 0 0 1 12 9.55a3.7 3.7 0 0 1-3.1 1.64 3.62 3.62 0 0 1-3.68-3.55.47.47 0 0 0-.94 0 3.93 3.93 0 0 0 .06.69.7.7 0 0 1-.68-.69.69.69 0 0 1 .71-.64Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts20);
export default ForwardRef;
