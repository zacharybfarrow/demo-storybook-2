import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports408 = (
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
    <circle cx={11.998} cy={12} r={0.848} />
    <circle cx={11.998} cy={15.384} r={0.848} />
    <circle cx={11.998} cy={18.768} r={0.848} />
    <circle cx={11.998} cy={22.152} r={0.848} />
    <circle cx={11.998} cy={1.848} r={0.848} />
    <path d="M8.816 3.253a.848.848 0 1 0-.58-1.593.848.848 0 0 0 .58 1.593ZM6.015 4.87A.844.844 0 1 0 4.93 3.576.844.844 0 0 0 6.015 4.87ZM3.629 6.19a.844.844 0 1 0-.843 1.464.844.844 0 0 0 .843-1.464ZM1.852 11.068a.848.848 0 1 0 .301-1.669.848.848 0 0 0-.301 1.669ZM2.833 13.614a.844.844 0 1 0-1.663.293.844.844 0 0 0 1.663-.293ZM2.784 16.343a.844.844 0 1 0 1.155.306.844.844 0 0 0-1.155-.306ZM4.825 19.231a.844.844 0 1 0 1.295 1.085.844.844 0 0 0-1.295-1.085ZM8.816 20.744a.848.848 0 1 0-.583 1.592.848.848 0 0 0 .583-1.592ZM15.173 20.744a.848.848 0 1 0 .573 1.596.848.848 0 0 0-.572-1.596ZM17.98 19.127a.848.848 0 1 0 1.09 1.3.848.848 0 0 0-1.09-1.3ZM21.214 16.343a.844.844 0 1 0-.842 1.463.844.844 0 0 0 .842-1.463ZM22.144 12.93a.844.844 0 1 0-.288 1.663.844.844 0 0 0 .288-1.664ZM21.162 10.383a.848.848 0 1 0 1.671-.287.848.848 0 0 0-1.67.287ZM21.214 7.654a.844.844 0 1 0-.84-1.465.844.844 0 0 0 .84 1.465ZM19.174 4.766a.848.848 0 1 0-1.195.103h.001c.359.301.893.255 1.194-.103ZM15.76 1.652a.848.848 0 1 0-.582 1.592.848.848 0 0 0 .582-1.592Z" />
    <circle cx={11.998} cy={5.232} r={0.848} />
    <path d="M8.193 5.405a.844.844 0 1 0 .831 1.47.844.844 0 0 0-.83-1.47Z" />
    <circle cx={5.23} cy={12} r={0.848} />
    <path d="M9.038 17.128a.844.844 0 1 0-.846 1.462.844.844 0 0 0 .846-1.462ZM15.806 18.605a.844.844 0 1 0-.831-1.47.844.844 0 0 0 .83 1.47Z" />
    <circle cx={18.766} cy={12} r={0.848} />
    <path d="M16.116 6.559a.844.844 0 1 0-.001 0Z" />
    <circle cx={11.998} cy={8.616} r={0.848} />
    <path d="M15.662 14.113a.844.844 0 1 0-1.479-.816.844.844 0 0 0 1.48.816ZM18.593 15.805a.848.848 0 1 0-1.481-.825.848.848 0 0 0 1.481.825ZM6.56 7.882a.844.844 0 1 0-.818 1.478.844.844 0 0 0 .818-1.478ZM9.49 9.574a.844.844 0 1 0 .002.001H9.49ZM15.353 11.038a.844.844 0 1 0-.85-1.46.844.844 0 0 0 .85 1.46ZM18.284 9.346a.844.844 0 1 0-.836-1.467.844.844 0 0 0 .836 1.467ZM5.719 14.65a.844.844 0 1 0 .83 1.47.844.844 0 0 0-.83-1.47ZM8.653 12.959a.844.844 0 1 0 .83 1.47.844.844 0 0 0-.83-1.47Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports408);
export default ForwardRef;
