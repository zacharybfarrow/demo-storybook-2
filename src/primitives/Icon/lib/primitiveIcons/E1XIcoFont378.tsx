import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont378 = (
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
    <path d="M18.737 6.5h2a1 1 0 0 0 1-1v-2a1.002 1.002 0 0 0-1-1h-2a1 1 0 0 0-1 1v.442h-2.834v8.304h-2.067a5.435 5.435 0 0 0-10.86.333 5.437 5.437 0 0 0 10.833.667h2.094v6.705h2.834v.549a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1.002 1.002 0 0 0-1-1h-2a1 1 0 0 0-1 1v.451h-1.834v-4.153h1.834v.702a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1.002 1.002 0 0 0-1-1h-2a1 1 0 0 0-1 1v.298h-1.834V10.15h1.834v.349a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1.002 1.002 0 0 0-1-1h-2a1 1 0 0 0-1 1v.651h-1.834V4.942h1.834V5.5a1 1 0 0 0 1 1Zm0-3h2v2h-2v-2ZM10.64 15.804a4.545 4.545 0 0 1-3.226 1.336c-1.26 0-2.398-.51-3.225-1.336a4.545 4.545 0 0 1-1.336-3.225c0-1.261.51-2.399 1.336-3.225a4.545 4.545 0 0 1 3.225-1.336c1.261 0 2.399.51 3.226 1.336a4.545 4.545 0 0 1 1.336 3.225c0 1.26-.51 2.398-1.336 3.225Zm8.097 2.696h2v2h-2v-2Zm0-5h2v2h-2v-2Zm0-5h2v2h-2v-2ZM7.414 9.579a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont378);
export default ForwardRef;
