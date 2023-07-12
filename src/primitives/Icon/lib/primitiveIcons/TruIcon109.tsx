import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon109 = (
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
    <path d="M16.748 14.348c-.193 0-.383.04-.558.116l-3.147 1.326a1.413 1.413 0 0 0-.595-.272.467.467 0 0 0-.02-.004L8.11 14.84a.486.486 0 0 0-.421.138l-1.89 1.906a.487.487 0 0 0-.14.343v4.29c0 .421.525.644.827.347l1.732-1.7 4.093.004c.101 0 .2-.032.282-.09l4.793-3.4c.46-.298.722-.849.584-1.391a1.255 1.255 0 0 0-1.222-.94Zm.105 1.515-4.696 3.331-4.137-.003a.49.49 0 0 0-.341.139l-1.047 1.027v-2.93l1.573-1.587 4.056.633c.151.031.31.151.29.323-.02.176-.187.26-.35.25H9.339v.974l2.832-.001c.765.026 1.429-.587 1.349-1.374l3.053-1.287c.13-.056.312-.058.405.066.118.158.024.345-.125.439Zm-3.537-9.154h-1.063l-.651 2.036c-.236.7-.012 1.526.697 1.838.7.308 1.53.033 2.092-.43.339.51 1.092.662 1.662.519.17-.268.315-.547.428-.844-.414.046-1.242.093-1.347-.463a.596.596 0 0 1 .028-.3l.764-2.356h-1.063l-.653 2.039c0 .002 0 .003-.002.005-.146.42-.515.782-.942.911-.191.058-.42.075-.59-.049-.174-.125-.188-.362-.125-.55l.765-2.356Zm-6.24 2.438-.984.2c.485 2.534 2.575 4.551 5.124 4.945a6.244 6.244 0 0 0 6.327-3.055c1.262-2.213 1.007-5.059-.623-7.015-1.674-2.01-4.516-2.759-6.963-1.822a6.23 6.23 0 0 0-3.046 2.52c-.377.606-.627 1.374-.265 2.046.283.527.892.714 1.454.742.052.003.104.004.157.004h.787l-.286.895c-.217.645-.076 1.432.507 1.837.572.397 1.412.322 2.018.043a2.01 2.01 0 0 1-.343-.894c-.277.107-.668.188-.956.076-.311-.12-.352-.465-.272-.753l.39-1.204h1.216l.32-1.003H10.43l.535-1.643H9.898L9.365 6.71H8.257c-.272 0-.662-.063-.721-.387-.063-.344.153-.735.32-1.018l.012-.02a5.215 5.215 0 0 1 3.353-2.202 5.215 5.215 0 0 1 3.716.717 5.222 5.222 0 0 1 2.179 2.841 5.22 5.22 0 0 1-.238 3.7 5.226 5.226 0 0 1-2.518 2.536 5.22 5.22 0 0 1-3.74.25 5.226 5.226 0 0 1-3.544-3.979Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon109);
export default ForwardRef;
