import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont374 = (
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
    <path d="M19.75 12.169V5.184l-3.002-3.002-2.77 1.386H9.75v-1.25H6.366L2.25 6.434v11.768l1.616 1.616h2.86l3.6-1.2.83.415c.952 1.774 2.876 2.99 5.099 2.99 3.167 0 5.734-2.463 5.734-5.5 0-1.775-.88-3.348-2.239-4.354ZM3.5 6.952l3.384-3.384H8.5v6.574l-5 4v-7.19Zm7.02 9.57c0 .283.03.559.073.83l-.17-.084-3.9 1.3h-2.14l-.883-.884v-1.94l2.72-2.176h5.203a5.307 5.307 0 0 0-.903 2.954Zm.879-4.204H7.782l1.968-1.575V4.818h4.523l2.229-1.115L18.5 5.702V6.4l-7.101 5.918Zm4.856-1.296c-.563 0-1.106.081-1.62.226l3.865-3.22v3.433a5.925 5.925 0 0 0-2.245-.439Zm2.027 4.563a2.027 2.027 0 1 1-4.054.001 2.027 2.027 0 0 1 4.054 0Zm-2.027 5.437a4.472 4.472 0 0 1-3.317-1.481c.899-.608 2.41-.915 3.317-.915s2.417.307 3.316.915a4.472 4.472 0 0 1-3.316 1.481Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont374);
export default ForwardRef;
