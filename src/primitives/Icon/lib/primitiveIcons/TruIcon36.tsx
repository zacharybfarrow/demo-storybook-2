import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon36 = (
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
    <path d="M15.29 18.78H3.37c-.755 0-1.37.614-1.37 1.37s.615 1.371 1.37 1.371h11.02v-.908H3.37a.463.463 0 0 1 0-.925h11.92c.254 0 .462.207.462.462v1.29c.529-.191.908-.696.908-1.29 0-.756-.615-1.37-1.37-1.37Zm6.31-2.8-6.86-6.867.917-.916a1.362 1.362 0 0 0 1.701-.189 1.372 1.372 0 0 0 0-1.938l-3.18-3.19a1.362 1.362 0 0 0-.97-.401c-.366 0-.71.143-.97.401a1.362 1.362 0 0 0-.4.97c0 .265.075.519.215.737L9.215 7.425l.642.643 2.815-2.815 2.319 2.325-3.73 3.73-2.752-2.76a1.372 1.372 0 0 0-1.939 0 1.372 1.372 0 0 0 0 1.939l3.181 3.19c.267.267.618.4.97.4.35 0 .702-.133.969-.4a1.373 1.373 0 0 0 .189-1.702l.923-.924 6.858 6.867c.268.267.619.4.97.4s.702-.133.97-.4a1.372 1.372 0 0 0 0-1.939ZM12.881 4.176a.46.46 0 0 1 0-.654.46.46 0 0 1 .653 0l3.18 3.189a.463.463 0 0 1-.653.654l-3.18-3.189Zm-1.835 8.857a.463.463 0 0 1-.653 0l-3.18-3.189h-.001a.463.463 0 0 1 .653-.654l3.181 3.19c.18.18.18.473 0 .653Zm9.91 4.241a.463.463 0 0 1-.654 0l-6.858-6.866.653-.654 6.859 6.866c.18.18.18.474 0 .654Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon36);
export default ForwardRef;
