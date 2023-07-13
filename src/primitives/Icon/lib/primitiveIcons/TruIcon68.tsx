import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon68 = (
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
    <path d="M20.222 19.074V7.894h-1.008v11.18h1.008Zm-3.646 0v-7.606h-1.008v7.606h1.008Zm-7.811-3.132a.504.504 0 0 0 .356-.147l11.69-11.691v1.98h1.009v-3.25a.504.504 0 0 0-.504-.505h-3.252v1.008h2.089L8.765 14.725l-3.56-3.56-.713.713 3.917 3.917a.504.504 0 0 0 .356.147Zm-5.253 4.72a.505.505 0 0 1-.504-.503V6.085H2v14.074c0 .834.678 1.512 1.512 1.512H22v-1.008H3.512Zm2.126-1.588v-3.636H4.63v3.636h1.008Zm7.292 0v-3.636h-1.008v3.636h1.008Zm-4.654 0h1.008v-1.512H8.276v1.512Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon68);
export default ForwardRef;
