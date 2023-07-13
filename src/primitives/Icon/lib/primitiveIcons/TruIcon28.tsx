import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon28 = (
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
    <path d="M8.472 16.723h7.056v-.894H8.472v.894Zm0-2.344h7.056v-.893H8.472v.893Zm9.711-10.852h-4.247C13.726 2.652 12.938 2 12 2s-1.725.652-1.936 1.527H5.817c-.74 0-1.341.601-1.341 1.34V20.66c0 .74.601 1.341 1.34 1.341h12.367c.74 0 1.341-.601 1.341-1.34V4.866c0-.739-.601-1.34-1.34-1.34ZM9.29 5.604c0-.642.522-1.164 1.164-1.164.247 0 .447-.2.447-.447a1.1 1.1 0 0 1 2.198 0c0 .247.2.447.447.447.642 0 1.164.522 1.164 1.164v.554H9.29v-.554Zm9.34 15.055c0 .247-.2.447-.447.447H5.817a.447.447 0 0 1-.447-.447V4.867c0-.246.2-.447.447-.447h2.955c-.178.252-.3.546-.35.864h-.818c-.74 0-1.34.601-1.34 1.34v12.248c0 .739.6 1.34 1.34 1.34h8.792c.582 0 1.078-.374 1.262-.893H7.604a.447.447 0 0 1-.447-.447V6.625c0-.247.2-.447.447-.447h.792v.427c0 .246.2.447.447.447h6.314c.247 0 .447-.2.447-.447v-.427h.792c.246 0 .447.2.447.447v11.353h.893V6.625c0-.74-.6-1.341-1.34-1.341h-.818a2.046 2.046 0 0 0-.35-.864h2.955c.247 0 .447.2.447.447V20.66ZM8.472 12.036h7.056v-.894H8.472v.894Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon28);
export default ForwardRef;
