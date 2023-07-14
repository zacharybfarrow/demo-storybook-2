import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont364 = (
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
    data-name="Layer 1"
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
    <path d="M21.458 6.102a.429.429 0 0 0-.376-.356 83.173 83.173 0 0 0-12.9-.408l.882-2.809a.429.429 0 0 0-.819-.257l-.977 3.112-.303.019-.74-3.15a.429.429 0 0 0-.835.196l.708 3.01q-1.591.113-3.18.287a.429.429 0 0 0-.375.356 40.444 40.444 0 0 0 .18 14.218.429.429 0 0 0 .375.346q.622.067 1.244.126l.11.837a.43.43 0 0 0 .294.351 1.94 1.94 0 0 0 .569.098.866.866 0 0 0 .508-.14.43.43 0 0 0 .17-.263l.153-.734q2.92.21 5.853.212 2.932 0 5.853-.212l.153.734a.429.429 0 0 0 .171.262.865.865 0 0 0 .508.14 1.928 1.928 0 0 0 .569-.098.43.43 0 0 0 .293-.352l.11-.837q.624-.058 1.246-.126a.43.43 0 0 0 .374-.346 40.447 40.447 0 0 0 .182-14.216ZM5.246 21.065l-.026-.196.067.006Zm13.51 0-.04-.19.068-.006Zm1.737-1.217v-.002a80.61 80.61 0 0 1-16.983 0A39.577 39.577 0 0 1 3.34 6.56a82.231 82.231 0 0 1 17.323 0 39.58 39.58 0 0 1-.17 13.287ZM19.986 6.89a81.848 81.848 0 0 0-15.968 0 .429.429 0 0 0-.383.367 39.148 39.148 0 0 0 .156 11.906.429.429 0 0 0 .381.356 80.083 80.083 0 0 0 15.66 0 .429.429 0 0 0 .38-.356 39.144 39.144 0 0 0 .156-11.906.429.429 0 0 0-.382-.367Zm-.625 11.746a79.334 79.334 0 0 1-14.721 0 38.22 38.22 0 0 1-.144-10.864 80.99 80.99 0 0 1 15.008 0 38.215 38.215 0 0 1-.143 10.864Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont364);
export default ForwardRef;
