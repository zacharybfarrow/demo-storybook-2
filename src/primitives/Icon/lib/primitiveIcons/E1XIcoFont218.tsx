import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont218 = (
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
    <path
      d="m21.85 19.17-5.63-5.63a.54.54 0 0 0-.73 0l-.61.61-.39-.39 2-2a1.38 1.38 0 0 0 0-1.94L14.2 7.49a1.36 1.36 0 0 0-1.94 0l-2 2-.4-.4.61-.61a.51.51 0 0 0 0-.72L4.82 2.15a.51.51 0 0 0-.72 0L2.15 4.09a.52.52 0 0 0 0 .73l5.63 5.63a.52.52 0 0 0 .73 0l.61-.61.39.39-1.06 1.07-.76.75-.2.2a1.71 1.71 0 0 0-.11.14 1.37 1.37 0 0 0-.29.83 1.37 1.37 0 0 0 .4 1l.8.79-.29.3a5.94 5.94 0 0 0-1.71-1 4.73 4.73 0 0 0-.67-.2 5.59 5.59 0 0 0-2-.13.52.52 0 0 0-.45.57.54.54 0 0 0 .15.3l2.58 2.58-.9.87a.51.51 0 0 0 .7.7l.73-.73.11-.11.63.62 1.95 2a.52.52 0 0 0 .73 0 .49.49 0 0 0 .14-.3v-.7A6 6 0 0 0 9.75 18a5.58 5.58 0 0 0-1-1.84L8.68 16l.17-.17.15-.12.48.48.32.31a1.35 1.35 0 0 0 1.93 0l.2-.2.76-.75 1.06-1.07.4.4-.61.61a.52.52 0 0 0 0 .73l5.63 5.63a.51.51 0 0 0 .72 0l2-2a.51.51 0 0 0 0-.72ZM8.76 8.75l-.61.61-4.91-4.9 1.22-1.22 4.9 4.9Zm0 9.48a4.9 4.9 0 0 1 .21.92l-1.86-1.86-2-1.95-.26-.34.36.06a5.46 5.46 0 0 1 .66.19 4.78 4.78 0 0 1 2.89 3Zm4.64-4.84-1.27 1.26-.73.74-.38.38a.36.36 0 0 1-.49 0l-1-1-.1-.11-1.17-1.15a.34.34 0 0 1 0-.45l.25-.25.13-.13.74-.73L13 8.21a.36.36 0 0 1 .49 0l2.31 2.32a.33.33 0 0 1 0 .48Zm6.14 7.37-4.9-4.91 1.22-1.22 4.9 4.91Z"
      data-name="Path 108"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont218);
export default ForwardRef;
