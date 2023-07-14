import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont235 = (
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
    <path d="M13.74 9.16a.53.53 0 0 1 .44-.16 1.06 1.06 0 0 1 .24 0h.25a.58.58 0 0 0 .46-.16.72.72 0 0 0 .16-.5V8h-1.41c.53-1.27 1-2.48 1.54-3.59a3.05 3.05 0 0 1 1.11-.94h.12a3.77 3.77 0 0 1 .41 0A2.63 2.63 0 0 0 17 4c0 .12 0 .27.06.41a.65.65 0 0 0 .21.39 1 1 0 0 0 .45.11.92.92 0 0 0 .42-.1h.05a.89.89 0 0 0 .44-.78.87.87 0 0 0-.11-.44 1.5 1.5 0 0 0-1.37-.9h-.1a4 4 0 0 0-3.4 2.17 17 17 0 0 0-1 1.93A1.93 1.93 0 0 1 11.12 8h-.93l-.19.86V9h1.85a2.7 2.7 0 0 1-.07.35c-.52 1.83-1 3.67-1.58 5.5-.45 1.45-.9 2.91-1.42 4.34a2.13 2.13 0 0 1-1.53 1.32h-.54l.14-.21a4.44 4.44 0 0 0 .15-.62.42.42 0 0 0-.08-.28 1 1 0 0 0-.64-.23H6a1.09 1.09 0 0 0-.32.17.91.91 0 0 0-.14 1.3 1.81 1.81 0 0 0 1.23.65 4.71 4.71 0 0 0 2-.73 6.46 6.46 0 0 0 2.37-3.37c.85-2.47 1.61-5 2.34-7.47a1.52 1.52 0 0 1 .26-.56Zm7-2a4.34 4.34 0 0 1-.8.61A9 9 0 0 1 13 20.93a8.69 8.69 0 0 1-.8 1.07A10 10 0 0 0 22 12a9.9 9.9 0 0 0-1.27-4.87Zm-9.93-4A6.88 6.88 0 0 1 11.57 2a10 10 0 0 0-8.24 15 2.34 2.34 0 0 1 .22-.23 5.79 5.79 0 0 1 .58-.38A8.89 8.89 0 0 1 3 12a9 9 0 0 1 7.8-8.91Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont235);
export default ForwardRef;
