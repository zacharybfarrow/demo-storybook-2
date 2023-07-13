import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont324 = (
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
    <path d="m8.288 11.34 2.354.48c.112-.816.496-1.344 1.28-1.344a1.09 1.09 0 0 1 1.104 1.152 2.869 2.869 0 0 1-.752 1.745l-4.097 5.01v1.184h7.57v-2.24h-3.745l2.225-2.802a4.68 4.68 0 0 0 1.28-2.977 3.247 3.247 0 0 0-3.585-3.314 3.463 3.463 0 0 0-3.634 3.106ZM21.87 9.612l-9.474-7.58a.632.632 0 0 0-.79 0l-9.474 7.58a.632.632 0 0 0 .392 1.125h1.263v10.737a.632.632 0 0 0 .631.632h15.16a.632.632 0 0 0 .631-.632V10.737h1.263a.632.632 0 0 0 .398-1.125Zm-2.293-.139a.632.632 0 0 0-.631.632v10.738H5.049V10.105a.632.632 0 0 0-.632-.632h-.094l7.674-6.14 7.674 6.14Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont324);
export default ForwardRef;
