import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont95 = (
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
    <path d="M12.35 7.56a7.51 7.51 0 0 0-1.7-.47l-.12.82a6.65 6.65 0 0 1 1.47.42Zm1.65.92-.5.67a6.43 6.43 0 0 1 1.14 1.07l.64-.53A7.71 7.71 0 0 0 14 8.48Zm1.51 3.07A6.34 6.34 0 0 1 16 13l.82-.19a7.46 7.46 0 0 0-.59-1.66ZM7.15 11a7.41 7.41 0 0 0 .54 1.67l.76-.35A6.85 6.85 0 0 1 8 10.81Zm2.13 2.67-.65.52a7.72 7.72 0 0 0 1.25 1.24l.51-.66a6.79 6.79 0 0 1-1.11-1.12Zm2.19 2.71a7.53 7.53 0 0 0 1.69.52l.15-.82a6.37 6.37 0 0 1-1.5-.46ZM14.5 2a7.5 7.5 0 0 0-7.18 5.33 7.5 7.5 0 1 0 9.35 9.34A7.49 7.49 0 0 0 14.5 2Zm2.39 13.72A8.33 8.33 0 0 0 17 14.6h-.83A6.63 6.63 0 0 1 16 16a6.49 6.49 0 0 1-1.16.17V17a6.13 6.13 0 0 0 .85-.09A6.67 6.67 0 1 1 7.1 8.28a7.3 7.3 0 0 0-.1.94h.83A6.39 6.39 0 0 1 8 8a6.72 6.72 0 0 1 1-.16V7c-.22 0-.43 0-.65.08a6.66 6.66 0 1 1 8.59 8.62Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont95);
export default ForwardRef;
