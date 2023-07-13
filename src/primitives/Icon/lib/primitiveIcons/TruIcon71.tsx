import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon71 = (
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
    <path d="M17.43 12.533a3.987 3.987 0 0 0 1.907-3.4 3.99 3.99 0 0 0-3.986-3.985 3.97 3.97 0 0 0-2.757 1.111A3.991 3.991 0 0 0 8.65 2.835 3.99 3.99 0 0 0 4.663 6.82c0 1.453.781 2.726 1.945 3.422C3.938 11.106 2 13.615 2 16.57v1.338a1.33 1.33 0 0 0 1.328 1.328h5.685L7.75 20.498l.626.627 2.02-2.02a.443.443 0 0 0 0-.626l-2.02-2.02-.626.627 1.263 1.264H3.328a.443.443 0 0 1-.443-.443v-1.338a5.77 5.77 0 0 1 5.764-5.763 3.97 3.97 0 0 0 2.757-1.111 3.993 3.993 0 0 0 1.87 2.84 6.567 6.567 0 0 0-3.806 3.15l.659.659.002-.005a5.667 5.667 0 0 1 5.094-3.22h.253a5.643 5.643 0 0 1 5.637 5.637v1.081a.443.443 0 0 1-.443.443h-9.573l-.886.885h10.459A1.33 1.33 0 0 0 22 19.837v-1.08a6.534 6.534 0 0 0-4.57-6.224ZM8.65 9.92c-1.71 0-3.1-1.391-3.1-3.1 0-1.71 1.39-3.101 3.1-3.101s3.1 1.39 3.1 3.1c0 1.71-1.39 3.1-3.1 3.1Zm6.702 2.313c-1.71 0-3.1-1.39-3.1-3.1s1.39-3.1 3.1-3.1c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon71);
export default ForwardRef;
