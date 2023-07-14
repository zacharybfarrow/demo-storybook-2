import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont368 = (
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
    data-name="Layer 1"
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
    <path d="M12.337 9.42h.045a1.326 1.326 0 0 0 1.351-1.3V8.07a1.349 1.349 0 0 0-2.698 0 1.325 1.325 0 0 0 1.302 1.349Zm-5.025 4.06c0 1.212-.673 1.678-1.527 1.678s-1.528-.466-1.528-1.678V7.534H2v5.974a3.43 3.43 0 0 0 3.785 3.772 3.432 3.432 0 0 0 3.784-3.772V7.534H7.312Zm9.927-5.946h-2.274a2.84 2.84 0 0 1 .052.538 2.649 2.649 0 0 1-.496 1.554h2.412a2.406 2.406 0 0 1 2.614 2.726 2.406 2.406 0 0 1-2.614 2.725h-3.422v-4.622a2.693 2.693 0 0 1-2.257 0v6.713h5.983A4.484 4.484 0 0 0 22 12.352a4.484 4.484 0 0 0-4.761-4.818Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont368);
export default ForwardRef;
