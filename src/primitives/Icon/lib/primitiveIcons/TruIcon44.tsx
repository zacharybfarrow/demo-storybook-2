import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon44 = (
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
    <path d="M5.981 13.238 8.53 7.642v-.14H4.564v.845h2.67l-2.22 4.891h.967zM10.93 7.43c-1.188 0-2.13.63-2.13 1.908 0 1.188.852 1.868 1.999 1.844.188 0 .385-.05.54-.14l-1.442 2.196h1.041l1.729-2.687c.254-.385.385-.754.385-1.213 0-1.278-.942-1.909-2.122-1.909Zm0 3.014c-.688 0-1.188-.393-1.188-1.106s.491-1.098 1.188-1.098c.688 0 1.18.385 1.18 1.098s-.492 1.106-1.18 1.106Z" />
    <path d="m22 12.44-.605-.605-.509.51a4.308 4.308 0 0 0-.825-.74V5.876c0-.707-.575-1.282-1.282-1.282H3.282C2.575 4.595 2 5.17 2 5.877v9.236c0 .707.575 1.282 1.282 1.282h8.958a5.526 5.526 0 0 1-.13-.855H3.282a.428.428 0 0 1-.427-.427V5.877c0-.235.192-.427.427-.427H18.78c.236 0 .427.192.427.427v5.275a4.245 4.245 0 0 0-1.396-.291c-.17-.372-.48-.663-.883-.851.393-.238.672-.615.672-1.106 0-.836-.705-1.491-1.77-1.491-1.081 0-1.786.68-1.761 1.507 0 .492.262.86.647 1.09-.615.287-1.016.82-1.016 1.516 0 .441.163.841.453 1.152a4.25 4.25 0 0 0-.777 2.453c0 2.357 1.918 4.274 4.274 4.274s4.275-1.917 4.275-4.274c0-.753-.197-1.46-.54-2.076L22 12.44Zm-6.17-4.274c.499 0 .917.295.917.779 0 .483-.402.778-.926.778-.5 0-.918-.303-.918-.77 0-.483.402-.787.926-.787Zm-.01 2.262c.446 0 .835.185 1.043.502-.801.15-1.524.523-2.101 1.053a.943.943 0 0 1-.13-.482c0-.647.533-1.073 1.189-1.073Zm5.249 4.703c0 1.885-1.534 3.42-3.42 3.42s-3.419-1.535-3.419-3.42 1.534-3.42 3.42-3.42c1.057 0 2.003.483 2.63 1.239l-2.567 2.568-1.216-1.216-.605.604 1.519 1.518a.428.428 0 0 0 .604 0l2.734-2.734c.205.438.32.926.32 1.44Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon44);
export default ForwardRef;
