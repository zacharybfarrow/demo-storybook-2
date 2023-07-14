import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont372 = (
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
    data-name="Layer 1"
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
    <path d="M4.125 15.125A.625.625 0 1 0 3.5 14.5a.625.625 0 0 0 .625.625ZM18.5 10.317V6.062C18.5 3.271 13.965 2 9.75 2 5.536 2 1 3.271 1 6.062v11.876C1 20.729 5.535 22 9.75 22a20.23 20.23 0 0 0 2.971-.218A6.497 6.497 0 1 0 18.5 10.317ZM9.75 3.25c4.143 0 7.5 1.259 7.5 2.812s-3.357 2.813-7.5 2.813c-4.142 0-7.5-1.26-7.5-2.813 0-1.553 3.358-2.812 7.5-2.812Zm-7.5 10.937v-2.334c1.291 1.331 4.406 2.022 7.5 2.022.273 0 .545-.012.818-.023A6.468 6.468 0 0 0 10 16.5c0 .167.013.33.025.495-.092.001-.182.005-.275.005-4.142 0-7.5-1.25-7.5-2.793 0-.007.003-.014.003-.02Zm7.5 6.563c-4.142 0-7.5-1.26-7.5-2.812v-2.335c1.291 1.331 4.406 2.022 7.5 2.022.118 0 .235-.008.352-.01a6.47 6.47 0 0 0 1.413 3.053c-.567.052-1.156.082-1.765.082Zm1.149-7.536c-.376.021-.757.036-1.149.036-4.142 0-7.5-1.25-7.5-2.793 0-.006.003-.013.003-.02H2.25V8.29c1.638 1.248 4.641 1.835 7.5 1.835s5.862-.587 7.5-1.835v1.757a6.446 6.446 0 0 0-6.351 3.167Zm7.08 8.464h-2.193V19.25h2.193Zm.833-5a2.119 2.119 0 0 0-.833 1.667v.16h-2.193v-.277a3.393 3.393 0 0 1 1.477-2.662 1.903 1.903 0 0 0 .789-1.49.94.94 0 0 0-1.023-1.01c-.834 0-1.112.57-1.185 1.273h-2.061a2.97 2.97 0 0 1 3.275-2.881c2.397 0 3.1 1.55 3.1 2.69a3.147 3.147 0 0 1-1.346 2.53Zm-14.687.947a.625.625 0 1 0 .625.625.625.625 0 0 0-.625-.625Zm0-7.5a.625.625 0 1 0 .625.625.625.625 0 0 0-.625-.625Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont372);
export default ForwardRef;
