import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon82 = (
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
    <path d="M20.109 14.164c.568-.506.918-1.152.918-1.948a.443.443 0 0 0-.443-.443c-.687 0-1.247-.56-1.247-1.248V9.13a3.99 3.99 0 0 0-3.986-3.986 3.97 3.97 0 0 0-2.758 1.113A3.991 3.991 0 0 0 8.65 2.839a3.99 3.99 0 0 0-3.986 3.986c0 1.452.781 2.725 1.945 3.422C3.938 11.11 2 13.62 2 16.574v1.84h.885v-1.84a5.77 5.77 0 0 1 5.764-5.763 3.97 3.97 0 0 0 2.716-1.073v.787c0 .688-.56 1.248-1.247 1.248a.443.443 0 0 0-.443.443c0 .75.315 1.411.917 1.95a6.5 6.5 0 0 0-1.89 4.586v1.08a1.33 1.33 0 0 0 1.329 1.329h9.756v-.886H10.03a.443.443 0 0 1-.443-.442v-1.081a5.643 5.643 0 0 1 5.637-5.637h.253a5.643 5.643 0 0 1 5.637 5.637v2.331a1.33 1.33 0 0 0 .885-1.25v-1.081a6.5 6.5 0 0 0-1.891-4.588ZM15.35 12.23c-1.71 0-3.1-1.391-3.1-3.1 0-.464.102-.902.285-1.297a5.032 5.032 0 0 0 2.47 1.665 5.027 5.027 0 0 0 3.44-.18 3.104 3.104 0 0 1-3.095 2.912Zm0-6.201a3.106 3.106 0 0 1 3.01 2.355 4.156 4.156 0 0 1-3.098.267 4.152 4.152 0 0 1-2.208-1.602 3.093 3.093 0 0 1 2.296-1.02ZM8.65 9.925c-1.71 0-3.1-1.39-3.1-3.1 0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1c0 1.71-1.39 3.1-3.1 3.1Zm2.616 3.65c-.33-.276-.562-.6-.657-.974a2.14 2.14 0 0 0 1.46-1.215c.317.46.728.85 1.204 1.142-.733.23-1.41.589-2.007 1.046Zm7.369-2.189a2.14 2.14 0 0 0 1.46 1.215c-.094.374-.326.698-.656.973a6.509 6.509 0 0 0-2.008-1.046 4.017 4.017 0 0 0 1.204-1.142Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon82);
export default ForwardRef;
