import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon20 = (
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
    <path d="M20.63 10.407c.625 0 1.155-.405 1.32-1.009a1.355 1.355 0 0 0-.625-1.54l-8.67-5.11a1.37 1.37 0 0 0-1.39 0l-8.67 5.11a1.395 1.395 0 0 0-.326.267H3.94l7.788-4.592a.456.456 0 0 1 .464 0l8.669 5.112a.44.44 0 0 1 .208.513.44.44 0 0 1-.44.336H2c.192.55.699.913 1.29.913h.643v6.28h-.42a.456.456 0 0 0-.457.457v1.631a1.371 1.371 0 0 0-.937 1.298c0 .755.615 1.37 1.37 1.37H20.43a1.37 1.37 0 0 0 1.37-1.37 1.37 1.37 0 0 0-.937-1.298v-1.631a.456.456 0 0 0-.457-.457h-.42v-6.28h.642Zm-3.167 0h1.61v6.28h-1.61v-6.28Zm-.877 7.193h3.365v1.104h-3.365V17.6Zm-2.908-7.193h2.872v6.28h-.42a.456.456 0 0 0-.457.457v1.56h-1.118v-1.56a.456.456 0 0 0-.456-.457h-.42v-6.28Zm-2.524 0h1.611v6.28h-1.61v-6.28Zm-.877 7.193h3.365v1.104h-3.365V17.6ZM7.37 10.407h2.871v6.28h-.42a.456.456 0 0 0-.456.457v1.56H8.247v-1.56a.456.456 0 0 0-.457-.457h-.42v-6.28Zm-2.524 0h1.611v6.28H4.846v-6.28ZM3.969 17.6h3.365v1.104H3.969V17.6Zm16.462 2.017a.457.457 0 0 1 0 .913H3.489a.457.457 0 0 1 0-.913H20.43Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon20);
export default ForwardRef;
