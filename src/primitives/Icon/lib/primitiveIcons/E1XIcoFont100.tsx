import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont100 = (
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
    <path d="m17.12 14.78-.82.67a10.29 10.29 0 0 1 1 .4 4.7 4.7 0 0 1 1.44 1 1.42 1.42 0 0 1 0 2.09 5.68 5.68 0 0 1-2.48 1.39 13.08 13.08 0 0 1-4 .57 12.15 12.15 0 0 1-5-1 4.52 4.52 0 0 1-1.44-1 1.42 1.42 0 0 1 0-2.09 5.57 5.57 0 0 1 2.38-1.32l-.86-.64-.47.15a5.45 5.45 0 0 0-1.73 1.22 2.31 2.31 0 0 0 0 3.31A6.64 6.64 0 0 0 8 21.21a14.28 14.28 0 0 0 4.27.61 13 13 0 0 0 5.43-1.06 5.28 5.28 0 0 0 1.73-1.21 2.31 2.31 0 0 0 0-3.31 5.94 5.94 0 0 0-2.31-1.46ZM12.3 7.29a2.56 2.56 0 0 0 0-5.11 2.56 2.56 0 0 0 0 5.11Z" />
    <path d="M18.29 10.13a8.2 8.2 0 0 0-1.32.13c-.82-1.13-3.35-1.7-4.67-1.7s-3.94.59-4.71 1.77v.06a8.7 8.7 0 0 0-1.91-.26c-1.34 0-3.94.59-4.71 1.77a5.47 5.47 0 0 0 3.42 2.66 5.51 5.51 0 0 0 1.29.19A5.47 5.47 0 0 0 7 14.59a5.39 5.39 0 0 0 3-2 5.1 5.1 0 0 0 2.33.56 5.25 5.25 0 0 0 1.92-.37 5.28 5.28 0 0 0 1.64 1.33 5.47 5.47 0 0 0 1.42.5A5.3 5.3 0 0 0 23 11.9c-.77-1.18-3.37-1.77-4.71-1.77ZM18.29 8.86a2.51 2.51 0 1 0-2.51-2.56 2.58 2.58 0 0 0 2.51 2.56ZM5.71 8.86a2.56 2.56 0 0 0 0-5.11 2.56 2.56 0 0 0 0 5.11Z" />
    <path d="M11.82 13.67v2.68a4.63 4.63 0 0 0-.55.06l-2.35-2.23-.63.66 2 1.87a1.34 1.34 0 0 0-.24.12c-.53.28-.85.65-.85 1.06 0 .87 1.41 1.57 3.14 1.57s3.14-.7 3.14-1.57a1.3 1.3 0 0 0-.83-1.05l-.32-.16L16 14.82l-.66-.62-2.08 2.21-.56-.07v-2.67Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont100);
export default ForwardRef;
