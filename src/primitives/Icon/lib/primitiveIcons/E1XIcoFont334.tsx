import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont334 = (
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
    data-name="Layer 1"
    viewBox="0 0 24 24"
    role="img"
    width={props.width}
    height={props.height}
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M11.45 7.443A1.492 1.492 0 1 0 9.96 5.95a1.493 1.493 0 0 0 1.492 1.493Zm6.312 6.295-3.814 3.554a.804.804 0 0 0-.184.284l-.663 1.996a.298.298 0 0 0 .067.293.295.295 0 0 0 .2.094.186.186 0 0 0 .077-.007l2.04-.515a.602.602 0 0 0 .296-.163l3.823-3.555a1.353 1.353 0 1 0-1.842-1.981ZM13.82 19.25l.402-1.213.837.9Zm1.771-.583-1.051-1.131 2.972-2.763 1.052 1.13Zm3.633-3.368-.23.205-1.05-1.131.22-.205a.767.767 0 0 1 .558-.212.817.817 0 0 1 .543.243.793.793 0 0 1-.04 1.1Zm2.152.046a5.245 5.245 0 0 0-3.415-3.583l-1.935-9.345L15.938 2l-.417.086L2.85 4.7l-.418.086.085.418 3.148 15.345.085.418.418-.086 5.798-1.191a5.25 5.25 0 0 0 9.408-4.345ZM3.44 5.45l7.51-1.541 4.326-.919.86 4.078.234 1.138-.65-.134a5.236 5.236 0 0 0-1.055-.109 5.093 5.093 0 0 0-1.75.31 5.163 5.163 0 0 0-1.555.902l-.272.228-1.74-.818a5.123 5.123 0 0 0-2.195-.493 5.181 5.181 0 0 0-2.327.559l-.66.334Zm3.018 14.497-.041.008-1.344-6.547a14.713 14.713 0 0 1 4.713-1.04 33.086 33.086 0 0 0 3.446-.523 14.18 14.18 0 0 0 3.618-1.294v-.002l.206 1.003a5.241 5.241 0 0 0-5.954 4.592 1.763 1.763 0 0 1-1.797 1.25 2.186 2.186 0 0 0-2.189 1.593 1.872 1.872 0 0 1-.658.96Zm11.146 1.45a4.825 4.825 0 1 1 3.36-5.938 4.818 4.818 0 0 1-3.36 5.938Z"
      fill="#231f20"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont334);
export default ForwardRef;
