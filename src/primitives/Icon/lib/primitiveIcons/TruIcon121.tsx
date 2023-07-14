import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon121 = (
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
    <path d="M21.722 4.924c-.24-.3-.6-.473-.985-.473H2v.841h5.394l.5 2.28H5.043l-.227-1.016h-.862l1.732 7.773.42 1.882c.13.581.636.987 1.232.987h.19a1.598 1.598 0 0 0 1.406 2.35 1.598 1.598 0 0 0 1.406-2.35h5.84a1.598 1.598 0 0 0 1.406 2.35c.881.001 1.597-.715 1.597-1.595s-.716-1.596-1.596-1.596H7.337a.418.418 0 0 1-.41-.33l-.305-1.37h12.403c.596 0 1.103-.405 1.233-.987l1.711-7.682a1.257 1.257 0 0 0-.247-1.064ZM9.688 17.953a.755.755 0 1 1-1.51-.002.755.755 0 0 1 1.51.002Zm8.653 0a.755.755 0 1 1-1.51-.002.755.755 0 0 1 1.51.002ZM5.926 11.536h2.835l.5 2.28H6.434l-.508-2.28Zm3.697 0h2.94v2.28h-2.44l-.5-2.28Zm-.184-.842-.5-2.28h3.624v2.28H9.439Zm3.965.842h2.94l-.5 2.28h-2.44v-2.28Zm0-.842v-2.28h3.624l-.5 2.28h-3.124Zm0-3.121v-2.28h4.307l-.499 2.28h-3.808Zm-5.148-2.28h4.307v2.28H8.755l-.5-2.28ZM5.23 8.413h2.848l.5 2.28h-2.84l-.508-2.28Zm13.795 5.402h-2.319l.5-2.28h2.665l-.435 1.95a.418.418 0 0 1-.41.33Zm1.027-3.094v-.028H17.39l.5-2.28h2.677l-.515 2.308Zm1.096-4.917-.394 1.768h-2.68l.499-2.28h2.164a.419.419 0 0 1 .411.512Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon121);
export default ForwardRef;
