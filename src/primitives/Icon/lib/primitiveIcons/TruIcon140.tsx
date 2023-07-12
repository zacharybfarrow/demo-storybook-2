import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon140 = (
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
    <path d="M12 19.02a7.016 7.016 0 0 0 2.941-13.39.575.575 0 1 0-.482 1.045A5.866 5.866 0 0 1 12 17.87a5.85 5.85 0 0 1-4.151-1.72 5.866 5.866 0 0 1 1.693-9.477.575.575 0 1 0-.483-1.043A7.016 7.016 0 0 0 12 19.02ZM2.423 9.07a.5.5 0 0 0 .64-.3c.326-.9.783-1.738 1.35-2.488a.5.5 0 1 0-.798-.603 10.476 10.476 0 0 0-1.492 2.75.5.5 0 0 0 .3.64Zm4.805-5.286a9.434 9.434 0 0 1 2.63-1.042.5.5 0 1 0-.223-.974 10.436 10.436 0 0 0-2.91 1.151.5.5 0 1 0 .503.865ZM12 8.71a.575.575 0 0 0 .575-.575V3.9a.575.575 0 0 0-1.15 0v4.235c0 .317.257.575.575.575Zm1.621-6.072a9.43 9.43 0 0 1 2.685.892.5.5 0 0 0 .454-.891 10.428 10.428 0 0 0-2.97-.987.5.5 0 0 0-.169.986Zm-6.36 17.598a9.544 9.544 0 0 1-2.215-1.764.5.5 0 1 0-.732.682 10.542 10.542 0 0 0 2.448 1.948.5.5 0 0 0 .5-.866ZM22.5 11.957a.5.5 0 0 0-1 .004V12c0 .975-.147 1.915-.419 2.799a.5.5 0 0 0 .956.294A10.5 10.5 0 0 0 22.5 12v-.043ZM21.399 8.54a.5.5 0 0 0 .263-.656 10.5 10.5 0 0 0-1.643-2.662.5.5 0 0 0-.763.646 9.502 9.502 0 0 1 1.487 2.408.5.5 0 0 0 .656.264Zm-2.118 9.563a9.553 9.553 0 0 1-2.122 1.875.5.5 0 0 0 .544.84c.881-.572 1.671-1.27 2.344-2.072a.5.5 0 0 0-.766-.643Zm-5.622 3.253a9.557 9.557 0 0 1-2.83.073.5.5 0 0 0-.122.992 10.587 10.587 0 0 0 3.126-.08.5.5 0 1 0-.174-.985ZM2.513 12.493a.5.5 0 0 0-1 .051c.056 1.072.271 2.102.624 3.066a.5.5 0 0 0 .94-.344 9.458 9.458 0 0 1-.564-2.773Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon140);
export default ForwardRef;
