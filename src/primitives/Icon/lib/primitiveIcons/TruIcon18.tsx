import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon18 = (
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
    <path d="M21.55 12.943h-.625v-4.04A1.557 1.557 0 0 0 22 7.427c0-.858-.697-1.555-1.554-1.555h-1.334l-1.309-2.029a1.27 1.27 0 0 0-1.07-.583H7.267a1.27 1.27 0 0 0-1.071.583l-1.309 2.03H3.555C2.697 5.871 2 6.567 2 7.425c0 .69.453 1.273 1.075 1.476v8.636c0 .702.572 1.274 1.275 1.274h1.386c.702 0 1.274-.572 1.274-1.274v-1.124h5.983a10.651 10.651 0 0 1-.185-.85H4.35a.425.425 0 0 1-.425-.425v-1.346h2.83c.234 0 .424-.19.424-.425v-.85a2.328 2.328 0 0 0-2.325-2.325h-.929v-.788c0-.234.19-.425.425-.425h14.24l-.548-.85h-13.6L6.91 4.303a.423.423 0 0 1 .357-.195h9.464c.145 0 .279.073.357.195l2.918 4.524a.424.424 0 0 1 .068.23v1.136h-.929a2.328 2.328 0 0 0-2.325 2.325v.425h-2.507a.425.425 0 0 0-.425.425c0 3.528 1.256 5.923 3.84 7.322a.424.424 0 0 0 .405 0c2.584-1.399 3.84-3.794 3.84-7.322a.425.425 0 0 0-.425-.425Zm-17.2 3.47h1.81v1.125c0 .234-.19.424-.424.424H4.35a.425.425 0 0 1-.425-.424v-1.199c.133.048.276.075.425.075Zm.504-5.37c.814 0 1.476.661 1.476 1.475v.425H3.925v-1.9h.929ZM3.438 8.12a.705.705 0 0 1 .117-1.4h.785l-.902 1.4Zm16.222-1.4h.786a.706.706 0 0 1 .116 1.4l-.902-1.4Zm-1.99 5.798c0-.814.662-1.476 1.476-1.476h.929v1.901H17.67v-.425Zm.261 7.312c-2.077-1.208-3.097-3.138-3.186-6.037h6.044l-2.858 2.858-1.208-1.21-.601.602 1.509 1.509a.424.424 0 0 0 .6 0l2.82-2.82c-.265 2.383-1.276 4.026-3.12 5.098Zm-2.798-8.876H8.867v.85h6.266v-.85Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon18);
export default ForwardRef;
