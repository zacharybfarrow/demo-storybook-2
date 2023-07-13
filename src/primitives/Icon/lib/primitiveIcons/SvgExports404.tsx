import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports404 = (
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
    <path d="M5.666 17.998H17v-.662H5.666v.662ZM18.326 4.53h.008L15.804 2H4.332v18.993h13.993V4.53Zm-2.324-.198V3.145l1.196 1.196h-1.196v-.009Zm.335.671v7.333h-1.334v-.999c0-.559-.456-1.007-1.006-1.007h-1.67v-.395a.994.994 0 0 0 .663-.938v-.663h.335v-.998h-.335V7h.662v-.663c0-.92-.748-1.66-1.67-1.67H10.65c-.92 0-1.661.75-1.67 1.67v1.997h.663v.663c0 .421.267.8.663.938v.395h-1.67a.999.999 0 0 0-.998.999v.998h-1.3V4.005h9.002v.998h.998ZM13.317 12l.043-.998h.637c.18 0 .335.146.335.335v.999H8.334v-.999c0-.18.146-.335.336-.335h.662V12h3.985Zm-2.995-3.666h.008v-.301a5.486 5.486 0 0 0 1.91-1.584c.061.06.087.138.087.224v2.332c0 .18-.146.336-.336.336h-1.334a.336.336 0 0 1-.335-.336v-.671Zm-.448-.835a1.574 1.574 0 0 1-.215.069v-1.23c0-.551.448-.999.998-.999H12c.55 0 .998.448.998.998h-.06a.867.867 0 0 0-.103-.198c-.009-.017-.017-.034-.026-.043-.043-.06-.086-.12-.146-.163a.69.69 0 0 0-.181-.13l-.052-.025a.916.916 0 0 0-.215-.077l-.206-.052-.13.172a4.812 4.812 0 0 1-2.005 1.678Zm1.79 2.504v.336h-.662v-.336h.662Zm1.033.999-.017.335h-2.677v-.335h2.694Zm4.966 9.328H5.003V2.671H15.33v.663H5.666v9.664H17V5.003h.663V20.33Zm0-17.659v.663h1.334v17.995H5.339V22h14.329V2.671h-2.005ZM5.666 16.33H17v-.663H5.666v.663Zm0-1.67H17v-.662H5.666v.662Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports404);
export default ForwardRef;
