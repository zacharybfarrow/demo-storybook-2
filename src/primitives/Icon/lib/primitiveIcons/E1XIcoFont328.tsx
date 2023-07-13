import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont328 = (
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
      d="m21.197 9.946-.412-.28a1.277 1.277 0 0 1-.5-1.4l.135-.48a1.296 1.296 0 0 0-.902-1.594l-.135-.03-.499-.087a1.267 1.267 0 0 1-1.056-1.037l-.086-.499a1.277 1.277 0 0 0-1.47-1.047h-.009l-.144.04-.48.153a1.296 1.296 0 0 1-1.41-.48l-.307-.432a1.277 1.277 0 0 0-1.776-.298l-.125.096-.364.346a1.277 1.277 0 0 1-1.488.173l-.432-.24a1.296 1.296 0 0 0-1.76.514l-.007.014-.057.115-.192.48a1.238 1.238 0 0 1-1.258.797l-.5-.02A1.267 1.267 0 0 0 4.62 6.115l.048.499A1.296 1.296 0 0 1 3.89 7.89l-.45.192a1.296 1.296 0 0 0-.69 1.69l.058.124.259.432a1.277 1.277 0 0 1-.154 1.488l-.317.384a1.258 1.258 0 0 0 .077 1.777l.01.009.154.125.412.278a1.277 1.277 0 0 1 .496 1.403l-.192.5a1.296 1.296 0 0 0 .902 1.593l.135.03.499.087a1.267 1.267 0 0 1 1.056 1.036l.085.499a1.277 1.277 0 0 0 1.471 1.048l.008-.002.144-.038.48-.154a1.296 1.296 0 0 1 1.401.48l.308.413a1.277 1.277 0 0 0 1.776.298l.124-.096.365-.346a1.277 1.277 0 0 1 1.488-.173l.432.24a1.296 1.296 0 0 0 1.756-.526v-.002l.058-.115.192-.48a1.238 1.238 0 0 1 1.258-.797l.5.019a1.267 1.267 0 0 0 1.343-1.363l-.02-.5a1.296 1.296 0 0 1 .778-1.276l.45-.192a1.296 1.296 0 0 0 .69-1.69l-.057-.125-.26-.432a1.277 1.277 0 0 1 .154-1.488l.327-.365a1.258 1.258 0 0 0-.048-1.776Zm-8.632 4.09-1.776 1.747-1.746-1.766-1.69-1.71L9.13 10.55l1.69 1.71 4.04-4.023 1.748 1.776Z"
      data-name="Group 4215"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont328);
export default ForwardRef;
