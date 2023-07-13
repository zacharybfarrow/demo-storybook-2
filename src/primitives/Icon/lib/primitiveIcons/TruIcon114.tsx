import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon114 = (
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
    <path d="M12.967 11.361a1.27 1.27 0 0 1-1.269-1.268h-.841c0 1.02.726 1.872 1.689 2.068v1.198h.841v-1.198a2.113 2.113 0 0 0 1.69-2.068c0-1.163-.947-2.11-2.11-2.11-.7 0-1.269-.569-1.269-1.268s.57-1.268 1.269-1.268 1.268.569 1.268 1.268h.841c0-1.02-.726-1.872-1.689-2.067v-1.2h-.841v1.2a2.113 2.113 0 0 0-1.69 2.067c0 1.163.947 2.11 2.11 2.11.7 0 1.269.569 1.269 1.268s-.57 1.268-1.268 1.268ZM9.84 5.453H2v.842h7.622c.036-.294.11-.576.218-.842Zm11.882.473c-.24-.3-.6-.473-.985-.473h-4.644c.107.266.182.548.219.842h4.425a.419.419 0 0 1 .411.512l-1.712 7.682a.418.418 0 0 1-.41.33H6.433L4.821 7.576h-.863l2.147 9.636c.13.581.637.987 1.233.987h.19a1.598 1.598 0 0 0 1.406 2.35 1.598 1.598 0 0 0 1.406-2.35h5.84a1.598 1.598 0 0 0 1.406 2.35c.88.001 1.597-.715 1.597-1.595s-.716-1.596-1.596-1.596H7.337a.418.418 0 0 1-.41-.33l-.305-1.37h12.403c.596 0 1.103-.405 1.233-.987l1.711-7.682a1.256 1.256 0 0 0-.247-1.064ZM17.587 18.2a.756.756 0 1 1-.002 1.512.756.756 0 0 1 .002-1.512Zm-8.653 0a.755.755 0 1 1-.002 1.511.755.755 0 0 1 .002-1.51Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon114);
export default ForwardRef;
