import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon106 = (
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
    <path d="M14.257 10.71a4.651 4.651 0 0 0 2.391-4.062A4.654 4.654 0 0 0 12 2a4.654 4.654 0 0 0-4.648 4.648c0 1.745.966 3.267 2.391 4.062-3.201.97-5.539 3.948-5.539 7.462v1.305c0 .733.596 1.33 1.33 1.33h3.468a3.047 3.047 0 0 1 0-.92H5.534a.41.41 0 0 1-.41-.41v-1.305a6.884 6.884 0 0 1 3.9-6.197v1.923a2.98 2.98 0 0 0 2.516 2.94v1.925c-.688.2-1.192.834-1.192 1.585C10.348 21.26 11.09 22 12 22s1.652-.741 1.652-1.652c0-.75-.504-1.385-1.192-1.585v-1.925a2.98 2.98 0 0 0 2.516-2.94v-1.923a6.884 6.884 0 0 1 3.9 6.197v1.305a.41.41 0 0 1-.41.41h-3.468a3.044 3.044 0 0 1 0 .92h3.468c.734 0 1.33-.597 1.33-1.33v-1.305c0-3.514-2.338-6.492-5.54-7.462Zm-1.526 9.638a.732.732 0 1 1-1.464-.001.732.732 0 0 1 1.464.001Zm1.324-6.45c0 1.133-.922 2.055-2.055 2.055s-2.055-.922-2.055-2.055V11.61a6.856 6.856 0 0 1 4.11 0v2.287ZM12 10.376a3.732 3.732 0 0 1-3.728-3.728A3.732 3.732 0 0 1 12 2.921a3.732 3.732 0 0 1 3.728 3.727A3.732 3.732 0 0 1 12 10.376Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon106);
export default ForwardRef;
