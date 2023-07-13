import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon79 = (
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
    <path d="M4.907 19.82V3.308c0-.24.195-.436.436-.436h7.601v2.892a1.31 1.31 0 0 0 1.308 1.308h3.329a.436.436 0 0 0 .308-.744l-4.2-4.2A.436.436 0 0 0 13.38 2H5.343a1.31 1.31 0 0 0-1.309 1.308V19.82a1.31 1.31 0 0 0 1.309 1.308h5.553v-.872H5.343a.437.437 0 0 1-.436-.436Zm8.91-16.331 1.388 1.388L16.528 6.2h-2.276a.437.437 0 0 1-.436-.436V3.49ZM6.44 12.13h9.108v-.872H6.44v.872Zm13.089 3.699h-1.008v-.774c0-.594-.213-1.139-.568-1.562V8.385h-.872v4.446a2.434 2.434 0 0 0-2.909.713H6.442v.872h7.292a2.432 2.432 0 0 0-.086.639v.774l-7.206.001v.873h5.763v4.86c0 .242.195.437.436.437h6.89c.24 0 .436-.195.436-.436v-5.3a.436.436 0 0 0-.436-.435Zm-5.01-.774c0-.863.702-1.566 1.565-1.566s1.565.703 1.565 1.566v.774h-3.13v-.774Zm4.573 6.073h-6.017V16.7h6.017v4.427Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon79);
export default ForwardRef;
