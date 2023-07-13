import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont207 = (
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
    <path d="M20.57 2a.51.51 0 0 0-.72 0l-1.26 1.2-.7-.69a.55.55 0 0 0-.74 0L4.83 13.75l-.08.09v.07a.37.37 0 0 0 0 .21v3l-1.54 1.47-1.77 1.76a1.07 1.07 0 0 0 0 1.52 1.1 1.1 0 0 0 .77.32h3a.48.48 0 0 0 .35-.19l.54-.53L7.56 20h3a.38.38 0 0 0 .21 0h.07l.09-.07L22.18 7.64a.53.53 0 0 0 0-.74l-.68-.8 1.22-1.23a.53.53 0 0 0 0-.73ZM2.2 21.11l1.38-1.38L5 21.11ZM7.33 19a.52.52 0 0 0-.37.16l-1.23 1.19L4.34 19l1.22-1.23a.52.52 0 0 0 .17-.38v-1.95L9.25 19Zm3.22-.24L6 14.17 17.52 3.63l3.55 3.55ZM20.73 5.34 19.35 4l.85-.85 1.38 1.35Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont207);
export default ForwardRef;
