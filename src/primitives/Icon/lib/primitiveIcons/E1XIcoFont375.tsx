import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont375 = (
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
    <path d="M4.125 15.125a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25Zm0 2.5a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25Zm0-7.5a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25Zm14.375.192V6.062C18.5 3.271 13.965 2 9.75 2 5.536 2 1 3.271 1 6.062v11.876C1 20.729 5.535 22 9.75 22c.994 0 2.005-.073 2.971-.218A6.463 6.463 0 0 0 16.5 23a6.5 6.5 0 0 0 2-12.683ZM9.75 3.25c4.143 0 7.5 1.259 7.5 2.812s-3.357 2.813-7.5 2.813c-4.142 0-7.5-1.26-7.5-2.813S5.608 3.25 9.75 3.25Zm-7.5 10.937v-2.334c1.291 1.331 4.406 2.022 7.5 2.022.273 0 .545-.012.818-.023A6.468 6.468 0 0 0 10 16.5c0 .167.013.33.025.495-.092.001-.182.005-.275.005-4.142 0-7.5-1.25-7.5-2.793 0-.007.003-.014.003-.02H2.25Zm7.5 6.563c-4.142 0-7.5-1.26-7.5-2.812v-2.335c1.291 1.331 4.406 2.022 7.5 2.022.118 0 .235-.008.352-.01a6.47 6.47 0 0 0 1.413 3.053c-.567.052-1.156.082-1.765.082Zm1.149-7.536c-.376.021-.757.036-1.149.036-4.142 0-7.5-1.25-7.5-2.793 0-.006.003-.013.003-.02H2.25V8.29c1.638 1.248 4.641 1.835 7.5 1.835s5.862-.587 7.5-1.835v1.757A6.542 6.542 0 0 0 16.5 10a6.491 6.491 0 0 0-5.601 3.214Zm8.427 5.592c-.08.267-.209.504-.389.713-.18.208-.415.391-.706.55a5.95 5.95 0 0 1-1.063.431v1.338h-.992v-1.284a3.43 3.43 0 0 1-.712-.08 5.362 5.362 0 0 1-1.43-.53 2.627 2.627 0 0 1-.524-.372l.875-1.63c.676.599 1.334.896 1.974.896.266 0 .498-.07.696-.215a.665.665 0 0 0 .296-.56c0-.318-.233-.551-.7-.702l-.616-.194a5.71 5.71 0 0 1-.938-.378 2.337 2.337 0 0 1-.637-.475 1.737 1.737 0 0 1-.367-.61 2.36 2.36 0 0 1-.119-.782c0-.309.045-.607.135-.895.09-.288.227-.545.41-.772a2.37 2.37 0 0 1 .686-.571c.273-.155.597-.25.97-.287v-1.304h.993v1.304c.777.08 1.431.288 1.964.626l-.799 1.554c-.46-.353-.913-.529-1.36-.529-.273 0-.495.063-.668.19-.173.125-.259.267-.259.425 0 .144.068.28.205.41.137.13.317.234.54.313l.636.216c.712.245 1.226.545 1.543.9.316.357.475.82.475 1.387 0 .345-.04.652-.119.917Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont375);
export default ForwardRef;
