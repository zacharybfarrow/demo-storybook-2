import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon17 = (
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
    <path d="M8.867 12.754h6.266v-.85H8.867v.85Zm11.579-5.918h-1.334l-1.309-2.029a1.27 1.27 0 0 0-1.07-.584H7.267a1.27 1.27 0 0 0-1.071.584L4.888 6.836H3.555C2.697 6.836 2 7.533 2 8.39c0 .69.453 1.274 1.075 1.476v8.636c0 .703.572 1.275 1.275 1.275h1.386c.702 0 1.274-.572 1.274-1.275V17.38h9.98v1.123c0 .703.572 1.275 1.274 1.275h1.386c.703 0 1.275-.572 1.275-1.275V9.87A1.557 1.557 0 0 0 22 8.39c0-.857-.697-1.554-1.554-1.554ZM3.438 9.085a.705.705 0 0 1 .117-1.4h.785l-.902 1.4Zm.487 2.922h.929c.814 0 1.476.662 1.476 1.476v.425H3.925v-1.9Zm2.236 6.495c0 .235-.191.425-.425.425H4.35a.425.425 0 0 1-.425-.425v-1.198c.133.047.276.075.425.075h1.81v1.123Zm13.914 0c0 .235-.19.425-.425.425h-1.386a.425.425 0 0 1-.424-.425V17.38h1.81c.15 0 .292-.028.425-.075v1.198Zm0-4.594H17.67v-.425c0-.814.662-1.476 1.476-1.476h.929v1.9Zm0-2.75h-.929a2.328 2.328 0 0 0-2.325 2.325v.85c0 .234.19.425.425.425h2.829v1.346c0 .234-.19.425-.425.425H4.35a.425.425 0 0 1-.425-.425v-1.346h2.83c.234 0 .424-.19.424-.425v-.85a2.328 2.328 0 0 0-2.325-2.326h-.929v-.787c0-.235.19-.425.425-.425h14.24l-.548-.85h-13.6L6.91 5.267a.423.423 0 0 1 .357-.194h9.464c.145 0 .279.073.357.194l2.918 4.525a.424.424 0 0 1 .068.23v1.135Zm.487-2.073-.902-1.4h.786a.706.706 0 0 1 .116 1.4Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon17);
export default ForwardRef;
