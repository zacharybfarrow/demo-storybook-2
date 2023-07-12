import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon08 = (
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
    <path d="M12 7.125a2.753 2.753 0 1 0 0 5.506 2.753 2.753 0 0 0 0-5.506Zm0 4.806a2.055 2.055 0 0 1-2.053-2.053A2.055 2.055 0 0 1 12 7.826c1.134.002 2.05.919 2.053 2.052A2.055 2.055 0 0 1 12 11.931Zm7.188-6.956a.352.352 0 0 0-.247-.102 1.788 1.788 0 0 1-1.786-1.786.352.352 0 0 0-.35-.35h-9.61a.352.352 0 0 0-.35.35 1.788 1.788 0 0 1-1.786 1.786.352.352 0 0 0-.35.35v7.322a6.5 6.5 0 0 0 2.537 5.152l4.54 3.493a.35.35 0 0 0 .427 0l4.541-3.493a6.5 6.5 0 0 0 2.537-5.152V5.223a.352.352 0 0 0-.103-.248Zm-2.86 12.168L12 20.47l-4.327-3.328c-.096-.074-.182-.157-.273-.236a.344.344 0 0 0 .035-.146 2.197 2.197 0 0 1 2.194-2.195h4.742a2.197 2.197 0 0 1 2.195 2.195c0 .052.013.1.034.146-.09.079-.177.162-.273.236Zm2.263-4.598a5.796 5.796 0 0 1-1.373 3.74 2.888 2.888 0 0 0-2.847-2.419H9.63a2.888 2.888 0 0 0-2.847 2.42 5.796 5.796 0 0 1-1.373-3.74V5.537a2.472 2.472 0 0 0 2.1-2.1h8.982a2.472 2.472 0 0 0 2.1 2.1v7.007Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon08);
export default ForwardRef;
