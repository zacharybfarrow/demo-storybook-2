import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon98 = (
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
    <path d="M16.202 7.164h3.346a.454.454 0 0 0 .322-.775l-4.256-4.256a.453.453 0 0 0-.315-.132L9.062 2C8.311 2 7.7 2.612 7.7 3.363v.483h-.486c-.751 0-1.363.612-1.363 1.364v.488h-.49c-.751 0-1.363.612-1.363 1.363v13.576c0 .751.612 1.363 1.364 1.363h9.513c.752 0 1.364-.612 1.364-1.363v-.489h.49c.751 0 1.363-.611 1.363-1.363v-.483h.485c.752 0 1.364-.611 1.364-1.363V8.526h-.91v8.413c0 .25-.203.454-.454.454H9.062a.455.455 0 0 1-.454-.454V3.363c0-.25.204-.454.454-.454h5.776v2.892c0 .752.612 1.363 1.364 1.363Zm-.455-3.612 2.704 2.703h-2.249a.455.455 0 0 1-.455-.454V3.55Zm-.418 17.085c0 .25-.204.454-.455.454H5.361a.455.455 0 0 1-.455-.454V7.06c0-.25.204-.454.455-.454h.489v12.178c0 .752.612 1.363 1.363 1.363h8.116v.489Zm-6.267-2.335h8.12v.483c0 .25-.204.454-.455.454H7.213a.455.455 0 0 1-.454-.454V5.21c0-.25.204-.455.454-.455H7.7V16.94c0 .752.612 1.363 1.363 1.363Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon98);
export default ForwardRef;
