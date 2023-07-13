import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont194 = (
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
    data-name="Layer 1"
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
    <path
      d="M21.59 5.84h-6.77L13.92 4a.3.3 0 0 0-.27-.16H6.7a.29.29 0 0 0-.26.16l-.62 1.25h-.77a.3.3 0 0 0-.26.17l-1 2v11.03a.3.3 0 0 0 .29.3h15.86a.3.3 0 0 0 .29-.3v-1.11h1.36a.3.3 0 0 0 .3-.29V6.13a.3.3 0 0 0-.3-.29Zm-16.36 0h6.59l.69 1.4h-8Zm14.41 12.32H4.35V7.83h15.29Zm1.65-1.41h-1.06V7.53a.29.29 0 0 0-.29-.29h-6.77l-.91-1.82a.29.29 0 0 0-.26-.17H6.48l.41-.81h6.58l1 2h6.82Z"
      style={{
        fillRule: "evenodd",
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont194);
export default ForwardRef;
