import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon78 = (
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
    role="img"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M21.763 15.618a1.817 1.817 0 0 0-2.47-.687l-4.24 2.337a2.856 2.856 0 0 1-.3.148A1.923 1.923 0 0 0 13 14.708H8.993c-.982 0-1.866.423-2.482 1.096a1.364 1.364 0 0 0-1.337-1.107H3.362c-.592 0-1.095.38-1.283.908h3.094c.25 0 .454.204.454.454v4.018c0 .25-.204.454-.454.454H3.362a.454.454 0 0 1-.454-.454v-3.11H2v3.11c0 .75.61 1.362 1.362 1.362h1.81c.661 0 1.213-.473 1.336-1.097a3.357 3.357 0 0 0 2.484 1.097h5.703c.235 0 .467-.062.668-.175l5.716-3.171c.422-.24.726-.629.855-1.096s.068-.958-.171-1.38Zm-.704 1.137a.9.9 0 0 1-.424.546l-5.716 3.17a.455.455 0 0 1-.224.06H8.992c-1.355 0-2.457-1.102-2.457-2.457s1.102-2.458 2.457-2.458h4.01a1.014 1.014 0 0 1 0 2.026h-2.597v.908h3.232c.653 0 1.298-.17 1.86-.49l4.239-2.336a.909.909 0 0 1 1.323 1.031Zm-9.06-5.657a1.37 1.37 0 0 1-1.367-1.369h-.908c0 1.1.784 2.02 1.822 2.23v1.294h.908V11.96a2.28 2.28 0 0 0 1.822-2.23A2.279 2.279 0 0 0 12 7.452c-.755 0-1.368-.614-1.368-1.368S11.245 4.717 12 4.717a1.37 1.37 0 0 1 1.368 1.368h.908c0-1.1-.784-2.02-1.822-2.23V2.56h-.908v1.293a2.28 2.28 0 0 0-1.822 2.231A2.279 2.279 0 0 0 12 8.361c.754 0 1.368.614 1.368 1.368s-.614 1.369-1.368 1.369Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon78);
export default ForwardRef;
