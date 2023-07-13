import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont106 = (
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
    <path d="M21.34 11.7a.67.67 0 0 0-.66.66v4.88a9 9 0 0 1 0 .9 4.15 4.15 0 0 1-.11.48c0 .09-.06.18-.09.27l-.08.11a3.77 3.77 0 0 1-.28.48l-.12.12a1.45 1.45 0 0 1-.21.22 1.8 1.8 0 0 1-.2.19l-.08.07a4.57 4.57 0 0 1-.47.29l-.11.05-.25.08a4.21 4.21 0 0 1-.48.12 8 8 0 0 1-.85 0H5.86a4.15 4.15 0 0 1-.48-.11c-.09 0-.18-.06-.27-.09L5 20.4a3.77 3.77 0 0 1-.48-.28L4.4 20a1.45 1.45 0 0 1-.22-.21 1.8 1.8 0 0 1-.19-.2l-.07-.08a4.57 4.57 0 0 1-.31-.51v-.11c0-.09-.06-.17-.08-.25a4.21 4.21 0 0 1-.12-.48 8 8 0 0 1 0-.85V5.86a4.15 4.15 0 0 1 .11-.48c0-.09.06-.18.09-.27L3.6 5a3.77 3.77 0 0 1 .28-.48L4 4.4a1.45 1.45 0 0 1 .21-.22A1.8 1.8 0 0 1 4.38 4l.08-.07A4.57 4.57 0 0 1 5 3.61h.11l.25-.08a2.8 2.8 0 0 1 .5-.12H11.65a.66.66 0 0 0 0-1.32h-5.6a4.24 4.24 0 0 0-3.91 3.06A5.5 5.5 0 0 0 2 6.55v11A5 5 0 0 0 2.2 19a4.24 4.24 0 0 0 2.24 2.56 4.57 4.57 0 0 0 2 .41h10.89a7.74 7.74 0 0 0 1.08-.06 4.25 4.25 0 0 0 2.88-1.84 4.32 4.32 0 0 0 .71-2.44v-5.27a.67.67 0 0 0-.66-.66Zm-4.78-5.19-3.14 3.14-1.8 1.8-.07.07a.66.66 0 0 0 .93.93l1.33-1.33 3-3L19.94 5l.74-.74v3.62a.66.66 0 0 0 1.32 0V2.66a.7.7 0 0 0 0-.25.41.41 0 0 0-.05-.09v-.06h-.06l-.09-.05a.7.7 0 0 0-.25 0h-5.43a.66.66 0 0 0 0 1.32h3.63l-.2.2Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont106);
export default ForwardRef;
