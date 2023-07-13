import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports338 = (
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
    <path d="m12 5.78 1.818 3.683.29.59.651.094 4.065.59-2.941 2.868-.47.459.11.647.695 4.05-3.636-1.912-.582-.306-.582.306-3.636 1.911.695-4.049.11-.647-.47-.46-2.941-2.866 4.065-.591.65-.095.291-.589L12 5.78m0-2.824L9.061 8.91l-6.572.955L7.245 14.5l-1.123 6.545L12 17.955l5.878 3.09-1.123-6.545 4.756-4.635-6.572-.955Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports338);
export default ForwardRef;
