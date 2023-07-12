import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont156 = (
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
    <path d="m10.38 12.13.59.48c4.32 3.45 8.62 5.23 9.6 4l-7.9-6.3ZM5.57 2a3.57 3.57 0 0 0 0 7.14A3.53 3.53 0 0 0 7 8.85c.14.16.28.33.44.49C8 8.75 8.62 8.16 9.26 7.6l-.52-.41A3.55 3.55 0 0 0 5.57 2Zm0 6.43a2.86 2.86 0 1 1 2.86-2.86 2.87 2.87 0 0 1-2.86 2.86Z" />
    <path d="m8.74 12.53 11.83-9.42c-1-1.24-5.28.55-9.6 4a29.86 29.86 0 0 0-4 3.77 3.18 3.18 0 0 0-.74-.23 3.82 3.82 0 0 0-.68-.07 3.57 3.57 0 1 0 3.57 3.57 3.39 3.39 0 0 0-.12-.92 3.91 3.91 0 0 0-.26-.7ZM5.57 17a2.86 2.86 0 1 1 2.86-2.86A2.87 2.87 0 0 1 5.57 17Z" />
    <path d="M14.86 9.14h1.43v.71h-1.43zM17.71 9.14h1.43v.71h-1.43zM20.57 9.14H22v.71h-1.43zM10.57 14.86h.71v1.43h-.71zM10.57 17.71h.71v1.43h-.71zM10.57 20.57h.71V22h-.71z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont156);
export default ForwardRef;
