import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont385 = (
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
    <path d="m9.3 8.501.002-.004-.002.004Zm9.358 4.865-.003-.002a.842.842 0 0 0-1.19 0l-5.444 5.45-5.018-5.018a.842.842 0 0 0-1.19 0l-.006.006-.007.006v.002l-.006.005a.827.827 0 0 0 .02 1.163l-.002.002 5.615 5.622.006.005c.159.15.368.233.586.234h.014c.22 0 .431-.083.592-.234l.006-.006 6.028-6.05.003-.002a.85.85 0 0 0 0-1.178l-.004-.005Zm1.885-2.916h-5.869a.843.843 0 0 0-.722.421L12.604 13.2l-1.751-4.67h-.001a.822.822 0 0 0-.69-.53l.001-.005-.087-.01h-.005c-.066.002-.088.011-.09.01l.002.004a.83.83 0 0 0-.683.503l-1.18 2.777H3.652v.004H3.65v-.004a.44.44 0 0 0-.096.012c-.004.001-.01 0-.013.002-.026.006-.041.013-.048.015l-.004.001.001.003a.824.824 0 0 0-.676.803c0 .466.377.843.843.843h5.026a.843.843 0 0 0 .768-.512l.58-1.377 1.66 4.365.001.003a.85.85 0 0 0 .716.537l.033.003.032-.002a.836.836 0 0 0 .654-.38l.006-.01 2.001-3.448h5.41a.843.843 0 0 0 0-1.686Zm-.109-5.63a5.34 5.34 0 0 0-3.788-1.572c-1.368 0-2.74.523-3.785 1.566l-.82.82-.824-.82a5.348 5.348 0 0 0-8.897 5.51v.001l.003.008h.001a.842.842 0 0 0 .778.563h.081l.163-.027.036-.006.035-.012a.843.843 0 0 0 .527-1.069 3.673 3.673 0 0 1 .877-3.787 3.661 3.661 0 0 1 2.6-1.08c.943.001 1.88.358 2.6 1.076l1.42 1.42.002.003a.85.85 0 0 0 1.178 0l.003-.003 1.42-1.42a3.677 3.677 0 0 1 6.235 3.158v.002l-.01.128c0 .407.296.761.71.825l.006.001h.003l.114.008a.85.85 0 0 0 .838-.708V9.4l.001-.005a5.361 5.361 0 0 0-1.507-4.576Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont385);
export default ForwardRef;
