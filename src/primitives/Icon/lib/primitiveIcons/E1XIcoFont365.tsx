import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont365 = (
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
    data-name="Layer 1"
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
    <path d="M12 16.574a.532.532 0 1 0-.536-.528.538.538 0 0 0 .536.528Zm8.333-12.568H3.667A1.673 1.673 0 0 0 2 5.665v10.323a1.67 1.67 0 0 0 1.667 1.666h5.782v1.795H7.298a.272.272 0 0 0 0 .545h9.404a.272.272 0 1 0-.008-.545H14.55v-1.795h5.782A1.673 1.673 0 0 0 22 15.996V5.673a1.67 1.67 0 0 0-1.667-1.667ZM14.015 19.45H9.993v-1.795h4.022Zm7.44-3.453a1.121 1.121 0 0 1-1.122 1.12h-5.782v-.006H9.449v.006H3.665a1.121 1.121 0 0 1-1.12-1.12v-.926h18.91Zm0-1.47H2.546V5.67a1.121 1.121 0 0 1 1.122-1.12v-.008h16.67a1.121 1.121 0 0 1 1.119 1.123Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont365);
export default ForwardRef;
