import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont215 = (
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
    <path d="m18.68 14.25-2.35 6.65-2.07-4.31h-1.35v-1.06h1.92l1.44 3 1.82-5.34h2.47a5.23 5.23 0 0 0-3.32-1.6v-.85A2 2 0 0 0 18.5 10a2.22 2.22 0 0 0 .5-1.44l-.09-.33-3.61-4.8a.35.35 0 0 0-.17-.15.57.57 0 0 0-.25-.06H5a.44.44 0 0 0-.25.08 1 1 0 0 0-.21.21L1.09 8.85a1.91 1.91 0 0 0 .5 1.2 2.46 2.46 0 0 0 1.13.74V17a1.71 1.71 0 0 0 .53 1.28 1.71 1.71 0 0 0 1.28.53H12a5.23 5.23 0 0 0 10.05-2 5.14 5.14 0 0 0-.68-2.53Zm-16-4.81a1.09 1.09 0 0 1-.36-.71L5.37 4.4h9.34L18 8.82a1 1 0 0 1-.36.65 1.06 1.06 0 0 1-.74.27 1 1 0 0 1-.77-.33 1.16 1.16 0 0 1-.32-.8.49.49 0 0 0-.17-.38.55.55 0 0 0-.42-.17.52.52 0 0 0-.38.17.56.56 0 0 0-.17.37v.17a1.08 1.08 0 0 1-.31.8 1.09 1.09 0 0 1-.82.34 1 1 0 0 1-.78-.34 1.12 1.12 0 0 1-.31-.8V8.6a.56.56 0 0 0-.17-.38.6.6 0 0 0-.38-.17.59.59 0 0 0-.42.17.52.52 0 0 0-.17.38 1.06 1.06 0 0 1-.34.82 1.13 1.13 0 0 1-.8.32 1.1 1.1 0 0 1-.8-.34A1.14 1.14 0 0 1 9 8.6a.51.51 0 0 0-.17-.4.66.66 0 0 0-.42-.15.58.58 0 0 0-.41.15.51.51 0 0 0-.17.4v.13a1.1 1.1 0 0 1-.32.8 1 1 0 0 1-.77.33 1.09 1.09 0 0 1-.82-.33 1.16 1.16 0 0 1-.32-.8V8.6a.53.53 0 0 0-.19-.33.57.57 0 0 0-.41-.13.53.53 0 0 0-.36.13.57.57 0 0 0-.18.33 1.13 1.13 0 0 1-.32.8 1 1 0 0 1-.78.34 1 1 0 0 1-.7-.3Zm5.55 8.16H5.88v-4.75h2.35Zm3.32-.82a5.56 5.56 0 0 0 .08.82H9.28v-5.42a.5.5 0 0 0-.17-.38.48.48 0 0 0-.37-.17H5.33a.52.52 0 0 0-.33.17.5.5 0 0 0-.17.38v5.42h-.22a.55.55 0 0 1-.44-.18A.64.64 0 0 1 4 17v-6.25a2.2 2.2 0 0 0 .61-.26 2.65 2.65 0 0 0 .53-.42 1.8 1.8 0 0 0 .71.57 2.28 2.28 0 0 0 .93.19 2.17 2.17 0 0 0 .9-.19 1.77 1.77 0 0 0 .73-.57 1.8 1.8 0 0 0 .71.57 2.28 2.28 0 0 0 .93.19 2.36 2.36 0 0 0 .94-.19 1.8 1.8 0 0 0 .74-.57 2.17 2.17 0 0 0 1.68.76 2.37 2.37 0 0 0 1-.19 1.77 1.77 0 0 0 .73-.57 1.69 1.69 0 0 0 .42.38 2.13 2.13 0 0 0 .5.25v.92a5.22 5.22 0 0 0-4.51 5.16Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont215);
export default ForwardRef;
