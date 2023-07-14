import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon110 = (
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
    <path d="M14.222 10.577a4.58 4.58 0 0 0 2.355-4A4.582 4.582 0 0 0 12 2a4.582 4.582 0 0 0-4.577 4.577 4.58 4.58 0 0 0 2.355 4c-3.153.955-5.455 3.887-5.455 7.347v1.286c0 .722.588 1.309 1.31 1.309h3.111a1.81 1.81 0 0 1-.049-.64l.028-.267h-3.09a.403.403 0 0 1-.403-.402v-1.286c0-3.133 2.14-5.775 5.034-6.543v.637c0 .419.2.79.51 1.027l-.726 6.975a.453.453 0 0 0 .132.37l1.502 1.48a.452.452 0 0 0 .636 0l1.502-1.48a.453.453 0 0 0 .132-.37l-.726-6.975c.31-.237.51-.608.51-1.027v-.637c2.894.768 5.034 3.41 5.034 6.543v1.286c0 .222-.18.402-.403.402h-3.09l.028.267a1.81 1.81 0 0 1-.05.64h3.112a1.31 1.31 0 0 0 1.31-1.31v-1.285c0-3.46-2.302-6.392-5.455-7.347Zm-5.893-4A3.675 3.675 0 0 1 12 2.907c2.024 0 3.67 1.646 3.67 3.67s-1.646 3.67-3.67 3.67a3.675 3.675 0 0 1-3.67-3.67ZM12 20.91l-1.028-1.013.685-6.586h.686l.685 6.586L12 20.91Zm.83-8.892a.387.387 0 0 1-.387.387h-.886a.387.387 0 0 1-.386-.387v-.811c.272-.034.548-.053.829-.053s.557.02.83.053v.811Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon110);
export default ForwardRef;
