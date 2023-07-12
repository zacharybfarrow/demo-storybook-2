import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon13 = (
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
    <path d="M19.02 4.878c-3.927-3.873-10.273-3.828-14.145.1-3.872 3.927-3.827 10.272.1 14.145a9.97 9.97 0 0 0 7.022 2.875c2.585 0 5.17-.994 7.123-2.975A9.937 9.937 0 0 0 22 11.929a9.937 9.937 0 0 0-2.98-7.051Zm-.547 13.507a9.065 9.065 0 0 1-6.476 2.704 9.068 9.068 0 0 1-6.078-2.326l1.304-1.304a7.204 7.204 0 0 0 3.422 1.662c.145.613.696 1.07 1.353 1.07.656 0 1.207-.457 1.353-1.07a7.206 7.206 0 0 0 3.812-2.028c2.808-2.848 2.776-7.45-.072-10.259-2.505-2.47-6.365-2.738-9.17-.83a1.382 1.382 0 0 0-.733-.212c-.768 0-1.392.625-1.392 1.392 0 .268.077.518.209.73a7.275 7.275 0 0 0-.242 7.793l.666-.666a6.366 6.366 0 0 1 .283-6.55 1.394 1.394 0 0 0 1.783-1.78 6.336 6.336 0 0 1 3.503-1.054c1.61 0 3.22.608 4.455 1.824a6.353 6.353 0 0 1 .063 8.974 6.304 6.304 0 0 1-3.257 1.76 1.393 1.393 0 0 0-1.261-.807c-.559 0-1.04.331-1.262.807a6.302 6.302 0 0 1-2.869-1.4l1.3-1.299a4.502 4.502 0 0 0 2.83.996 4.502 4.502 0 0 0 4.298-3.142A1.393 1.393 0 0 0 17.448 12c0-.686-.5-1.256-1.153-1.37a4.48 4.48 0 0 0-1.128-1.845 4.52 4.52 0 0 0-6.384.045 4.52 4.52 0 0 0-.98 4.837l.718-.718a3.607 3.607 0 0 1 .909-3.48 3.595 3.595 0 0 1 2.568-1.073 3.594 3.594 0 0 1 3.39 2.383 1.393 1.393 0 0 0 0 2.442c-.17.478-.444.926-.823 1.31a3.61 3.61 0 0 1-4.751.337l1.357-1.357A1.725 1.725 0 0 0 13.721 12c0-.95-.773-1.723-1.723-1.723s-1.724.773-1.724 1.723c0 .321.09.621.244.88l-5.243 5.243c-3.231-3.543-3.158-9.054.247-12.508a9.066 9.066 0 0 1 6.476-2.705c2.307 0 4.616.87 6.384 2.614 1.73 1.706 2.692 3.983 2.71 6.412s-.913 4.719-2.619 6.449Zm-6.959.415a.484.484 0 1 1 .968 0 .484.484 0 0 1-.968 0ZM7.671 7.184a.484.484 0 1 1-.968-.001.484.484 0 0 1 .968.001ZM15.573 12a.484.484 0 1 1 .968.001.484.484 0 0 1-.968-.001Zm-4.39 0a.816.816 0 0 1 1.63 0 .816.816 0 0 1-1.63 0Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon13);
export default ForwardRef;
