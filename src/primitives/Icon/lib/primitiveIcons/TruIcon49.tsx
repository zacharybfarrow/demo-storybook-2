import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon49 = (
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
    <path d="M22 17.66V9.188a1.35 1.35 0 0 0-1.348-1.349h-.309v-.533a1.35 1.35 0 0 0-1.348-1.349h-.517v-.516a1.35 1.35 0 0 0-1.349-1.349H3.35A1.35 1.35 0 0 0 2 5.442v9.37a1.35 1.35 0 0 0 1.348 1.348h.517v.517a1.35 1.35 0 0 0 1.349 1.348h.533v.533a1.35 1.35 0 0 0 1.348 1.349h13.557a1.35 1.35 0 0 0 1.27-.9H7.094a.45.45 0 0 1-.45-.449v-9.37a.45.45 0 0 1 .45-.449h13.557a.45.45 0 0 1 .45.45v8.47H22ZM3.865 7.306v7.954h-.517a.45.45 0 0 1-.45-.45v-9.37a.45.45 0 0 1 .45-.449H17.13a.45.45 0 0 1 .45.45v.516H5.214a1.35 1.35 0 0 0-1.349 1.349Zm15.58.533H7.094A1.35 1.35 0 0 0 5.747 9.19v7.937h-.533a.45.45 0 0 1-.45-.45v-9.37a.45.45 0 0 1 .45-.449h13.78a.45.45 0 0 1 .45.45v.533Zm-11.29 8.71v.277c0 .432.35.783.782.783h4.967a.784.784 0 0 0 .783-.783v-.277c0-.802-.292-1.538-.774-2.107a3.43 3.43 0 0 1-.693.572c.353.414.568.95.568 1.535v.161H9.053v-.16a2.37 2.37 0 0 1 2.368-2.368c1.134 0 2.057-.923 2.057-2.058s-.923-2.057-2.057-2.057-2.058.923-2.058 2.057c0 .584.245 1.11.637 1.485a3.27 3.27 0 0 0-1.846 2.94Zm3.266-5.583c.639 0 1.158.52 1.158 1.158s-.52 1.159-1.158 1.159-1.16-.52-1.16-1.159.52-1.158 1.16-1.158Zm3.994 2.82h4.263v-.898h-4.263v.899Zm4.263-3.309h-4.263v.9h4.263v-.9Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon49);
export default ForwardRef;
