import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports409 = (
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
    <path d="m17.848 17.08-.771-.77.771.77ZM19.388 18.62l-.768-.774.768.774ZM19.388 18.62l-.771-.771-.769-.768-.771-.772-.765-.771-.775-.775c.615-.78.95-1.744.95-2.737a4.454 4.454 0 1 0-4.458 4.458c.993 0 1.957-.334 2.737-.95l.108.109 4.52 4.507c.268-.244.525-.498.766-.765l-.768-.771-.004.006Zm-7.359-3.224a3.366 3.366 0 1 1 0-6.733 3.366 3.366 0 0 1 0 6.733Z" />
    <path d="M12.029 21.91c-5.463.005-9.895-4.42-9.9-9.883-.004-5.462 4.421-9.895 9.884-9.899a9.891 9.891 0 0 1 8.061 15.635l.772.775c3.61-4.885 2.577-11.773-2.308-15.383C13.652-.455 6.765.577 3.154 5.463-.456 10.348.577 17.235 5.462 20.846a11 11 0 0 0 13.076 0l-.779-.778a9.822 9.822 0 0 1-5.73 1.843Z" />
    <path d="M12.029 3.236a8.797 8.797 0 1 0 4.966 16.05l-.765-.784a7.715 7.715 0 1 1 2.308-2.308l.784.784A8.793 8.793 0 0 0 12.07 3.23l-.04.007Z" />
    <path d="M12.029 5.405a6.624 6.624 0 1 0 3.393 12.305l-.795-.791a5.546 5.546 0 1 1 2.308-2.308l.795.795a6.617 6.617 0 0 0-5.701-10Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports409);
export default ForwardRef;
