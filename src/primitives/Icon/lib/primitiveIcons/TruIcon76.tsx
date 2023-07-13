import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon76 = (
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
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.401 10.045h-4.317a4.606 4.606 0 0 0-4.329 3.048H6.6a3.741 3.741 0 0 1-3.737-3.737V8.159a3.741 3.741 0 0 1 3.737-3.737h4.317a3.741 3.741 0 0 1 3.737 3.737v.594h.862v-.594a4.604 4.604 0 0 0-4.6-4.6H6.6A4.604 4.604 0 0 0 2 8.16v1.197a4.604 4.604 0 0 0 4.599 4.599h4.317a4.606 4.606 0 0 0 4.329-3.048H17.4a3.741 3.741 0 0 1 3.737 3.737v1.197a3.741 3.741 0 0 1-3.737 3.737h-4.317a3.741 3.741 0 0 1-3.737-3.737v-.594h-.862v.594a4.604 4.604 0 0 0 4.6 4.6H17.4A4.604 4.604 0 0 0 22 15.84v-1.197a4.604 4.604 0 0 0-4.599-4.599Zm-6.485 3.048h-1.23a3.741 3.741 0 0 1 3.398-2.186h1.23a3.741 3.741 0 0 1-3.398 2.186Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon76);
export default ForwardRef;
