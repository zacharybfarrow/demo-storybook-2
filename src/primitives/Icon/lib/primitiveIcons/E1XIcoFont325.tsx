import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont325 = (
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
    <path d="M8.79 11.09a3.105 3.105 0 0 0 3.104 3.04h.062l.102.002a3.729 3.729 0 0 0 1.722-.422l.125-.066-.196-.556-.063-.176-.165.086a2.917 2.917 0 0 1-1.344.328H12.06l-.077.001-.184-.008a2.306 2.306 0 0 1-2.117-2.295l.008-.19.001-.01-.004-.098-.002-.099a2.923 2.923 0 0 1 2.825-2.919h.005l.12-.004.185.009a2.102 2.102 0 0 1 1.92 2.092l-.007.186-.001.006v.007a2.273 2.273 0 0 1-.315 1.238.755.755 0 0 1-.577.403h-.006l-.138-.069a.618.618 0 0 1-.065-.328 2.752 2.752 0 0 1 .058-.513l.357-1.915-.12-.051a2.765 2.765 0 0 0-1.092-.225h-.05a2.494 2.494 0 0 0-2.485 2.494v.005l-.008.104v.008l-.001.037a1.27 1.27 0 0 0 1.233 1.267h.004a1.7 1.7 0 0 0 1.31-.625.885.885 0 0 0 .84.625h.008a1.731 1.731 0 0 0 1.352-.682 2.89 2.89 0 0 0 .569-1.832v-.25a2.916 2.916 0 0 0-2.911-2.777l-.14.004h-.016l-.016.004a3.865 3.865 0 0 0-3.733 3.86l.002.099-.003.198Zm4.022-.703a1.843 1.843 0 0 1-.447.823 1.026 1.026 0 0 1-.602.388.44.44 0 0 1-.363-.153.68.68 0 0 1-.128-.434v-.009l-.003-.077a1.533 1.533 0 0 1 1.425-1.528 1.544 1.544 0 0 1 .29.041Zm7.463-2.8V4.06h-5.288l-2.92-1.942L9.11 4.06H3.725v3.53L1.517 9.043v12.855h20.966V9.05Zm0 1.145.94.624-.94.795Zm-8.209-5.465 1.204.804h-2.433ZM4.674 5.02h14.652V10.9l-7.239 6.168-3.615-3.008-.031-.026-.004.005h-.001l-3.762-3.142Zm-.949 3.719v1.38l-.935-.772Zm-1.259 12.2V10.311l5.37 4.464 1.539 1.28 2.647 2.203.072.063 9.44-7.996V20.94Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont325);
export default ForwardRef;
