import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon91 = (
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
    <path d="M20.475 14.997h-.556V9.46l1.541 1.227.54-.677-2.08-1.657v-.005h-.006L12.809 2.69a1.293 1.293 0 0 0-1.618 0L7.243 5.833V4.014a.433.433 0 0 0-.433-.433H4.514a.433.433 0 0 0-.433.433v4.338L2 10.009l.54.677 9.19-7.32a.43.43 0 0 1 .54 0l6.783 5.403v6.228h-5.491a1.3 1.3 0 0 0-1.3 1.3v4a1.3 1.3 0 0 0 1.3 1.299h6.913a1.3 1.3 0 0 0 1.3-1.3v-4a1.3 1.3 0 0 0-1.3-1.299ZM4.947 4.447h1.43v2.076l-1.43 1.139V4.447Zm8.615 11.416h6.913c.24 0 .433.194.433.433v.9h-7.78v-.9c0-.239.195-.433.434-.433Zm6.913 4.867h-6.913a.433.433 0 0 1-.433-.433v-2.234h7.78v2.234a.433.433 0 0 1-.434.433Z" />
    <path d="M10.964 19.604H5.38a.433.433 0 0 1-.433-.433v-8.742l-.866.69v8.052A1.3 1.3 0 0 0 5.38 20.47h5.59a2.619 2.619 0 0 1-.006-.173v-.693Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon91);
export default ForwardRef;
