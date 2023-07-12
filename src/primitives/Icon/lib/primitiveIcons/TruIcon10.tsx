import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon10 = (
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
    <path d="M21.295 11.811c-.652-1.017-1.315-1.73-2.001-2.194a3.737 3.737 0 0 0-1.709-.64A6.35 6.35 0 0 0 5.65 12c0 .793.152 1.55.418 2.25a3.194 3.194 0 0 1-.97-.447c-.582-.393-1.187-1.03-1.803-1.992a.35.35 0 0 0-.59.378c.652 1.017 1.315 1.73 2.001 2.194a3.737 3.737 0 0 0 1.709.64A6.35 6.35 0 0 0 18.35 12c0-.793-.152-1.55-.418-2.25.32.086.64.225.97.447.582.393 1.187 1.03 1.803 1.992a.35.35 0 1 0 .59-.378ZM6.35 12c0-1.561.632-2.972 1.655-3.995A5.63 5.63 0 0 1 12 6.35a5.63 5.63 0 0 1 3.995 1.655c.296.296.555.628.78.984-1.757.199-3.383 1.492-4.99 2.735-1.706 1.342-3.393 2.605-4.92 2.622A5.62 5.62 0 0 1 6.35 12Zm9.645 3.995A5.63 5.63 0 0 1 12 17.65a5.63 5.63 0 0 1-3.995-1.655 5.68 5.68 0 0 1-.78-.984c1.757-.199 3.383-1.492 4.99-2.735 1.706-1.342 3.392-2.605 4.92-2.623a5.631 5.631 0 0 1-1.14 6.342Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon10);
export default ForwardRef;
