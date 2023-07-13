import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont241 = (
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
    <path d="M7 14.59a5.41 5.41 0 0 0 3-2 5.09 5.09 0 0 0 2.32.56 5.25 5.25 0 0 0 1.92-.37 5.21 5.21 0 0 0 1.65 1.33 2.36 2.36 0 0 0 .28.12 4.9 4.9 0 0 1 2.41-.65 4.82 4.82 0 0 1 2.17.52A5.17 5.17 0 0 0 23 11.9c-.77-1.18-3.36-1.77-4.71-1.77a8.43 8.43 0 0 0-1.32.13c-.81-1.13-3.34-1.7-4.66-1.7s-3.95.59-4.72 1.77v.06a8.87 8.87 0 0 0-1.91-.26c-1.35 0-3.95.59-4.72 1.77a5.49 5.49 0 0 0 3.44 2.66 5.59 5.59 0 0 0 1.3.19 5.39 5.39 0 0 0 1.3-.16ZM5.7 8.86a2.56 2.56 0 0 0 0-5.11 2.56 2.56 0 0 0 0 5.11Zm6.58-1.57a2.58 2.58 0 0 0 2.51-2.56 2.58 2.58 0 0 0-2.51-2.55 2.56 2.56 0 0 0 0 5.11Zm6 1.57a2.51 2.51 0 1 0-2.5-2.56 2.57 2.57 0 0 0 2.49 2.56Zm-2.69 6.73a4.19 4.19 0 1 0 5.92 0 4.19 4.19 0 0 0-5.93 0Zm6.3 3.34h-3v3h-.74v-3h-3v-.75h3v-3h.74v3h3Zm-9.6 2a12.1 12.1 0 0 1-5-1 4.52 4.52 0 0 1-1.44-1 1.4 1.4 0 0 1 0-2.09 5.51 5.51 0 0 1 2.38-1.36l-.87-.64-.5.16a5.45 5.45 0 0 0-1.73 1.22 2.31 2.31 0 0 0 0 3.31A6.6 6.6 0 0 0 8 21.21a14.33 14.33 0 0 0 4.27.61 15.59 15.59 0 0 0 2.42-.2 5.28 5.28 0 0 1-.55-.84 12.51 12.51 0 0 1-1.86.12Zm3.42-6.37-.35-.33-2.08 2.21-.55-.07v-2.7h-.93v2.68a4.87 4.87 0 0 0-.55.06L8.9 14.18l-.63.66 2 1.87-.24.12c-.52.28-.85.65-.85 1.06 0 .87 1.41 1.57 3.14 1.57a6 6 0 0 0 1.39-.16 6.17 6.17 0 0 1-.07-.74 4.91 4.91 0 0 1 2.06-4.03Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont241);
export default ForwardRef;
