import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont11 = (
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
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 24 24",
    }}
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.4 9.5s0 .1 0 0c-.1.1-.1.1-.1.2.1-.1.2-.2.1-.2.1 0 0 0 0 0zm2.1 1.1c0 .1 0 .1 0 0zM7 7.7c-1.5 0-2.6.5-3.4 1.4-1 1.1-1.5 2.6-1.5 4.3 0 1.8.6 3.3 1.6 4.3.8.8 1.9 1.3 3.4 1.3 1.4 0 2.7-.4 3.6-1.5.4-.5.8-1.3.9-2H9.1c-.1.4-.3.7-.5.9-.4.4-.8.5-1.6.5-.7 0-1.2-.3-1.6-.7-.5-.5-.8-1.3-.8-2.1h7.1v-.7c0-1.3-.1-2.6-.9-3.7-.8-1.3-2.2-2-3.8-2zm-2.4 4.6c0-.7.2-1.2.6-1.7.4-.5 1-.8 1.8-.8.7 0 1.3.2 1.6.6.4.5.6 1.1.7 1.9H4.6zm14-4.4c-.1 0-.1 0 0 0-.1 0 0 0 0 0zm-.3.7c0-.1 0-.1 0 0-.1 0-.1 0-.1.1 0-.1.1-.1.1-.1zm-.5.5s.1 0 0 0c.1 0 .1 0 0 0 .1 0 .1 0 .1-.1.1 0 .2 0 .1-.1l.1-.1c0-.1.1-.1.1-.2H18c0 .2-.1.3-.2.4v.1zm2.8 1.6c0 .1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 0 0 0zm1.2.5h-.1s0-.1-.1-.1V11s-.1 0 0 0v-.1s-.1 0-.1-.1V10.5s0-.1-.1-.1c0 0-.1 0 0 0v-.1l-.1-.1c-.1-.1-.2-.2-.3-.4-.1 0 0-.1-.1-.1l-.1-.1c0-.1-.1-.1-.1-.1v-.1c0-.1-.1-.1-.1-.2h-.1c0-.1 0-.1-.1-.2h-.1l-.1-.1c0-.1-.1-.1-.2-.2v-.1s.1-.1 0-.1h.1s0-.1.1-.1v-.1c.1 0 .1-.1.1-.1h.1c.1-.1.2-.2.2-.3 0-.1.1-.1.1-.2.1-.1.2-.3.3-.4l.3-.3c0-.1.1-.1.1-.2.1 0 .1-.1.1-.1.1-.1.1-.2.3-.2h.1s.1 0 .1-.1c.1 0 .1-.1.2-.2s0-.1 0-.1V6h-.4v-.2l-.1-.1h-.1c-.1.1-.1.1-.2.1 0 0 0 .1-.1.1h-.1l-.1.1s-.1 0-.1.1c0 0 .1 0 .1.1v.1c-.1 0-.1.1-.1.1-.1 0-.1 0-.1.1l-.1.1s0 .1-.1.1-.1.1-.1.1v.1c0 .1-.1.1-.1.2h-.2v.1l-.1.1c-.1 0-.1.1-.1.1l-.1.1h-.1c-.1 0-.1 0-.1.1h-.1c-.1 0-.1.1-.1.1v.1l-.1.1h-.1V8s-.1 0 0 .1c0-.1-.1-.1-.1-.1V7.7s-.1-.1-.1-.2c0 0 0-.1-.1-.1-.1-.1-.1-.1-.1-.2s-.1-.1-.1-.2c-.1 0 0-.1-.1-.1 0 0-.1-.1 0-.1 0-.1-.1-.1-.1-.2v-.1s0-.1-.1-.1v-.1h-.2s-.1 0-.1.1H18V6.7h.1v.4h.1s0 .1.1.1h.1v.6s0 .1.1.1c0 0 .1 0 .1.1 0 0 0 .1.1.1v-.2h-.1l-.1-.1h.1c0 .1.1.1.1.1h.1v-.1s.1 0 0 .1c0 0-.1 0 0 .1l-.1.1V8h-.2s0 .1.1.1c0 .1-.1.1-.1.2-.1.1-.1.1-.1.2l.1-.1h.1l.1-.1v.1l-.1.1-.1.1s0 .1-.1.1c0 0 0 .1-.1.1l.1-.1c-.1.1 0 .1-.1.1 0 .1-.1.1-.1.1l-.1.1H18h.1v.1l-.1.1h-.1s0 .1-.1.1v.1l-.1.1h-.1c-.1 0-.1.1-.1.1l-.1.1c0 .1-.1.1-.1.2s-.1.1-.1.2l-.1.1-.1.1v.1h-.1v-.5s.1-.1 0-.1l.1-.1s-.1 0-.1.1v-2h-1.8l-2.8 2V12l2.5-1.8v8.7h2.1v-8.1s.1 0 .1-.1c.1 0 .2-.2.3-.3h.1v-.1c0-.1.1-.1.1-.1.1-.1.2-.3.3-.4H18.1v-.1c0-.1.1-.2.2-.3v-.1c.3-.2.3-.3.4-.3.1-.1.1-.2.2-.2s.1-.1.1-.1c-.1 0 0 .1 0 .1l.1.1s0 .1.1.1h.1V9.3h.1v.1l.1.1h.1c0 .1.1.1.1.2s.1.1.1.2c0 0 0 .1.1.1h.1v-.1l-.1-.1v-.1h.1s0 .1.1.1c0 0 0 .1.1.1l.2.2v.1h.2l.1.1.1.1.1.1h.1s0 .1.1.1v.1-.2c.7.8.7.8.7.7v.1c.2 0 .1 0 0-.1.1 0 .1 0 0 0z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont11);
export default ForwardRef;
