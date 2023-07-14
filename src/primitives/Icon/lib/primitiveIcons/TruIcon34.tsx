import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon34 = (
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
    <path d="M15.08 16.165a4.47 4.47 0 0 1-.747.577 4.143 4.143 0 0 1 1.829 3.436v.456c0 .25-.204.453-.454.453h-7.38a.454.454 0 0 1-.455-.453v-.456a4.149 4.149 0 0 1 4.145-4.144c1.697 0 3.078-1.381 3.078-3.079s-1.38-3.079-3.078-3.079c-.745 0-1.428.266-1.96.707a3.084 3.084 0 0 0-3.006-2.414 3.076 3.076 0 0 0-1.792 5.58A5.06 5.06 0 0 0 2 18.47v1.363h.908v-1.363a4.149 4.149 0 0 1 4.144-4.144c.744 0 1.427-.266 1.96-.707.166.752.608 1.4 1.213 1.836a5.06 5.06 0 0 0-3.26 4.722v.456c0 .75.611 1.361 1.362 1.361h7.381c.75 0 1.361-.61 1.361-1.361v-.456c0-1.634-.78-3.09-1.988-4.013Zm-8.028-2.746c-1.197 0-2.171-.974-2.171-2.171s.974-2.171 2.17-2.171 2.172.974 2.172 2.17-.974 2.172-2.171 2.172Zm2.794-.464c0-1.197.974-2.171 2.172-2.171s2.17.974 2.17 2.171-.973 2.171-2.17 2.171-2.172-.974-2.172-2.17ZM20.64 2.005h-6.42c-.751 0-1.362.61-1.362 1.361V7.44c0 .751.61 1.362 1.361 1.362h.545l.907-.908h-1.452a.454.454 0 0 1-.453-.454V3.366c0-.25.203-.453.453-.453h6.42c.25 0 .454.203.454.453V7.44c0 .25-.203.454-.453.454h-2.48c-.363 0-.705.142-.962.399L15.23 10.26l.642.641 1.968-1.967a.45.45 0 0 1 .32-.133h2.48C21.389 8.8 22 8.19 22 7.439V3.366c0-.75-.61-1.361-1.361-1.361Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon34);
export default ForwardRef;
