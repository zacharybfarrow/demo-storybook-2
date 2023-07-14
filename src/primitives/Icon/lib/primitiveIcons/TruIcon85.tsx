import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon85 = (
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
    <path d="M5.808 13.724c.951 0 1.724-.773 1.724-1.724s-.773-1.724-1.724-1.724c-.793 0-1.461.539-1.661 1.27H2v.909h2.147c.2.73.868 1.27 1.661 1.27Zm0-2.54a.816.816 0 0 1 0 1.631.816.816 0 0 1 0-1.63ZM8.896 12c0 .154-.012.306-.034.455H22v-.91H8.862c.022.149.034.3.034.455Zm9.13-6.557c-.201-.73-.869-1.27-1.662-1.27s-1.462.54-1.662 1.27H2v.91h12.702c.2.73.868 1.27 1.662 1.27s1.461-.54 1.661-1.27H22v-.91h-3.975Zm-1.662 1.27a.816.816 0 0 1 0-1.63.816.816 0 0 1 0 1.63Zm-1.06 11.39a3.1 3.1 0 0 1-.033.452H22v-.909h-6.73c.023.149.035.301.035.456Zm-3.087-1.725c-.793 0-1.46.538-1.661 1.268H2v.91h8.555c.2.73.868 1.27 1.662 1.27.95 0 1.724-.773 1.724-1.724s-.773-1.724-1.724-1.724Zm0 2.54a.816.816 0 0 1 0-1.631.816.816 0 0 1 0 1.63Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon85);
export default ForwardRef;
