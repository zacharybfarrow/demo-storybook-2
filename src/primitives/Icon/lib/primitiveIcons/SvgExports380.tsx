import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports380 = (
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
    <path d="M20.46 13.021c-1.177-1.176-2.77-1.656-4.304-1.484V7.569c0-.554-.208-1.108-.624-1.454-.415-.347-.9-.624-1.454-.624h-.069c-.277-1.177-1.385-2.077-2.7-2.077h-5.54A2.778 2.778 0 0 0 3 6.184v5.539c0 1.316.9 2.354 2.077 2.7v.07c0 .554.208 1.107.623 1.454.416.346.9.623 1.454.623h4.343a5.23 5.23 0 0 0 1.524 3.89 5.26 5.26 0 0 0 7.438-7.439ZM5.076 7.57v6.093a2.017 2.017 0 0 1-1.385-1.939v-5.54c0-1.176.9-2.076 2.078-2.076h5.539c.9 0 1.662.554 1.938 1.384H7.154c-.554 0-1.107.208-1.454.624-.346.415-.623.9-.623 1.454Zm6.486 8.308H7.154a1.389 1.389 0 0 1-1.384-1.384V7.569c0-.762.623-1.385 1.384-1.385h6.924c.762 0 1.385.623 1.385 1.385v4.016l.123.036a5.22 5.22 0 0 0-2.565 1.4 5.22 5.22 0 0 0-1.458 2.856Zm8.753 3.647-.705.705-2.795-2.795-2.795 2.795-.706-.705 2.796-2.795-2.795-2.795.705-.705 2.794 2.795 2.795-2.795.706.705-2.795 2.795 2.795 2.795Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports380);
export default ForwardRef;
