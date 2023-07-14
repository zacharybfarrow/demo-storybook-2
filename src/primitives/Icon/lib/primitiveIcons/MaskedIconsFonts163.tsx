import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts163 = (
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
    role="img"
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
    <path d="m6.84 6.03.4-.1-.4.1M8.23 5.84a6.39 6.39 0 0 0-1 .09L6.84 6A3.73 3.73 0 0 0 4 9.72v.41s3.63-.68 5.53-2.3c.54 1.22.87 2.55 1.75 2.55a4.66 4.66 0 0 0 .08-.72c.1-2.12-1-3.82-3.11-3.82m10.15 5.49c-.73 0-1.25-.6-2.1-.6-.84 0-1.36.6-2.1.6-.59 0-.91-.65-1.1-1.19l-.17-1v1.25s.28 1.46.81 1.82a5 5 0 0 0 1.18.66 4 4 0 0 0 1.38.39 4 4 0 0 0 1.39-.39 5.14 5.14 0 0 0 1.17-.66c.54-.36.82-1.82.82-1.82V9.1l-.17 1c-.19.54-.52 1.19-1.11 1.19m-1.6-8.22a6.39 6.39 0 0 0-1 .09l-.41.09A3.73 3.73 0 0 0 12.56 7v.41s3.63-.69 5.53-2.3c.54 1.22.87 2.54 1.75 2.54a5.88 5.88 0 0 0 .07-.71c.11-2.12-1-3.82-3.1-3.82" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts163);
export default ForwardRef;
