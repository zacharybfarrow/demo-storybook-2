import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon129 = (
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
    role="img"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.155 19.46a.4.4 0 0 1-.399-.398v-1.275a6.72 6.72 0 0 1 3.888-6.086 5.907 5.907 0 0 1-.855-.573 7.616 7.616 0 0 0-3.932 6.66v1.274a1.3 1.3 0 0 0 1.298 1.298h8.014a5.256 5.256 0 0 1-.505-.9H4.155ZM20 20.236l-.454-.454c.53-.668.848-1.511.848-2.428a3.917 3.917 0 0 0-3.68-3.905 7.64 7.64 0 0 0-4.043-2.946 4.54 4.54 0 0 0 2.335-3.965A4.543 4.543 0 0 0 10.468 2C7.966 2 5.93 4.036 5.93 6.538s2.036 4.538 4.538 4.538a6.7 6.7 0 0 1 5.184 2.455 3.918 3.918 0 0 0-3.082 3.823 3.917 3.917 0 0 0 3.912 3.912c.917 0 1.76-.318 2.428-.848l.469.468V22h.899v-.865h.865v-.899H20ZM6.83 6.538a3.643 3.643 0 0 1 3.639-3.64c2.006 0 3.639 1.633 3.639 3.64s-1.633 3.639-3.639 3.639a3.643 3.643 0 0 1-3.639-3.64Zm9.653 13.83c-1.662 0-3.013-1.353-3.013-3.014s1.351-3.014 3.013-3.014 3.014 1.352 3.014 3.014c0 .669-.22 1.287-.59 1.788l-.626-.626a2.13 2.13 0 0 0 .345-1.162c0-1.182-.961-2.144-2.143-2.144s-2.143.962-2.143 2.144.961 2.143 2.143 2.143c.429 0 .827-.128 1.163-.345l.625.625c-.5.37-1.119.59-1.788.59Zm.318-3.332-.636.635.82.82a1.246 1.246 0 0 1-1.747-1.138c0-.686.559-1.244 1.245-1.244a1.246 1.246 0 0 1 1.138 1.747l-.82-.82Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon129);
export default ForwardRef;
