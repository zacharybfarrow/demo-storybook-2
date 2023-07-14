import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon93 = (
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
    <path d="M5.38 19.582a.433.433 0 0 1-.433-.433v-8.742l-.866.69v8.052a1.3 1.3 0 0 0 1.299 1.3h7.541a5.628 5.628 0 0 1-.483-.867H5.38Z" />
    <path d="M19.92 13.65V9.436l1.54 1.228.54-.678-2.08-1.657v-.004h-.006l-7.105-5.659a1.293 1.293 0 0 0-1.618 0L7.243 5.812v-1.82a.433.433 0 0 0-.433-.432H4.514a.433.433 0 0 0-.433.433V8.33L2 9.987l.54.678 9.19-7.32a.431.431 0 0 1 .54 0l6.783 5.402v4.47a4.335 4.335 0 0 0-5.807 4.07c0 2.388 1.943 4.33 4.33 4.33s4.33-1.942 4.33-4.33a4.33 4.33 0 0 0-1.987-3.638ZM4.946 4.425h1.43V6.5l-1.43 1.14V4.425ZM17.576 20.75c-1.91 0-3.464-1.554-3.464-3.464s1.554-3.464 3.464-3.464 3.464 1.554 3.464 3.464-1.554 3.464-3.464 3.464Z" />
    <path d="M17.576 15.745c.306 0 .555.249.555.555h.866c0-.633-.416-1.17-.988-1.353v-.557h-.866v.557c-.572.184-.988.72-.988 1.353 0 .783.638 1.42 1.421 1.42a.555.555 0 1 1-.555.555h-.866c0 .632.416 1.17.988 1.353v.557h.866v-.557c.572-.184.988-.72.988-1.353 0-.783-.638-1.42-1.421-1.42a.555.555 0 0 1 0-1.11Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon93);
export default ForwardRef;
