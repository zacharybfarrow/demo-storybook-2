import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont287 = (
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
    <path d="M6.21 15.73H5.3a.93.93 0 0 1-.94-.93V14A.2.2 0 1 0 4 14v.83a1.34 1.34 0 0 0 1.3 1.3h.91a.19.19 0 0 0 .2-.18.2.2 0 0 0-.2-.22Zm0-5a.25.25 0 0 0-.26.24v.65a.26.26 0 0 0 .25.26.25.25 0 0 0 .26-.24V11a.26.26 0 0 0-.21-.3Zm-2.07-.39a.2.2 0 0 0 .2-.2v-1a.93.93 0 0 1 .93-.94h.91a.2.2 0 1 0 0-.4h-.87A1.34 1.34 0 0 0 4 9.14v1a.21.21 0 0 0 .18.17Zm3.45 2.77a.74.74 0 0 0 .74-.72V11A.2.2 0 0 0 8 11v1.38a.34.34 0 0 1-.34.33.2.2 0 0 0-.2.2.2.2 0 0 0 .17.17Zm2.25-1.23a.26.26 0 0 0 .26-.25V11a.25.25 0 0 0-.24-.25.25.25 0 0 0-.26.24v.65a.26.26 0 0 0 .28.21Zm-.44 1.8a1.73 1.73 0 0 1-1.21.51h-.1a1.69 1.69 0 0 1-1.2-.51.21.21 0 0 0-.28.06.22.22 0 0 0 0 .22 2.09 2.09 0 0 0 1.5.63h.07a2 2 0 0 0 1.5-.59.2.2 0 0 0-.24-.32Zm10.7-8.87H4a2.29 2.29 0 0 0-2.31 2.24v10A2.27 2.27 0 0 0 4 19.31h16.14a2.27 2.27 0 0 0 2.27-2.26v-10a2.29 2.29 0 0 0-2.27-2.27ZM21.7 7v10a1.55 1.55 0 0 1-1.55 1.54H4a1.54 1.54 0 0 1-1.6-1.48v-10A1.54 1.54 0 0 1 4 5.5h16.14A1.56 1.56 0 0 1 21.7 7Zm-9.59 6.72a.2.2 0 0 0-.2.2v.83a.94.94 0 0 1-.93.94h-.92a.2.2 0 0 0-.2.21.2.2 0 0 0 .2.2H11a1.34 1.34 0 0 0 1.3-1.3V14a.19.19 0 0 0-.19-.24Zm1.58-1.35h6.12v-.72h-6.12Zm0-2.38h6.12v-.68h-6.12Zm0 4.76h6.12v-.72h-6.12ZM11 7.81h-.91a.2.2 0 1 0 0 .4H11a.93.93 0 0 1 .94.93v1a.2.2 0 0 0 .21.2.2.2 0 0 0 .2-.2v-1A1.35 1.35 0 0 0 11 7.81Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont287);
export default ForwardRef;
