import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont370 = (
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
    <path d="M15.32 11.631a.369.369 0 0 0 0-.738.369.369 0 0 0 0 .738Zm5.998-6.579-9-3a1 1 0 0 0-.64 0l-9 3A1 1 0 0 0 2 6.001v3.78a12.419 12.419 0 0 0 9.8 12.22h.42A12.419 12.419 0 0 0 22 9.78v-3.78a1 1 0 0 0-.682-.949ZM21 9.788A11.47 11.47 0 0 1 12.11 21h-.201A11.47 11.47 0 0 1 3 9.782L2.995 6l9-3L21 6ZM6.835 8.495v7.01c0 1.647 2.677 2.398 5.165 2.398s5.165-.75 5.165-2.398v-7.01c-.067-3.215-10.264-3.214-10.33 0Zm9.592 0c-.062 2.176-8.794 2.174-8.854 0 .061-2.175 8.794-2.174 8.854 0ZM7.573 9.81c1.971 1.45 6.883 1.45 8.854 0v1.267h-.002c-.022 2.177-8.83 2.175-8.85 0h-.002Zm0 2.103c1.533 1.587 7.321 1.587 8.854 0v1.378h-.002c-.022 2.176-8.83 2.175-8.85 0h-.002Zm0 2.214c1.533 1.587 7.321 1.587 8.854 0v1.378c-.064 2.176-8.793 2.173-8.854 0Zm7.747 1.931a.37.37 0 0 0 0-.738.37.37 0 0 0 0 .738Zm0-2.213a.369.369 0 0 0 0-.738.369.369 0 0 0 0 .738Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont370);
export default ForwardRef;
