import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont383 = (
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
    <path d="M12.874 13.55v1.083h4.59l.013-.245.031-.564.015-.273h-4.649Zm2.698-2.32v-1.083h-1.263v1.083h1.263Zm1.968 1.499-.032-.565-.013-.244h-4.62v1.082h4.68l-.015-.273Zm-.063 3.228.031-.565.015-.273h-4.649v1.082h4.59l.013-.244Zm-9.096 1.585v1.969c0 .769-.62 1.396-1.39 1.403H6.978l-.073.003a1.223 1.223 0 0 1-1.22-1.152l-.001-.078V4.768h12.813v12.735h1.082V3.655H17.32V2H2.2v18.31h2.532a2.291 2.291 0 0 0 2.187 1.686h12.941l.112.004c.951 0 1.753-.736 1.82-1.7l.001-.004.004-.118v-2.62l-13.417-.016ZM4.633 3.686v15.542h-.04V3.874H3.528v15.354H3.26V3.082h12.97v.604H4.634Zm16.146 16.507c-.001.398-.323.72-.722.721H9.062c.138-.2.24-.406.305-.619.116-.38.134-.768.135-1.17 0-.162-.003-.332-.005-.5H20.78v1.568Zm-3.71-9.787v-.259h-1.262v1.083h1.263v-.824Zm-3.026.824v-1.083H12.78v1.083h1.263Zm-5.756-.831-.016.565-.007.266h1.27v-1.083h-1.24l-.007.252Zm2.925-4.02.004-.262H6.57v1.058h4.63l.004-.255.008-.54Zm-4.875 9.822h5.832V11.92H6.3l.036 4.281Zm1.076-3.2h3.681v2.118H7.388l.025-2.117ZM17.54 9.593l-.032-.565-.013-.244h-4.62v1.082h4.68l-.015-.273Zm-4.964 1.638v-1.083h-1.262v1.083h1.262ZM6.57 8.36v.258h4.63l.004-.255.008-.572.003-.263H6.57v.832Zm10.97-.015-.032-.572-.013-.245h-4.62v1.09h4.68l-.015-.273Zm-6.274 1.339.032-.557.015-.273h-4.65v1.074h4.59l.013-.244ZM9.785 10.97v.259h1.262v-1.083H9.785v.824Zm-2.996-.565v.824h1.263v-1.083H6.789v.26Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont383);
export default ForwardRef;
