import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont381 = (
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
    <path d="M22 15.86V2.406H2V15.86h9.56v.98l-5.698 3.884a.443.443 0 0 0-.094.617.45.45 0 0 0 .617.087l5.176-3.47v3.136a.443.443 0 1 0 .878 0v-3.136l5.176 3.492a.447.447 0 0 0 .523-.726l-5.699-3.884v-.98H22Zm-19.02-.974V3.38h18.04v11.506H2.98Zm.726-.37h16.595V3.946H3.706v10.57Zm.312-10.243H19.99v9.916h-1.452V6.131h-1.22v8.058h-.849V7.351h-1.176v6.838h-.856V9.057H13.26v5.132h-.857v-3.912h-1.176v3.912h-.85V7.837H9.195v6.352h-.82V9.057H7.169v5.132h-.857V9.87H5.136v4.32H4.018V4.272Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont381);
export default ForwardRef;
