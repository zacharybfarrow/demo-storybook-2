import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont330 = (
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
    <g data-name="Group 4774">
      <path
        d="m21.318 5.052-9-3a1 1 0 0 0-.64 0l-9 3A1 1 0 0 0 2 6.001v3.78a12.419 12.419 0 0 0 9.8 12.22h.42A12.419 12.419 0 0 0 22 9.78v-3.78a1 1 0 0 0-.682-.949ZM20 9.782A10.419 10.419 0 0 1 12 20 10.429 10.429 0 0 1 4 9.782v-3.06l8-2.67 8 2.67Z"
        data-name="Path 2060"
      />
      <path
        d="M10.71 9.292a1.004 1.004 0 1 0-1.42 1.42l1.3 1.29-1.3 1.29a1.004 1.004 0 1 0 1.42 1.42l1.29-1.3 1.29 1.3a1.004 1.004 0 1 0 1.42-1.42l-1.3-1.29 1.3-1.29a1.004 1.004 0 1 0-1.42-1.42l-1.29 1.3Z"
        data-name="Path 2061"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont330);
export default ForwardRef;
