import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon119 = (
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
    <path d="M20.286 11.174V8.035a.418.418 0 0 0-.418-.418h-1.764a.418.418 0 0 0-.418.418v1.068l-2.79-2.222a1.247 1.247 0 0 0-1.56 0L6.23 12.54l.52.653 1.195-.95v7.27c0 .69.562 1.252 1.253 1.252h9.834c.69 0 1.253-.562 1.253-1.253v-7.27l1.194.951.52-.653-1.714-1.365Zm-3.22 8.755H15.8v-2.871h1.267v2.87Zm2.384-.418c0 .23-.187.418-.417.418h-1.131V16.64a.418.418 0 0 0-.418-.417h-2.101a.418.418 0 0 0-.418.417v3.289H9.2a.418.418 0 0 1-.418-.418v-7.935l5.075-4.042a.416.416 0 0 1 .52 0l5.074 4.042v7.935Zm0-9.003-.929-.74V8.454h.93v2.055Zm-6.501 1.214h-2.102a.418.418 0 0 0-.417.417v2.102c0 .23.187.418.417.418h2.102c.23 0 .418-.187.418-.418v-2.102a.418.418 0 0 0-.418-.417Zm-.418 2.101h-1.266v-1.266h1.266v1.266Zm-7.956 2.38V8.185l5.05-4.022a.415.415 0 0 1 .52 0l2.295 1.828.115-.09c.2-.16.418-.283.645-.373l-2.535-2.018a1.247 1.247 0 0 0-1.561 0L6.339 5.713v-.987a.418.418 0 0 0-.418-.418H4.157a.418.418 0 0 0-.418.418v3.057L2 9.168l.52.654 1.22-.971v7.351c0 .69.561 1.253 1.252 1.253h1.701v-.835h-1.7a.418.418 0 0 1-.418-.418Zm0-11.06h.929v1.235l-.93.74V5.143Zm10.808 9.516h2.101c.231 0 .418-.187.418-.418v-2.102a.418.418 0 0 0-.418-.417h-2.101a.418.418 0 0 0-.418.417v2.102c0 .23.187.418.418.418Zm.417-2.102h1.267v1.266H15.8v-1.266Zm-2.851 3.666h-2.102a.418.418 0 0 0-.417.417v2.102c0 .23.187.417.417.417h2.102c.23 0 .418-.187.418-.417V16.64a.418.418 0 0 0-.418-.417Zm-.418 2.101h-1.266v-1.266h1.266v1.266Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon119);
export default ForwardRef;
