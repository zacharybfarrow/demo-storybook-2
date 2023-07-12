import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon21 = (
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
    <path d="m19.97 7.181 1.908-1.907a.418.418 0 0 0 0-.59L19.97 2.775l-.591.591 1.193 1.194h-7.665a1.253 1.253 0 0 0-.644.173L6.145 8.342c-.494.29-.724.857-.573 1.41s.637.924 1.21.924h.495v6.21h-.511a1.278 1.278 0 0 0-1.196 1.717H3.427L4.62 17.41l-.59-.591-1.908 1.907a.418.418 0 0 0 0 .59l1.907 1.908.591-.591-1.193-1.194H18.71c.704 0 1.276-.572 1.276-1.276s-.572-1.276-1.276-1.276h-.187v-6.211h.495c.573 0 1.06-.371 1.21-.924.151-.553-.08-1.12-.573-1.41L16.788 6.65H15.14l4.09 2.41c.255.151.21.399.19.47s-.106.309-.403.309H6.782a.403.403 0 0 1-.403-.308.403.403 0 0 1 .191-.47l6.118-3.607a.417.417 0 0 1 .205-.058h7.68L19.38 6.59l.59.591ZM8.115 10.676h.899v6.21h-.9v-6.21Zm6.072 6.21v-6.21h1.766v6.21h-1.766Zm-.836 0h-.9v-6.21h.9v6.21Zm-1.735 0H9.849v-6.21h1.766v6.21Zm7.535 1.277a.44.44 0 0 1-.44.44H6.767a.44.44 0 0 1 0-.88H18.71a.44.44 0 0 1 .44.44Zm-1.463-1.276h-.9v-6.211h.9v6.21Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon21);
export default ForwardRef;
