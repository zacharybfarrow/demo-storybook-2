import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon51 = (
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
    <path d="m21.548 4.114-.487-.844-2.2 1.27V2h-.975v2.54l-2.2-1.27-.487.844 2.2 1.27-2.2 1.27.488.844 2.2-1.27v2.54h.974v-2.54l2.2 1.27.487-.844-2.2-1.27 2.2-1.27Zm-4.002 11.872c-.239.236-.504.446-.79.626a4.137 4.137 0 0 1 1.772 3.393v.533a.488.488 0 0 1-.487.487h-7.515a.488.488 0 0 1-.487-.487v-.533a4.144 4.144 0 0 1 4.14-4.14h.104a3.192 3.192 0 0 0 3.19-3.189 3.192 3.192 0 0 0-4.021-3.078A4.191 4.191 0 0 0 9.419 4.29a4.191 4.191 0 0 0-4.186 4.187c0 1.506.8 2.829 1.996 3.566-2.771.92-4.777 3.536-4.777 6.613v1.921h.975v-1.92a6 6 0 0 1 5.992-5.993 4.16 4.16 0 0 0 1.698-.362 3.186 3.186 0 0 0 1.25 2.922 5.122 5.122 0 0 0-3.303 4.782v.533c0 .806.656 1.462 1.462 1.462h7.515c.806 0 1.462-.656 1.462-1.462v-.533a5.106 5.106 0 0 0-1.957-4.019ZM9.42 11.688a3.216 3.216 0 0 1-3.212-3.212A3.216 3.216 0 0 1 9.42 5.264a3.216 3.216 0 0 1 3.212 3.212 3.216 3.216 0 0 1-3.212 3.212Zm2.65.988c0-1.22.993-2.214 2.214-2.214s2.215.993 2.215 2.214-.994 2.215-2.215 2.215-2.214-.994-2.214-2.215Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon51);
export default ForwardRef;
