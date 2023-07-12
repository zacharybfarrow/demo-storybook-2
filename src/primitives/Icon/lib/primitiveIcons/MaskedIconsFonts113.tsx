import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts113 = (
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
    <path d="M15.16 7.71a.68.68 0 0 0-.36-.42l-1.21-.62-.22-1.35a.7.7 0 0 0-.28-.46.65.65 0 0 0-.54-.12L11.2 5l-1-1a.72.72 0 0 0-.5-.22.67.67 0 0 0-.47.22l-1 1-1.31-.26a.75.75 0 0 0-.54.12.67.67 0 0 0-.28.46l-.22 1.35-1.21.62a.68.68 0 0 0-.36.42.74.74 0 0 0 0 .55L5 9.46l-.62 1.21a.73.73 0 0 0 0 .54.68.68 0 0 0 .36.42l1.21.62.15 1.35a.7.7 0 0 0 .28.46.65.65 0 0 0 .54.12L8.27 14l1 1a.74.74 0 0 0 .51.22.65.65 0 0 0 .5-.22l1-1 1.35.22a.73.73 0 0 0 .54-.12.67.67 0 0 0 .28-.46l.22-1.35 1.21-.62a.68.68 0 0 0 .36-.42.72.72 0 0 0 0-.54l-.74-1.25.62-1.2a.74.74 0 0 0 .04-.55ZM13.81 9.8l.61 1.2-1.21.6a.73.73 0 0 0-.38.52l-.2 1.33-1.33-.22a.72.72 0 0 0-.62.2l-.94.94-1-.94a.72.72 0 0 0-.5-.22h-.07l-1.33.22-.2-1.33a.73.73 0 0 0-.38-.52L5.06 11l.6-1.21a.76.76 0 0 0 0-.66l-.6-1.21 1.2-.6a.73.73 0 0 0 .38-.52l.2-1.33 1.33.23a.72.72 0 0 0 .62-.21l1-.94.94.94a.72.72 0 0 0 .62.21l1.33-.23.2 1.33a.73.73 0 0 0 .38.52l1.21.6-.61 1.21a.81.81 0 0 0-.05.67Zm-5.62 5.39V18l1.55.8 1.54-.8v-2.81a.39.39 0 0 1 .77 0v3a.41.41 0 0 1-.2.34l-1.93 1a.42.42 0 0 1-.36 0l-1.93-1a.39.39 0 0 1-.2-.34v-3a.38.38 0 1 1 .76 0Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts113);
export default ForwardRef;
