import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon42 = (
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
    <path d="m18.932 13.307-1.156 1.156-1.156-1.156-.598.597 1.157 1.157-1.157 1.156.598.597 1.156-1.156 1.156 1.156.598-.597-1.157-1.156 1.157-1.157-.598-.597Zm2.019-1.028V5.983c0-.7-.569-1.268-1.268-1.268H3.267C2.568 4.715 2 5.284 2 5.983v10.315c0 .699.568 1.267 1.267 1.267h9.624a5.477 5.477 0 0 1-.348-.844H3.267a.423.423 0 0 1-.422-.423v-5.344h11.288c.016-.015.031-.03.048-.044a5.518 5.518 0 0 1 1.22-.801H2.844V8.212h17.26v3.328a4.199 4.199 0 0 0-2.329-.703c-2.33 0-4.224 1.894-4.224 4.224s1.895 4.224 4.224 4.224S22 17.39 22 15.06a4.205 4.205 0 0 0-1.05-2.782ZM2.845 7.367V5.983c0-.233.19-.423.422-.423h16.416c.233 0 .423.19.423.423v1.384H2.845ZM17.776 18.44c-1.863 0-3.38-1.516-3.38-3.38s1.517-3.379 3.38-3.379 3.38 1.516 3.38 3.38-1.517 3.379-3.38 3.379Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon42);
export default ForwardRef;
