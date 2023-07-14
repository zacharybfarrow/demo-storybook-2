import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon105 = (
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
    <path d="m20.137 20.014-2.343-5.117a3.376 3.376 0 0 0 .631-1.97 3.4 3.4 0 0 0-3.395-3.394H6.37v.864h6.401a3.405 3.405 0 0 0-.941 1.4h-5.46v.864h5.277a3.38 3.38 0 0 0 .184 1.4H6.37v.865h5.884l-1.046 2.283H5.12a.432.432 0 0 1-.432-.432V3.296c0-.238.194-.432.432-.432h12.06c.238 0 .432.194.432.432v5.717c.317.21.607.456.864.734V3.296c0-.715-.582-1.296-1.296-1.296H5.119c-.714 0-1.296.581-1.296 1.296v13.481c0 .715.582 1.296 1.296 1.296h5.693l-.89 1.941a.432.432 0 0 0 .544.585l1.782-.662.662 1.782a.432.432 0 0 0 .798.029l1.322-2.887 1.322 2.887a.432.432 0 0 0 .798-.03l.662-1.781 1.782.662a.432.432 0 0 0 .543-.585Zm-5.107-9.617c1.396 0 2.531 1.135 2.531 2.53s-1.135 2.532-2.53 2.532-2.532-1.135-2.532-2.531 1.135-2.531 2.531-2.531ZM13.357 20.44l-.45-1.21a.432.432 0 0 0-.555-.254l-1.21.45 1.765-3.852c.254.205.539.374.846.499l.802 1.75-1.198 2.617Zm4.351-1.464a.432.432 0 0 0-.555.255l-.45 1.209-1.888-4.124a3.378 3.378 0 0 0 2.34-.741l1.763 3.85-1.21-.449Zm-1.53-10.844v-.864h-9.81v.864h9.81Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon105);
export default ForwardRef;
