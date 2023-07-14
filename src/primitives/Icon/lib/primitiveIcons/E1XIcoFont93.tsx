import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont93 = (
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
    <circle cx={19.62} cy={4.86} r={0.48} />
    <path d="M20.57 3H3.43A1.4 1.4 0 0 0 2 4.38v15.24a1.4 1.4 0 0 0 1.43 1.43h17.14A1.4 1.4 0 0 0 22 19.62V4.38A1.4 1.4 0 0 0 20.57 3Zm-17.14.9h17.14a.46.46 0 0 1 .48.48v1.43H3V4.38a.46.46 0 0 1 .43-.48Zm17.14 16.2H3.43a.46.46 0 0 1-.43-.48V6.76h18.1v12.86a.46.46 0 0 1-.53.48ZM17.24 4.86a.48.48 0 1 1 1 0 .48.48 0 0 1-1 0Zm-1.91 0a.48.48 0 1 1 1 0 .48.48 0 0 1-1 0ZM16.76 13h-1a3.79 3.79 0 0 0-3.28-3.28v-1a.48.48 0 0 0-1 0v1A3.78 3.78 0 0 0 8.24 13h-1a.48.48 0 1 0 0 1h1a3.79 3.79 0 0 0 3.28 3.29v1a.48.48 0 0 0 1 0v-1A3.79 3.79 0 0 0 15.8 14h1a.48.48 0 1 0 0-1Zm-2 0h-1a2 2 0 0 0-1.38-1.38v-1A2.93 2.93 0 0 1 14.81 13ZM12 14.38a1 1 0 1 1 .95-1 1 1 0 0 1-.95 1Zm-.48-3.76v1A2 2 0 0 0 10.14 13h-1a2.93 2.93 0 0 1 2.38-2.38ZM9.19 13.9h1a2 2 0 0 0 1.38 1.39v1a2.93 2.93 0 0 1-2.38-2.39Zm3.29 2.34v-1a2 2 0 0 0 1.38-1.38h1a2.93 2.93 0 0 1-2.38 2.38Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont93);
export default ForwardRef;
