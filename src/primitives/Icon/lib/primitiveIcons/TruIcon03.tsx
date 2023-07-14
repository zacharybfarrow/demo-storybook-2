import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon03 = (
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
    <path d="M8.931 11.75a.375.375 0 0 0 .375-.375v-1.162A1.215 1.215 0 0 1 10.52 9h2.96c.67.001 1.213.543 1.214 1.213v1.162a.375.375 0 0 0 .75 0v-1.162A1.963 1.963 0 0 0 13.48 8.25h-2.96a1.963 1.963 0 0 0-1.964 1.963v1.162c0 .207.168.375.375.375Zm9.207.25a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Zm0-3a1.127 1.127 0 0 1 1.125 1.125 1.127 1.127 0 0 1-1.125 1.125 1.127 1.127 0 0 1-1.125-1.125A1.127 1.127 0 0 1 18.138 9ZM12 7.791a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Zm0-3a1.127 1.127 0 0 1 1.125 1.125A1.127 1.127 0 0 1 12 7.041a1.127 1.127 0 0 1-1.125-1.125A1.127 1.127 0 0 1 12 4.791Zm1.48 11.668h-2.96a1.963 1.963 0 0 0-1.964 1.963v1.162a.375.375 0 0 0 .75 0v-1.162a1.215 1.215 0 0 1 1.214-1.213h2.96c.67 0 1.213.543 1.214 1.213v1.162a.375.375 0 0 0 .75 0v-1.162a1.963 1.963 0 0 0-1.964-1.963Zm6.138-4h-2.96a1.963 1.963 0 0 0-1.964 1.963v1.162a.375.375 0 0 0 .75 0v-1.162a1.215 1.215 0 0 1 1.213-1.213h2.961c.67 0 1.212.543 1.213 1.213v1.162a.375.375 0 0 0 .75 0v-1.162a1.963 1.963 0 0 0-1.963-1.963ZM12 12.25A1.875 1.875 0 1 0 12 16a1.875 1.875 0 0 0 0-3.75Zm0 3a1.127 1.127 0 0 1-1.125-1.125A1.127 1.127 0 0 1 12 13a1.127 1.127 0 0 1 1.125 1.125A1.127 1.127 0 0 1 12 15.25Zm-3.444.334a.375.375 0 0 0 .75 0v-1.162a1.963 1.963 0 0 0-1.963-1.963H4.382a1.963 1.963 0 0 0-1.963 1.963v1.162a.375.375 0 0 0 .75 0v-1.162a1.215 1.215 0 0 1 1.213-1.213h2.96c.67 0 1.213.543 1.214 1.213v1.162ZM5.862 12a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Zm0-3a1.127 1.127 0 0 1 1.125 1.125 1.127 1.127 0 0 1-1.125 1.125 1.127 1.127 0 0 1-1.125-1.125A1.127 1.127 0 0 1 5.862 9Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon03);
export default ForwardRef;
