import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts77 = (
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
    <path
      d="M11.37 10.62c.09-.2.19-.46.29-.76a8.65 8.65 0 0 0 2.67 3.33 25.36 25.36 0 0 0-5.16 1.58s1.85-3.34 2.2-4.15m9.24 3.53s.68-1.05-1.54-1.24a17.11 17.11 0 0 0-3.81.13 12.54 12.54 0 0 1-2.49-2.79A5.14 5.14 0 0 1 12 8.68a5.15 5.15 0 0 0 .24-2.82 16.73 16.73 0 0 1-.55 1.82 9.12 9.12 0 0 1-.43-3.88c.41-1.43 1.2 1 1.2 1 .33-1.51-.82-1.61-.82-1.61a1 1 0 0 0-1.17.67 14.1 14.1 0 0 0 .78 5l-.14.33c-1.36 3.24-3.73 7.94-5.47 9.47 0 0-1.93 1.33.89-2.19l.6-.64S3 18.05 4.59 19.37c0 0 1.5 1.57 4.2-3.79a29.44 29.44 0 0 1 6.47-1.79c5.24 2.87 5.2.66 5.2.66s-.56.38-3.38-.52c-.24-.08-.47-.17-.69-.26a9.24 9.24 0 0 1 4.22.48"
      fill="#231f20"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts77);
export default ForwardRef;
