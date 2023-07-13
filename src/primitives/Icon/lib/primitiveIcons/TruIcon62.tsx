import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon62 = (
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
    <path d="M9.198 6.797v-.86h-.86v.86h.86ZM19.913 5.63a1.246 1.246 0 0 0-.722-.633l-1.504-.51a1.255 1.255 0 0 0-1.128-.709h-.96l-5.044-1.711a1.256 1.256 0 0 0-1.59.784l-.315.927H7.44c-.692 0-1.254.563-1.254 1.254v6.008l-2.162 6.372c-.222.655.13 1.368.785 1.59l1.504.51c.203.42.631.71 1.127.71h.96l5.044 1.71a1.259 1.259 0 0 0 .958-.062c.3-.148.526-.405.633-.722l.315-.927h1.21c.554 0 1.025-.362 1.19-.861H7.44a.393.393 0 0 1-.393-.393V5.032c0-.216.176-.392.393-.392h9.12c.216 0 .392.176.392.392v13.035h.862V12.96l2.162-6.371a1.246 1.246 0 0 0-.063-.958ZM6.186 18.56l-1.1-.373a.393.393 0 0 1-.246-.499l1.346-3.967v4.84Zm8.254 1.661-.22.65a.39.39 0 0 1-.499.246l-2.64-.896h3.359ZM9.56 3.778l.22-.65a.394.394 0 0 1 .498-.246l2.64.896H9.56Zm9.6 2.533-1.346 3.967V5.439l1.1.374a.39.39 0 0 1 .246.498ZM12 8.98a.43.43 0 0 0-.341.167l-2.002 2.59a.43.43 0 0 0 0 .526l2.002 2.59a.43.43 0 0 0 .681 0l2.003-2.59a.43.43 0 0 0 0-.527l-2.003-2.59A.43.43 0 0 0 12 8.98Zm0 4.905L10.542 12 12 10.115 13.458 12 12 13.885Zm3.654 4.18v-.86h-.86v.86h.86Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon62);
export default ForwardRef;
