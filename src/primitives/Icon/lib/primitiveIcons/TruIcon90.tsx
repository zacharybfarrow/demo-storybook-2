import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon90 = (
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
    role="img"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.346 19.507a.43.43 0 0 1-.428-.428v-8.656l-.858.683v7.973c0 .709.577 1.286 1.286 1.286h7.467a5.57 5.57 0 0 1-.478-.858H5.346Z" />
    <path d="m22 14.321-.606-.606-.725.725a4.32 4.32 0 0 0-.927-.807v-4.17l1.526 1.215.534-.67-2.06-1.642v-.004h-.005L12.702 2.76a1.28 1.28 0 0 0-1.602 0L7.19 5.873V4.072a.429.429 0 0 0-.428-.429H4.49a.429.429 0 0 0-.429.429v4.294L2 10.007l.534.67 9.1-7.247a.427.427 0 0 1 .534 0l6.717 5.35v4.425a4.292 4.292 0 0 0-5.75 4.03c0 2.364 1.923 4.287 4.287 4.287s4.287-1.923 4.287-4.287a4.26 4.26 0 0 0-.541-2.082l.832-.832ZM4.918 4.501h1.415v2.055L4.918 7.683V4.501Zm15.934 12.734c0 1.891-1.539 3.43-3.43 3.43s-3.43-1.539-3.43-3.43 1.539-3.43 3.43-3.43c1.06 0 2.01.484 2.64 1.242l-2.577 2.576-1.22-1.22-.606.607 1.523 1.523a.427.427 0 0 0 .607 0l2.742-2.743c.205.44.32.929.32 1.445Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon90);
export default ForwardRef;
