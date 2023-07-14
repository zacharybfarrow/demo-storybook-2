import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont387 = (
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
    <path d="M21.912 15.28v.001Zm.088.498c0-.165-.028-.334-.088-.497v-.003a1.465 1.465 0 0 0-1.871-.873l-3.089 1.043c.007-.059.018-.117.018-.178v-.002a1.46 1.46 0 0 0-1.46-1.453h-1.338l.231-.23 4.171-4.14.014-.014.012-.014.163-.199.006-.008.006-.008a3.19 3.19 0 0 0 .617-1.884V7.27a3.215 3.215 0 0 0-3.207-3.215h-.008c-.758 0-1.487.267-2.063.749a3.205 3.205 0 0 0-1.868-.615c-.884 0-1.768.363-2.403 1.075a3.214 3.214 0 0 0-.818 2.145c0 .74.254 1.482.764 2.083l.01.011.01.01.001.001 4.07 4.07.23.23h-3.925l-.808-.663h.001a2.279 2.279 0 0 0-1.452-.522h-.9v-.9H2v6.948h5.026v-.84h.572l5.729 2.014a1.441 1.441 0 0 0 1.019-.003l.002-.001 6.703-2.703c.585-.22.95-.774.949-1.367ZM6.283 17.935h-3.54v-5.463h3.54v5.463Zm4.068-8.929a2.47 2.47 0 0 1 .045-3.246 2.47 2.47 0 0 1 1.85-.828c.588 0 1.175.207 1.649.63l.264.236.249-.254a2.472 2.472 0 0 1 1.769-.745h.006a2.472 2.472 0 0 1 2.466 2.472v.047c0 .518-.165 1.023-.47 1.442l-.141.17-3.895 3.868-3.792-3.792Zm10.434 7.446-.006.002-6.699 2.701a.696.696 0 0 1-.497 0l-.005-.002-5.853-2.057h-.659v-3.723h.86c.358 0 .704.124.979.352h.001l.91.748.048-.057v.142h5.646c.395 0 .715.319.717.713 0 .19-.076.36-.196.489l-.655.221.002.006h-4.914v.743h5.046c.338 0 .644-.12.891-.311l3.88-1.312.006-.002a.72.72 0 0 1 .97.673c0 .293-.18.569-.472.674Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont387);
export default ForwardRef;
