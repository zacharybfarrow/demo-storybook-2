import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont276 = (
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
    <path
      d="m3 18.22 5.15-6.08a1.2 1.2 0 0 0 .2-.3.6.6 0 0 0 .06-.27V3.5H8A.75.75 0 0 1 8 2h8.1a.75.75 0 0 1 0 1.5h-.53v8.07a.6.6 0 0 0 .06.27 1 1 0 0 0 .2.3L21 18.22a2.46 2.46 0 0 1 .57 1.14 2.09 2.09 0 0 1-.13 1.25A2.23 2.23 0 0 1 19.33 22H4.67a2.23 2.23 0 0 1-2.07-1.39 2.09 2.09 0 0 1-.13-1.25A2.46 2.46 0 0 1 3 18.22Zm11.38-4.07a3.05 3.05 0 0 0-1.86.72c-1.64 1.11-2.12 1-3.68.54a.73.73 0 0 0-.77.24L5 19.4a.37.37 0 0 0-.12.33.21.21 0 0 0 .22.14H19a.21.21 0 0 0 .22-.14c0-.12-.05-.24-.12-.33l-4-5a.73.73 0 0 0-.66-.27Zm-2.49 3.51a.85.85 0 0 1 .85.85.84.84 0 0 1-.85.84.83.83 0 0 1-.84-.84.84.84 0 0 1 .88-.85Zm1.32-2.26a.94.94 0 1 1-.94.94.94.94 0 0 1 .98-.94Zm-3 1a.49.49 0 1 1-.49.49.49.49 0 0 1 .51-.53Zm3.85-12.9H9.94v8.07a2.07 2.07 0 0 1-.18.86 3 3 0 0 1-.43.68l-5.15 6.07a1 1 0 0 0-.24.47.62.62 0 0 0 0 .4.76.76 0 0 0 .27.34.79.79 0 0 0 .42.11h14.7a.79.79 0 0 0 .42-.11.76.76 0 0 0 .27-.34.62.62 0 0 0 0-.4 1 1 0 0 0-.24-.47l-5.15-6.07a3 3 0 0 1-.43-.68 2.07 2.07 0 0 1-.18-.86V3.5Z"
      style={{
        fillRule: "evenodd",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont276);
export default ForwardRef;
