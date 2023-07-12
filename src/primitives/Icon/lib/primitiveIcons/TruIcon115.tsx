import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon115 = (
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
    <path d="M17.714 18.057a.443.443 0 0 0 .443-.443v-3.702a.443.443 0 0 0-.443-.443h-5.809a.443.443 0 0 0-.443.443v3.702c0 .245.199.443.443.443h5.809Zm-5.365-3.702h4.921v2.816H12.35v-2.816Z" />
    <path d="M22 10.104a.443.443 0 0 0-.083-.258L19.344 6.25V4.78c0-.733-.596-1.33-1.33-1.33H5.986c-.733 0-1.33.597-1.33 1.33V6.25L2.084 9.846a.443.443 0 0 0-.083.258c0 1.123.913 2.036 2.036 2.036.645 0 1.22-.302 1.593-.771v.002a2.033 2.033 0 0 0 3.185 0 2.033 2.033 0 0 0 3.186 0 2.033 2.033 0 0 0 3.186 0 2.033 2.033 0 0 0 3.185 0v-.002c.292.366.706.63 1.18.728v7.124a.444.444 0 0 1-.442.443h-8.92v-5.752a.443.443 0 0 0-.443-.443H6.33a.443.443 0 0 0-.443.443v5.752h-.997a.444.444 0 0 1-.443-.443V13.46h-.886v5.762c0 .733.596 1.33 1.33 1.33h14.217c.733 0 1.329-.597 1.329-1.33v-7.139A2.038 2.038 0 0 0 22 10.104ZM6.774 14.355h2.529v5.31H6.774v-5.31Zm-.789-10.02h12.03c.244 0 .443.2.443.444v1.17H5.542V4.78c0-.244.199-.443.443-.443Zm-.658 2.5h13.346l1.817 2.54H3.51l1.817-2.54Zm-1.291 4.419a1.15 1.15 0 0 1-1.138-.993h2.276a1.15 1.15 0 0 1-1.138.993Zm3.186 0a1.15 1.15 0 0 1-1.138-.993h2.275a1.15 1.15 0 0 1-1.137.993Zm3.185 0a1.15 1.15 0 0 1-1.138-.993h2.276a1.15 1.15 0 0 1-1.138.993Zm3.186 0a1.15 1.15 0 0 1-1.138-.993h2.276a1.15 1.15 0 0 1-1.138.993Zm3.185 0a1.15 1.15 0 0 1-1.137-.993h2.275a1.15 1.15 0 0 1-1.138.993Zm3.186 0a1.15 1.15 0 0 1-1.138-.993h2.276a1.15 1.15 0 0 1-1.138.993Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon115);
export default ForwardRef;
